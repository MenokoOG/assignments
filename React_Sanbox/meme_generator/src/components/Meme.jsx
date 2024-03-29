import { useState, useEffect } from "react";

function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  });
  const [allMemes, setAllMemes] = useState([]);
/**
    useEffect takes a function as its parameter. If that function
    returns something, it needs to be a cleanup function. Otherwise,
    it should return nothing. If we make it an async function, it
    automatically retuns a promise instead of a function or nothing.
    Therefore, if you want to use async operations inside of useEffect,
    you need to define the function separately inside of the callback
    function, as seen below:
    */

    useEffect(() => {
      async function getMemes() {
          const res = await fetch("https://api.imgflip.com/get_memes")
          const data = await res.json()
          setAllMemes(data.data.memes)
      }
      getMemes()
  }, [])
  // useEffect(() => {
  //   fetch("https://api.imgflip.com/get_memes")
  //     .then(response => response.json())
  //     .then(data => {
  //       if (data.success) {
  //         setAllMemes(data.data.memes);
  //       } else {
  //         console.error("Failed to fetch memes data");
  //       }
  //     })
  //     .catch(error => {
  //       console.error("Error fetching memes data:", error);
  //     });
  // }, []); // Empty dependency array ensures this effect runs only once on component mount

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }));
  }

  return (
    <main>
      <div className="form">
        <input
          type="text"
          placeholder="Top text"
          className="form--input"
          onChange={(e) => setMeme(prevMeme => ({ ...prevMeme, topText: e.target.value }))}
        />
        <input
          type="text"
          placeholder="Bottom text"
          className="form--input"
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
        <img src={meme.randomImage} alt="Meme" className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}

export default Meme;
