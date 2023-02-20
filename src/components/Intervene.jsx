import React from 'react';
import MyComponent from './MyComponent';
//intervene act like a blocker

function Intervene(props) {
  return (
    <div>
      <MyComponent {...props} />
    </div>
  );
}

export default Intervene;
