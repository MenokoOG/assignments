import React from "react";
import katie from "./images/katie-zaferes.png"
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Card from "./components/Card.jsx";

function App(){
    return (
        <div>
        <Navbar />
        < Hero />
        <Card 
            img={katie}
            rating="5.0"
            reviewCount={6}
            country="USA"
            title="Life Lessons with Katie Zaferes"
            price={136}
        />
    </div>
    )
}

export default App