import React, { useState } from "react";

/**
 * SearchBar Component
 * Controlled input field with submit handling
 */
const SearchBar = ({ onSearch, loading }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmed = inputValue.trim();

    if (!trimmed) return;

    onSearch(trimmed);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <label htmlFor="city-input" className="visually-hidden">
        Enter city name
      </label>

      <input
        id="city-input"
        type="text"
        placeholder="Enter city..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        disabled={loading}
      />

      <button type="submit" disabled={loading}>
        {loading ? <span className="spinner"></span> : "Search"}
      </button>
    </form>
  );
};

export default React.memo(SearchBar);