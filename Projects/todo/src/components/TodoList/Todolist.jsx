import React, { useState, useContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import AddTodo from "./AddTodo";
import Todo from "./Todo";
import styles from "./Todolist.module.css";
import { DarkModeContext } from "../../context/DarkModeContext";

const key_todoLocalStorage = "todoList";

export default function Todolist({ filter }) {
  const defaultTodos = [
    { id: uuidv4(), text: "shopping", status: "active" },
    { id: uuidv4(), text: "studying", status: "active" },
  ];
  const [todos, setTodos] = useState([]);

  const handleUpdate = (updated) => {
    setTodos(todos.map((todo) => (todo.id === updated.id ? updated : todo)));
    updateLocalStorage(updated);
  };

  const handleAdd = (item) => {
    item = item.replace(/\s+/g, "");
    if (item) {
      item = { id: uuidv4(), text: item, status: "active" };
      setTodos([...todos, item]);
      addLocalStorage(item);
    }
  };

  const addLocalStorage = (item, key = key_todoLocalStorage) => {
    let localItem = JSON.parse(localStorage.getItem(key));
    if (localItem) {
      if (item.constructor.name === "Array") {
        localItem.push(...item);
      } else {
        localItem.push(item);
      }

      localStorage.setItem(key, JSON.stringify(localItem));
    } else {
      if (item.constructor.name === "Array") {
        localStorage.setItem(key, JSON.stringify(item));
      } else {
        localStorage.setItem(key, JSON.stringify([item]));
      }
    }
  };

  const updateLocalStorage = (updated, key = key_todoLocalStorage) => {
    const todos = JSON.parse(localStorage.getItem(key)).map((todo) =>
      todo.id === updated.id ? updated : todo
    );
    localStorage.setItem(key_todoLocalStorage, JSON.stringify(todos));
  };

  const removeLocalStorage = (item, key = key_todoLocalStorage) => {
    let todos = JSON.parse(localStorage.getItem(key)).filter(
      (todo) => todo.id !== item.id
    );
    localStorage.setItem(key, JSON.stringify(todos));
  };

  useEffect(() => {
    let localItem = JSON.parse(localStorage.getItem(key_todoLocalStorage));
    if (localItem?.length) {
      setTodos(todos.concat(localItem));
    } else {
      setTodos(defaultTodos);
      addLocalStorage(defaultTodos);
    }
  }, []);

  const handleDelete = (deleted) => {
    setTodos(todos.filter((todo) => todo.id !== deleted.id));
    removeLocalStorage(deleted);
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
