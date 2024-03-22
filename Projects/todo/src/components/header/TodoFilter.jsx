import React from "react";
import styles from "./TodoFilter.module.css";

export default function TodoFilter({ filters, filter, onFilterChange }) {
  const handleFilter = (e) => onFilterChange(e.currentTarget.id);
  return (
    <header className={styles.header}>
      <ul className={styles.filters}>
        {filters.map((value, index) => (
          <li key={index}>
            <button
              id={value}
              className={`${styles.filter} ${
                filter === value && styles.selected
              }`}
              onClick={handleFilter}>
              {value}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}
