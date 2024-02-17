import React, { useState, useEffect, useRef } from "react";

function App() {
  // State variables
  const STARTING_TIME = 7;
  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME);
  const [isGameRunning, setIsGameRunning] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const [hasPlayedOnce, setHasPlayedOnce] = useState(false);
  const textAreaRef = useRef(null);

  // useEffect to focus on textarea when the game starts
  useEffect(() => {
    if (isGameRunning && timeRemaining === STARTING_TIME) {
      textAreaRef.current.focus();
    }
  }, [isGameRunning, timeRemaining]);

  // Event handler for textarea changes
  function handleChange(e) {
    const { value } = e.target;
    setText(value);
    setWordCount(calculateWordCount(value));
  }

  // Calculate word count
  function calculateWordCount(text) {
    const wordsArr = text.trim().split(/\s+/);
    return wordsArr.filter((word) => word !== "").length;
  }

  // useEffect to handle timer logic
  useEffect(() => {
    let timer;
    if (isGameRunning && timeRemaining > 0) {
      timer = setInterval(() => {
        setTimeRemaining((time) => {
          if (time === 0) {
            clearInterval(timer);
            setIsGameRunning(false);
            setHasPlayedOnce(true);
          }
          return time === 0 ? 0 : time - 1;
        });
      }, 1000);
    } else if (timeRemaining === 0) {
      setIsGameRunning(false);
      setHasPlayedOnce(true);
    }
    return () => clearInterval(timer);
  }, [isGameRunning, timeRemaining]);

  // Event handler to start the game
  function handleStart() {
    setIsGameRunning(true);
    setTimeRemaining(STARTING_TIME);
    setText("");
    setWordCount(0);
  }

  return (
    <div className="game">
      <h1>Menoko OG Typing Test Game</h1>
      <h1>How fast do you type?</h1>
      <textarea
        onChange={handleChange}
        value={text}
        disabled={!isGameRunning}
        placeholder={!isGameRunning ? "Type here..." : "Game is running..."}
        ref={textAreaRef}
      />
      <h4>Time remaining: {timeRemaining}</h4>
      <button onClick={handleStart} disabled={isGameRunning}>
        {isGameRunning ? "Game Running..." : hasPlayedOnce ? "Play Again" : "Start"}
      </button>
      <h1>Word count: {wordCount}</h1>
    </div>
  );
}

export default App;
