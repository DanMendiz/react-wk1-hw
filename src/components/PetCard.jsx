import React from 'react';
// exported to list.jsx

function PetCard({ name, photo }) {
  return (
    <div style={{ border: '3px solid', borderRadius: '1em' }}>
      <h1>{name}</h1>
      <h2>{photo}</h2>
    </div>
  );
}

export default PetCard;
