import React from "react";
import { FaTrashCan } from "react-icons/fa6";
import { v4 as uuidv4 } from "uuid";
import styles from "./Todo.module.css";

export default function Todo({ todo, onUpdate, onDelete }) {
  const { text, status } = todo;
  const handelChange = (e) => {
    const status = e.target.checked ? "completed" : "active";
    onUpdate({ ...todo, status: status });
  };
  const handleDelete = () => onDelete(todo);
  const chkboxId = uuidv4();
  return (
    <li className={styles.todo}>
      <input
        className={styles.checkbox}
        type="checkbox"
        id={chkboxId}
        checked={status === "completed"}
        onChange={handelChange}
      />
      <label
        className={styles.text}
        htmlFor={chkboxId}>
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
