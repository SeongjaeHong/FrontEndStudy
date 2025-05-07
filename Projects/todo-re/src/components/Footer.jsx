import React, { useRef } from 'react';
import './css/footer.css';
import { useTheme } from '../theme/ThemeContext';

export default function Footer({ setTodos }) {
  const theme = useTheme();
  const inputRef = useRef();
  const addTodoItemHandler = (e) => {
    e.preventDefault();
    const value = inputRef.current.value.trim();
    if (!value) return;
    setTodos((prevTodos) => [
      ...prevTodos,
      { key: Date.now(), job: value, status: 'active' },
    ]);
    inputRef.current.value = '';
  };
  return (
    <footer className={theme}>
      <form className='AddTodo' onSubmit={addTodoItemHandler}>
        <input ref={inputRef} id='new-todo' placeholder='Add Todo' />
        <button>Add</button>
      </form>
    </footer>
  );
}
