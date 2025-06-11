import React from 'react';
import { Note } from './Note';

export const Notes = ({ notes, onToggleNote, onDeleteNote }) => {
  return (
    <div className="d-flex flex-wrap gap-3 mt-4">
      {notes.map((note) => (
        <Note
          key={note.id}
          title={note.title}
          completed={note.completed}
          onToggle={() => onToggleNote(note.id)}
          onDelete={() => onDeleteNote(note.id)}
        />
      ))}
    </div>
  );
};
