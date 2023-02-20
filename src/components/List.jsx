import React from 'react';
import { nanoid } from 'nanoid';
// import PersonCard from './PersonCard';
import PetCard from './PetCard';

function List({ items = [] }) {
  return (
    <>
      <h2>Pets</h2>
      <ul>
        {items.map((pet) => (
          <PetCard key={nanoid()} {...pet} />
        ))}
      </ul>
    </>
  );
}

export default List;
