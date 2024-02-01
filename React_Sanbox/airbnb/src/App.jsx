import React from "react";
import Navbar from "./Navbar.jsx";
import Hero from "./Hero.jsx";
import Card from "./Card.jsx";
import cardData from "./data.js";

function App() {
  const cardElements = cardData.map((card) => {
    return (
      <Card
        key={card.id}
        {...card}
      />
    );
  });

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">
      {cardElements}
      </section>
    </div>
  );
}

export default App;
