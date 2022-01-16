import React from "react";
import "./card.css";

const SearchBox = ({ searchField, searchChange }) => {
  return (
    <div>
      <input
        type="search"
        placeholder="Search Avatar"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
