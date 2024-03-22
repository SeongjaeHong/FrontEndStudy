import React, { useState } from "react";
import styles from "./AddTodo.module.css";

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState("");
  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(e.target["item_text"].value);
    setText("");
  };
  return (
    <form
      className={styles.form}
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
