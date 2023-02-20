import React, { useState } from 'react';

function EventButtons() {
  const [value, setter] = useState(0);
  // const handler = () => console.log('I was clicked');
  return (
    <div>
      <p>{value}</p>
      <button onClick={() => setter(value + 1)}>Press me</button>
    </div>
  );
}

export default EventButtons;
