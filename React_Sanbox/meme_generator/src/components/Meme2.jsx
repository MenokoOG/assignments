import React, { useState } from "react";
import memesData from "../memesData";

function Meme() {
  // State to store the current meme image URL
  const [currentMeme, setCurrentMeme] = useState(null);

  // Function to handle the "new meme image" button click
  const handleNewMemeClick = () => {
    // Get a random image URL from the memesData array
    const randomIndex = Math.floor(Math.random() * memesData.length);
    const randomMeme = memesData[randomIndex];

    // Log the URL of the image to the console
    console.log("New Meme Image URL:", randomMeme);

    // Update the state with the new meme image URL
    setCurrentMeme(randomMeme);
  };

  return (
    <main>
      <div className="form">
        <input type="text" placeholder="Top text" className="form--input" />
        <input type="text" placeholder="bottom text" className="form--input" />
        <button className="form--button" onClick={handleNewMemeClick}>
          Get a new meme image
        </button>
      </div>

      {/* Display the current meme image (if available) */}
      {currentMeme && (
        <div className="meme-image-container">
          <img src={currentMeme} alt="Meme" className="meme-image" />
        </div>
      )}
    </main>
  );
}

export default Meme;
