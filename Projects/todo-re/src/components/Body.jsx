import React from 'react';
import { useTheme } from '../theme/ThemeContext';
import { ImBin2 } from 'react-icons/im';
import './css/body.css';

export default function Body({ todos, setTodos }) {
  const theme = useTheme();

  const handleTodoCheck = (key) =>
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.key === key
          ? {
              ...todo,
              status: todo.status === 'active' ? 'completed' : 'active',
            }
          : todo
      )
    );

  const handleDeleteItem = (key) =>
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.key !== key));

  return (
    <main className={theme}>
      {todos.map((todo) => (
        <div className='job' key={todo.key}>
          <input
            type='checkbox'
            id={'label' + todo.key}
            onChange={() => handleTodoCheck(todo.key)}
            checked={todo.status === 'completed'}
          />
          <label
            className={
              'overflow-hidden text-ellipsis whitespace-nowrap ' + todo.status
            }
            htmlFor={'label' + todo.key}
          >
            {todo.job}
          </label>
          <div className='bin'>
            <ImBin2 onClick={() => handleDeleteItem(todo.key)} />
          </div>
        </div>
      ))}
    </main>
  );
}
