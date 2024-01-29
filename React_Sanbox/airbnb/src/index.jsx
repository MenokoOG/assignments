import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./Navbar.jsx";
import "./index.css";
import Hero from "./Hero.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="wrapper">
      <div className="div">
    <Navbar />
    <Hero />
    </div>
    </div>
  </React.StrictMode>
);
