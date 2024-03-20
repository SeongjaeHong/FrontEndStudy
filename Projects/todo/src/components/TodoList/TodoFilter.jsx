import React from "react";

export default function TodoFilter({ filters, onFilterChange }) {
  const handleFilter = (e) => onFilterChange(e.currentTarget.id);
  return (
    <ul>
      {filters.map((filter, index) => (
        <li key={index}>
          <button
            id={filter}
            onClick={handleFilter}>
            {filter}
          </button>
        </li>
      ))}
    </ul>
  );
}
