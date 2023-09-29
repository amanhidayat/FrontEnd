import React, { useState } from "react";
import "./nomor3.css"

function App() {
  const fruits = [
    "Banana",
    "Apple",
    "Orange",
    "Mango",
    "Pineapple",
    "Watermelon",
    "Strawberry",
    "Persimmon",
  ];

  const [searchText, setSearchText] = useState("");
  const [filteredFruits, setFilteredFruits] = useState(fruits);

  const handleSearchChange = (event) => {
    const searchTerm = event.target.value;
    setSearchText(searchTerm);

    const filtered = fruits.filter((fruit) =>
      fruit.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredFruits(filtered);
  };

  return (
    <div className="container">
      <div className="search-box">
        <label htmlFor="search">Search: </label>
        <input
          type="text"
          id="search"
          placeholder=""
          value={searchText}
          onChange={handleSearchChange}
        />
      </div>
      <ul>
        {filteredFruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;


