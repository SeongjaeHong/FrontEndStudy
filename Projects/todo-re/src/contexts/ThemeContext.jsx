import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext('light');
const ThemeSetterContext = createContext(() => {});

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const isDark = localStorage.theme === 'dark';
    if (isDark) setTheme('dark');
    else setTheme('light');
  }, []);

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeSetterContext.Provider value={setTheme}>
        {children}
      </ThemeSetterContext.Provider>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

export function useSetTheme() {
  return useContext(ThemeSetterContext);
}
