import { useEffect, useState } from "react";
import "./App.css";
import Todolist from "./components/TodoList/Todolist";
import TodoFilter from "./components/header/TodoFilter";
import { DarkModeProvider } from "./context/DarkModeContext";

const filters = ["all", "active", "completed"];
const key_localStorageFilter = "todoFilter";

export default function App() {
  const [filter, setFilter] = useState(readFilterFromLocalStorage);
  const handleFilter = (filter) => {
    setFilter(filter);
    localStorage.setItem(key_localStorageFilter, filter);
  };

  useEffect(() => {
    let localStorageFilter = localStorage.getItem(key_localStorageFilter)
      ? localStorage.getItem(key_localStorageFilter)
      : filter;
    setFilter(localStorageFilter);
  }, [filter]);

  return (
    <DarkModeProvider>
      <TodoFilter
        filters={filters}
        filter={filter}
        onFilterChange={handleFilter}
      />
      <Todolist filter={filter} />
    </DarkModeProvider>
  );
}

function readFilterFromLocalStorage() {
  let filter = localStorage.getItem(key_localStorageFilter);
  filter = filter ? filter : filters[0];
  return filter;
}
