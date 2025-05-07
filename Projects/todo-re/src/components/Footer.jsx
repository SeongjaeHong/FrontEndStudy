import React from "react";
import "./css/footer.css";
import { useTheme } from "../theme/ThemeContext";

export default function Footer() {
  const theme = useTheme();
  return (
    <footer className={theme}>
      <div className="AddTodo">
        <input placeholder="Add Todo" />
      </div>
      <button>Add</button>
    </footer>
  );
}
