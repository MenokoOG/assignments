import React, { useState } from "react";
const Context = React.createContext();

function ContextProvider(props) {
  const [username, setUsername] = useState("Menoko OG");

  const [darkMode, setDarkMode] = useState(true);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  return (
    <Context.Provider value={{ username, darkMode, toggleDarkMode }}>
      {props.children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
