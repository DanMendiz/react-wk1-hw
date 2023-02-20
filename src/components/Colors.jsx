import React, { useState } from 'react';

const colorNames = ['Red', 'Green', 'Blue', 'Yellow', 'Orange'];

function Colors() {
  const [color, setColor] = useState();

  const divStyle = { backgroundColor: color };

  return (
    <div style={divStyle}>
      <p>Selected color: {color}</p>
      {colorNames.map((colorName) => (
        <button onClick={() => setColor(colorName)} key={colorName}>
          {colorName}
        </button>
      ))}
    </div>
  );
}

export default Colors;
