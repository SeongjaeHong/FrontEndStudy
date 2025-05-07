import React from 'react';
import { FaSun } from 'react-icons/fa';
import { MdOutlineNightlightRound } from 'react-icons/md';
import { useDarkMode } from '../contexts/useDarkMode';
import './css/header.css';
import { useFilter, useFilterSetter } from '../contexts/Filtercontext';

export default function Header() {
  const { theme, toggleTheme } = useDarkMode();
  const handleToggleTheme = (prev) => toggleTheme(prev);
  const setFilter = useFilterSetter();
  const filter = useFilter();
  const filterHandler = (e) => {
    setFilter(e.target.id);
    e.target.className += ' current';
  };
  const isFocused = (f) => (filter === f ? 'current' : '');
  return (
    <header className={theme}>
      <div className='theme-mark'>
        {(theme === 'light' && (
          <MdOutlineNightlightRound onClick={handleToggleTheme} />
        )) ||
          (theme === 'dark' && <FaSun onClick={handleToggleTheme} />)}
      </div>
      <div className='tab-pannel'>
        <span
          className={'tab ' + isFocused('all')}
          id='all'
          onClick={filterHandler}
        >
          All
        </span>
        <span
          className={'tab ' + isFocused('active')}
          id='active'
          onClick={filterHandler}
        >
          Active
        </span>
        <span
          className={'tab ' + +isFocused('completed')}
          id='completed'
          onClick={filterHandler}
        >
          Completed
        </span>
      </div>
    </header>
  );
}
