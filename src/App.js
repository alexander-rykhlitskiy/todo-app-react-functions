import './App.css';
import React, { useState } from 'react';

function App() {

  const [items, setItems] = useState([]);
  const [currentItemValue, setCurrentItemValue] = useState('');

  const submitForm = function(event) {
    event.preventDefault();
    setItems([...items, { title: currentItemValue }]);
    setCurrentItemValue('');
  }

  const setCurrentItemValueInput = function(event) {
    setCurrentItemValue(event.target.value);
  }

  return (
    <div className="App">
      <div>
        <form onSubmit={submitForm}>
          <input placeholder="Enter task" type="text" value={currentItemValue} onChange={setCurrentItemValueInput}></input>
          <input type="submit"></input>
        </form>
      </div>
      <ul>
        {items.map((item, index) => <li key={index}>{item.title}</li>)}
      </ul>
    </div>
  );
}

export default App;
