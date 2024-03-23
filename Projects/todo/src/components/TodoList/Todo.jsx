import React from "react";
import { FaTrashCan } from "react-icons/fa6";
import styles from "./Todo.module.css";

export default function Todo({ todo, onUpdate, onDelete }) {
  const { id, text, status } = todo;
  const handelChange = (e) => {
    const status = e.target.checked ? "completed" : "active";
    onUpdate({ ...todo, status: status });
  };
  const handleDelete = () => onDelete(todo);

  return (
    <li className={styles.todo}>
      <input
        className={styles.checkbox}
        type="checkbox"
        id={id}
        checked={status === "completed"}
        onChange={handelChange}
      />
      <label
        className={styles.text}
        htmlFor={id}>
        {text}
      </label>
      <span className={styles.icon}>
        <button
          className={styles.button}
          onClick={handleDelete}>
          <FaTrashCan />
        </button>
      </span>
    </li>
  );
}
