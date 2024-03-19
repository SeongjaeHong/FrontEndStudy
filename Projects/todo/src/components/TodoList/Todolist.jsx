import React, { useState } from "react";
import AddTodo from "../AddTodo";
import { v4 as uuidv4 } from "uuid";

export default function Todolist() {
  const [todos, setTodos] = useState([
    { id: uuidv4(), text: "shopping", status: "active" },
    { id: uuidv4(), text: "studying", status: "active" },
  ]);

  const handleAdd = (item) => {
    item = item.replace(/\s+/g, "");
    if (item) {
      setTodos(() => [
        ...todos,
        { id: uuidv4(), text: item, status: "active" },
      ]);
    }
  };

  return (
    <section>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}
