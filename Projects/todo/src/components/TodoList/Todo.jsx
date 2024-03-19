import React from "react";
import { FaTrashCan } from "react-icons/fa6";
export default function Todo({ todo, onUpdate, onDelete }) {
  const { text, status } = todo;
  const handelChange = (e) => {
    const status = e.target.checked ? "completed" : "active";
    onUpdate({ ...todo, status: status });
  };
  const handleDelete = () => onDelete(todo);
  return (
    <li>
      <input
        type="checkbox"
        id="checkbox"
        checked={status === "completed"}
        onChange={handelChange}
      />
      <label htmlFor="checkbox">{text}</label>
      <button onClick={handleDelete}>
        <FaTrashCan />
      </button>
    </li>
  );
}
