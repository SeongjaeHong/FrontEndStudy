import React from "react";
import { FaSun } from "react-icons/fa";
import { MdOutlineNightlightRound } from "react-icons/md";
import { useDarkMode } from "../theme/useDarkMode";
import "./css/header.css";

export default function Header() {
  const { theme, toggleTheme } = useDarkMode();
  const handleToggleTheme = (prev) => toggleTheme(prev);

  return (
    <header className={theme}>
      <div className="theme-mark">
        {(theme === "light" && (
          <MdOutlineNightlightRound onClick={handleToggleTheme} />
        )) ||
          (theme === "dark" && <FaSun onClick={handleToggleTheme} />)}
      </div>
      <div className="tab-pannel">
        <span className="tab current">All</span>
        <span className="tab">Active</span>
        <span className="tab">Completed</span>
      </div>
    </header>
  );
}
