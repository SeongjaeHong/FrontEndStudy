import { createContext, useContext, useState } from "react";

const ThemeContext = createContext("light");
const ThemeSetterContext = createContext(() => {});

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

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
