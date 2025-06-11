import React, { useState } from 'react';
import { NoteForm } from './NoteForm';
import { Notes } from './Notes';

export const TodoApp = () => {
  const [notes, setNotes] = useState([]);

  const handleCreateNote = (title) => {
    const newNote = {
      id: crypto.randomUUID(), // eşsiz ID
      title,
      completed: false,
    };
    setNotes([...notes, newNote]);
  };

  const handleToggleNote = (id) => {
    setNotes(notes.map((note) =>
      note.id === id ? { ...note, completed: !note.completed } : note
    ));
  };

  const handleDeleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="container mt-5 d-flex justify-content-center flex-column align-items-center">
      <NoteForm onCreateNote={handleCreateNote} />
      <Notes
        notes={notes}
        onToggleNote={handleToggleNote}
        onDeleteNote={handleDeleteNote}
      />
    </div>
  );
};
