import React, { createContext, useState } from 'react';
import './themes.css';

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const changeTheme = (selectedTheme) => {
    setTheme(selectedTheme);
  };

  const handleThemeChange = (e) => {
    changeTheme(e.target.value);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <div className={`theme-wrapper ${theme}`}>
        <select value={theme} onChange={handleThemeChange}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          
        </select>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
