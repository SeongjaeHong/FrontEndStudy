import { useSetTheme, useTheme } from "./ThemeContext";

export function useDarkMode() {
  const theme = useTheme();
  const setTheme = useSetTheme();

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return { theme, toggleTheme };
}
