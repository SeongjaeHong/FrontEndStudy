import React, { useState, useContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import AddTodo from "./AddTodo";
import Todo from "./Todo";
import styles from "./Todolist.module.css";
import { DarkModeContext } from "../../context/DarkModeContext";

const key_todoLocalStorage = "todoList";

export default function Todolist({ filter }) {
  // if useState already has an initial value, it doesn't call a function by re-render.
  // so, it can prevent useless network traffic.
  // Do: useState(readTodosFromLocalStorage);
  // Don't: useState(readTodosFromLocalStorage());
  const [todos, setTodos] = useState(readTodosFromLocalStorage);

  const handleUpdate = (updated) =>
    setTodos(todos.map((todo) => (todo.id === updated.id ? updated : todo)));

  const handleAdd = (item) => {
    item = item.replace(/\s+/g, "");
    if (item) {
      item = { id: uuidv4(), text: item, status: "active" };
      setTodos([...todos, item]);
    }
  };

  useEffect(() => {
    localStorage.setItem(key_todoLocalStorage, JSON.stringify(todos));
  }, [todos]);

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

function readTodosFromLocalStorage() {
  const defaultTodos = [
    { id: uuidv4(), text: "shopping", status: "active" },
    { id: uuidv4(), text: "studying", status: "active" },
  ];
  const todos = JSON.parse(localStorage.getItem(key_todoLocalStorage));
  return todos ? todos : defaultTodos;
}
