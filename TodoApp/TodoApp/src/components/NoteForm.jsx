import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

export const NoteForm = ({ onCreateNote }) => {
  const [title, setTitle] = useState('');
  const [error, setError] = useState(false); 

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      setError(true); 
      return;
    }

    onCreateNote(title);
    setTitle('');
    setError(false); 
  };

  return (
    <Card style={{ width: '20rem' }} className="shadow mb-3">
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formNoteTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter note"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              isInvalid={error} 
            />
            {error && (
              <Form.Control.Feedback type="invalid">
                Not başlığı boş olamaz!
              </Form.Control.Feedback>
            )}
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
