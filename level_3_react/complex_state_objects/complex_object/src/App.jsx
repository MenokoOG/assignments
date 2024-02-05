import { useState } from "react";
import starEmpty from "./assets/star-empty.png";
import starFill from "./assets/star-filled.png";
import user from "./assets/user.png";

function App() {
  const [contact, setContact] = useState({
    firstName: "Menoko",
    lastName: "OG",
    phone: "+1 (111) 867-5309",
    email: "itsmyrealname@example.com",
    isFavorite: false,
  });
  /**
   * Challenge: Fill in the values in the markup
   * using the properties of our state object above
   * (Ignore `isFavorite` for now)
   */
  let starIcon = contact.isFavorite ? starFill : starEmpty;

  function toggleFavorite() {
    setContact(prevContact => ({
      ...prevContact, 
      isFavorite: !prevContact.isFavorite
    }))
  }

  return (
    <main>
      <article className="card">
        <img src={user} className="card--image" />
        <div className="card--info">
          <img
            src={`${starIcon}`}
            className="card--favorite"
            onClick={toggleFavorite}
          />
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
