import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { ImBin2 } from 'react-icons/im';
import './css/body.css';
import Footer from './Footer';
import { useFilter } from '../contexts/Filtercontext';

export default function Body() {
  const theme = useTheme();
  const [todos, setTodos] = useState(todoItems);
  const filter = useFilter();

  return (
    <>
      <main className={theme}>
        {todos.map((todo) => {
          if (filter === 'all' || filter === todo.status) {
            return todoItem({
              key: todo.key,
              job: todo.job,
              status: todo.status,
              setTodos: setTodos,
            });
          }
        })}
      </main>
      <Footer setTodos={setTodos} />
    </>
  );
}

const todoItems = [
  { key: 1, job: 'job1', status: 'active' },
  {
    key: 2,
    job: 'job2 which is very long name so it can very likely not be displayed in one line, so it should be managed somehow',
    status: 'completed',
  },
  { key: 3, job: 'job3', status: 'active' },
];

function todoItem({ key, job, status, setTodos }) {
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
    <div className='job' key={key}>
      <input
        type='checkbox'
        id={'label' + key}
        onChange={() => handleTodoCheck(key)}
        checked={status === 'completed'}
      />
      <label
        className={'overflow-hidden text-ellipsis whitespace-nowrap ' + status}
        htmlFor={'label' + key}
      >
        {job}
      </label>
      <div className='bin'>
        <ImBin2 onClick={() => handleDeleteItem(key)} />
      </div>
    </div>
  );
}
