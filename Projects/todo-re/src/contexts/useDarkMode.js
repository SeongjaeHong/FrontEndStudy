import { useSetTheme, useTheme } from './ThemeContext';

export function useDarkMode() {
  const theme = useTheme();
  const setTheme = useSetTheme();

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    if (theme === 'light') {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  };

  return { theme, toggleTheme };
}
