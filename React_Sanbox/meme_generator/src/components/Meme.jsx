import { useState } from "react";
import memesData from "../memesData.js";

function Meme() {
  // 1. Set up the text inputs to save to the `topText` and `bottomText` state variables.
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg" 
  });
  const [allMemeImages, setAllMemeImages] = useState(memesData);

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }));
  }

  return (
    <main>
      <div className="form">
        {/* Text inputs for top and bottom text */}
        <input 
          type="text"
          placeholder="Top text"
          className="form--input"
          // Update topText state when input changes
          onChange={(e) => setMeme(prevMeme => ({ ...prevMeme, topText: e.target.value }))}
        />
        <input 
          type="text"
          placeholder="Bottom text"
          className="form--input"
          // Update bottomText state when input changes
          onChange={(e) => setMeme(prevMeme => ({ ...prevMeme, bottomText: e.target.value }))}
        />
        <button 
          className="form--button"
          onClick={getMemeImage}
        >
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        {/* Use state variables for top and bottom text */}
        <img src={meme.randomImage} className="meme--image" />
        {/* Replace hard-coded text with state variables */}
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}

export default Meme;
