import React, { useRef } from 'react';
import './css/footer.css';
import { useTheme } from '../theme/ThemeContext';
import { v4 as uuidv4 } from 'uuid';

export default function Footer({ setTodos }) {
  const theme = useTheme();
  const inputRef = useRef();
  const addTodoItemHandler = (e) => {
    e.preventDefault();
    const value = inputRef.current.value.trim();
    if (!value) {
      inputRef.current.value = '';
      return;
    }
    setTodos((prevTodos) => [
      ...prevTodos,
      { key: uuidv4(), job: value, status: 'active' },
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
