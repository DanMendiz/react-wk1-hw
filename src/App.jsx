import { useState } from 'react';
import './App.css';
import Colors from './components/Colors';
import List from './components/List';
import PlusMinusButton from './components/PlusMinusButton';

const pets = [
  { name: 'pet 1', photo: '1' },
  { name: 'pet 2', photo: '2' },
  { name: 'pet 3', photo: '3' },
];

function App() {
  return (
    <div>
      <div className="App">
        <List items={pets}></List>
      </div>
      <div>
        <PlusMinusButton />
      </div>
      <div>
        <Colors />
      </div>
    </div>
  );
}

export default App;
