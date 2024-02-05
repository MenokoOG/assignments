import React, { useState } from "react";
import Star from "./Star"; // Import the Star component
import user from "./assets/user.png";

function App() {
  const [contact, setContact] = useState({
    firstName: "Menoko",
    lastName: "OG",
    phone: "+1 (111) 867-5309",
    email: "itsmyrealname@example.com",
    isFavorite: false,
  });

  function toggleFavorite() {
    setContact((prevContact) => ({
      ...prevContact,
      isFavorite: !prevContact.isFavorite,
    }));
  }

  return (
    <main>
      <article className="card">
        <img src={user} className="card--image" />
        <div className="card--info">
          {/* Render the Star component and pass isFavorite as isFilled prop */}
          <Star isFilled={contact.isFavorite} toggleFavorite={toggleFavorite} />
          <h2 className="card--name">
            {contact.firstName} {contact.lastName}
          </h2>
          <p className="card--contact">{contact.phone}</p>
          <p className="card--contact">{contact.email}</p>
        </div>
      </article>
    </main>
  );
}

export default App;
