import React, { useContext } from "react";
import styles from "./TodoFilter.module.css";
import { DarkModeContext } from "../../context/DarkModeContext";
import { HiMoon, HiSun } from "react-icons/hi";

export default function TodoFilter({ filters, filter, onFilterChange }) {
  const handleFilter = (e) => onFilterChange(e.currentTarget.id);
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const handleDarkMode = () => toggleDarkMode(darkMode);

  return (
    <header className={`${styles.header} ${darkMode && styles.darkMode}`}>
      <button
        className={styles.darkModeIcon}
        onClick={handleDarkMode}>
        {darkMode && <HiMoon />}
        {!darkMode && <HiSun />}
      </button>
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
