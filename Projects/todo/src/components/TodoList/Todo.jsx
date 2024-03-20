import React from "react";
import { FaTrashCan } from "react-icons/fa6";
import { v4 as uuidv4 } from "uuid";

export default function Todo({ todo, onUpdate, onDelete }) {
  const { text, status } = todo;
  const handelChange = (e) => {
    const status = e.target.checked ? "completed" : "active";
    onUpdate({ ...todo, status: status });
  };
  const handleDelete = () => onDelete(todo);
  const chkboxId = uuidv4();
  return (
    <li>
      <input
        type="checkbox"
        id={chkboxId}
        checked={status === "completed"}
        onChange={handelChange}
      />
      <label htmlFor={chkboxId}>{text}</label>
      <button onClick={handleDelete}>
        <FaTrashCan />
      </button>
    </li>
  );
}
