import React, { useState } from "react";
import AddTodo from "./AddTodo";
import { v4 as uuidv4 } from "uuid";

import Todo from "./Todo";

export default function Todolist() {
  const [todos, setTodos] = useState([
    { id: uuidv4(), text: "shopping", status: "active" },
    { id: uuidv4(), text: "studying", status: "active" },
  ]);

  const handleUpdate = (updated) =>
    setTodos(todos.map((todo) => (todo.id === updated.id ? updated : todo)));

  const handleAdd = (item) => {
    item = item.replace(/\s+/g, "");
    if (item) {
      setTodos(() => [
        ...todos,
        { id: uuidv4(), text: item, status: "active" },
      ]);
    }
  };

  const handleDelete = (deleted) => {
    setTodos(todos.filter((todo) => todo.id !== deleted.id));
  };

  return (
    <section>
      <ul>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}
