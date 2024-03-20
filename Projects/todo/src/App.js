import { useState } from "react";
import "./App.css";
import Todolist from "./components/TodoList/Todolist";
import TodoFilter from "./components/TodoList/TodoFilter";

const filters = ["all", "active", "completed"];
export default function App() {
  const [filter, setFilter] = useState(filters[0]);
  return (
    <div>
      <TodoFilter
        filters={filters}
        onFilterChange={setFilter}
      />
      <Todolist filter={filter} />
    </div>
  );
}
