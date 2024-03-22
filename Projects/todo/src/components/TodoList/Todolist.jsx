import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import AddTodo from "./AddTodo";
import Todo from "./Todo";
import styles from "./Todolist.module.css";
import { DarkModeContext } from "../../context/DarkModeContext";

export default function Todolist({ filter }) {
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

  const { darkMode } = useContext(DarkModeContext);

  return (
    <section className={`${styles.container} ${darkMode && styles.darkMode}`}>
      <ul className={styles.list}>
        {todos
          .filter((todo) => todo.status === filter || filter === "all")
          .map((todo) => (
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
