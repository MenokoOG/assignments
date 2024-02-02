import React from "react";
import memesData from "../memesData";

function Meme() {
  let url
    
    const getMemeImage = () => {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        url = memesArray[randomNumber].url
        console.log(url)
    }


  return (
    <main>
      <div className="form">
        <input type="text" placeholder="Top text" className="form--input" />
        <input type="text" placeholder="bottom text" className="form--input" />
        <button className="form--button" onClick={getMemeImage}>Get a new meme image</button>
      </div>
    </main>
  );
}

export default Meme;
