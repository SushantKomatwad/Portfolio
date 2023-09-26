

import React, { createContext, useState } from 'react';

export const ThemeContext = createContext({
  isDarkMode: false,
  toggleTheme: () => {},
});


export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setDarkMode] = useState(false);


  const toggleTheme = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
