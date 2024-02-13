import React, { useContext } from "react";
import "./styles.css";
import Home from "./components/Home";
import Profile from "./components/Profile";
import { Routes, Route, Link } from "react-router-dom";
import { Context } from "./context/Context";

 function App() {
  const { darkMode, toggleDarkMode } = useContext(Context);
  return (
    <div className={`App ${darkMode ? "darkMode" : "lightMode"}`}>
      <nav
        style={{
          display: "flex",
          width: "100vw",
          justifyContent: "space-around",
        }}
      >
        <Link to="/" className={`link ${darkMode ? "darkMode" : "lightMode"}`}>
          Home
        </Link>
        <Link
          to="/profile"
          className={`link ${darkMode ? "darkMode" : "lightMode"}`}
        >
          Profile
        </Link>
        <button onClick={toggleDarkMode}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App
