import React from 'react'

export default function CourseCard({ name, image }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <img src={image} alt={name} width="150" />
      <div>{name}</div>
    </div>
  );
}
