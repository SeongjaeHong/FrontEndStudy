import React, { useState } from "react";
import AddTodo from "../AddTodo";

export default function Todolist() {
  const [todos, setTodos] = useState([
    { id: "1", text: "shopping", status: "active" },
    { id: "2", text: "studying", status: "active" },
  ]);

  const handleAdd = (item) => {
    item = item.replace(/\s+/g, "");
    if (item) {
      let lastid = todos[todos.length - 1].id + 1;
      setTodos(() => [...todos, { id: lastid, text: item, status: "active" }]);
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
