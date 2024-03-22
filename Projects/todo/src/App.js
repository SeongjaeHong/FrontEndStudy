import { useState } from "react";
import "./App.css";
import Todolist from "./components/TodoList/Todolist";
import TodoFilter from "./components/header/TodoFilter";
import { DarkModeProvider } from "./context/DarkModeContext";
const filters = ["all", "active", "completed"];
export default function App() {
  const [filter, setFilter] = useState(filters[0]);
  return (
    <DarkModeProvider>
      <TodoFilter
        filters={filters}
        filter={filter}
        onFilterChange={setFilter}
      />
      <Todolist filter={filter} />
    </DarkModeProvider>
  );
}
