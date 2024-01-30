import React from "react";
import Contact from "./Contact";
import whiskerson from "../images/mr-whiskerson.png"
import fluffy from "../images/fluffykins.png"
import felix from "../images/felix.png"
import pumpkin from "../images/pumpkin.png"


function App() {
  return (
    <div className="contacts">
      <Contact
        img= {whiskerson}
        name="Mr. Whiskerson"
        phone="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
      />
      <Contact
        img={fluffy}
        name="Fluffykins"
        phone="(212) 555-2345"
        email="fluff@me.com"
      />
      <Contact
        img={felix}
        name="Felix"
        phone="(212) 555-4567"
        email="thecat@hotmail.com"
      />
      <Contact
        img={pumpkin}
        name="Pumpkin"
        phone="(0800) CAT KING"
        email="pumpkin@scrimba.com"
      />
    </div>
  );
}

export default App;
