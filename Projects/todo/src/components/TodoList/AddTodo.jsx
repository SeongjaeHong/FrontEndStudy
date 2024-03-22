import React, { useState, useContext } from "react";
import styles from "./AddTodo.module.css";
import { DarkModeContext } from "../../context/DarkModeContext";

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState("");
  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(e.target["item_text"].value);
    setText("");
  };
  const { darkMode } = useContext(DarkModeContext);

  return (
    <form
      className={`${styles.form} ${darkMode && styles.darkMode}`}
      onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        name="item_text"
        value={text}
        onChange={handleChange}
        placeholder="Add Todo"
      />
      <button
        className={styles.button}
        type="submit"
        value="Add">
        Add
      </button>
    </form>
  );
}
