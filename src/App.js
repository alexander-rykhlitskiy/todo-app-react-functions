import "./App.css";
import React, { useState } from "react";
import ItemsList from "./components/ItemsList";

function App() {
  const [items, setItems] = useState([]);
  const [currentItemValue, setCurrentItemValue] = useState("");

  const submitForm = function (event) {
    event.preventDefault();
    setItems([...items, { title: currentItemValue }]);
    setCurrentItemValue("");
  };

  return (
    <div className="App">
      <div>
        <form onSubmit={submitForm}>
          <input
            placeholder="Enter task"
            type="text"
            value={currentItemValue}
            onChange={event => setCurrentItemValue(event.target.value)}
          ></input>
          <input type="submit"></input>
        </form>
      </div>
      <ItemsList items={items} />
    </div>
  );
}

export default App;
