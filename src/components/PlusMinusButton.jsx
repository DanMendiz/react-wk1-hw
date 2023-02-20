import React, { useState } from 'react';

function PlusMinusButton() {
  const [value, setter] = useState(0);
 
  return (
    <div>
      <p>{value}</p>
      <button onClick={() => setter(value - 1)}>Minus (-) Button</button>
      <button onClick={() => setter(value + 1)}>Plus (+) Button</button>
    </div>
  );
}

export default PlusMinusButton;
