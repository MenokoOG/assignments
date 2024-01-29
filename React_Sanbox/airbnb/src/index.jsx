import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./Navbar.jsx";
import "./index.css";
import Hero from "./Hero.jsx";
import Card from "./Card.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="wrapper">
      <div className="div">
    <Navbar />
    <Hero />
    <Card />
    </div>
    </div>
  </React.StrictMode>
);
