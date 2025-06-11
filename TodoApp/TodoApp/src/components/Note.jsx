import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { BsTrash } from 'react-icons/bs';

export const Note = ({ title = "Çocukları okuldan al", completed = false, onDelete, onToggle }) => {
  return (
    <Card style={{ width: '18rem' }} className="mb-3 shadow-sm">
      {/* Üst metin */}
      <Card.Body className="pb-2">
        <Card.Text>{title}</Card.Text>
      </Card.Body>

      {/* Alt bar: checkbox ve silme butonu */}
      <Card.Footer className="d-flex justify-content-between align-items-center bg-light">
        <Form.Check 
          type="checkbox"
          checked={completed}
          onChange={onToggle}
        />
        <Button variant="link" onClick={onDelete} className="p-0 text-danger">
          <BsTrash size={18} />
        </Button>
      </Card.Footer>
    </Card>
  );
};
