import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

export const NoteForm = ({ onCreateNote }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Sayfa yenilenmesin
    if (!title.trim()) return; // Boş gönderme

    onCreateNote(title); // Ana bileşene aktar
    setTitle(''); // Input'u temizle
  };

  return (
    <Card style={{ width: '20rem' }} className="shadow">
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formNoteTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter note title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
          <div className="d-grid">
            <Button variant="primary" type="submit">
              Create Note
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};
