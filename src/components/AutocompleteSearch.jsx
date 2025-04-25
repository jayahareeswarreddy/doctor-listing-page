import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AutocompleteSearch = ({ doctors }) => {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const val = e.target.value;
    setInput(val);
    if (val.length === 0) return setSuggestions([]);
    const matches = doctors
      .filter((doc) => doc.name.toLowerCase().includes(val.toLowerCase()))
      .slice(0, 3);
    setSuggestions(matches);
  };

  const handleSelect = (name) => {
    setInput(name);
    setSuggestions([]);
    navigate(`/?name=${encodeURIComponent(name)}`);
  };

  return (
    <div>
      <input
        data-testid="autocomplete-input"
        value={input}
        onChange={handleChange}
        className="border p-2 w-full rounded"
        placeholder="Search doctor..."
      />
      {suggestions.length > 0 && (
        <ul className="border rounded shadow p-2 bg-white">
          {suggestions.map((doc, idx) => (
            <li
              key={idx}
              data-testid="suggestion-item"
              className="cursor-pointer hover:bg-gray-100 p-1"
              onClick={() => handleSelect(doc.name)}
            >
              {doc.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutocompleteSearch;