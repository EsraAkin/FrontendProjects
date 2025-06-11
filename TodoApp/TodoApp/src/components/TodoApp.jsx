import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NoteForm } from './NoteForm';
import { Notes } from './Notes';

const API_URL = "https://684a06cd45f4c0f5ee736d9f.mockapi.io/notes"; // Mockapi url

export const TodoApp = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios.get(API_URL)
      .then(res => setNotes(res.data))
      .catch(err => console.error("Veri çekme hatası:", err));
  }, []);

  const handleCreateNote = async (title) => {
    const newNote = { title, completed: false };
    const res = await axios.post(API_URL, newNote);
    setNotes([...notes, res.data]);
  };

  const handleToggleNote = async (id) => {
    const note = notes.find((n) => n.id === id);
    const updatedNote = { ...note, completed: !note.completed };
    await axios.put(`${API_URL}/${id}`, updatedNote);
    setNotes(notes.map((n) => (n.id === id ? updatedNote : n)));
  };

  const handleDeleteNote = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    setNotes(notes.filter((n) => n.id !== id));
  };

  return (
    <div className="container mt-5 d-flex flex-column align-items-center">
      <NoteForm onCreateNote={handleCreateNote} />
      <Notes
        notes={notes}
        onToggleNote={handleToggleNote}
        onDeleteNote={handleDeleteNote}
      />
    </div>
  );
};
