import React from "react";
import Dropdown from "./Dropdown";
import "./App.css"; // Import the CSS file

const items = [
  { id: 1, text: "India" },
  { id: 2, text: "Russia" },
  { id: 3, text: "China" },
  { id: 3, text: "Afganisthan" },
  { id: 3, text: "Nepal" },
  { id: 3, text: "Bhutan" },
  { id: 3, text: "Shri Lanka" },
  { id: 3, text: "Indonesia" },
];

const App = () => {
  return (
    <div className="app">
      <div className="content-ctr">
        <h1>Dropdown Example</h1>
        <Dropdown items={items} />
      </div>
    </div>
  );
};

export default App;
