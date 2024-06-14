// src/MemeGenerator.js
import React, { useState } from 'react';
import useFetchMemes from './useFetchMemes';
import MemeGeneratorForm from './MemeGeneratorForm';
import { v4 as uuidv4 } from 'uuid';

const MemeGenerator = () => {
  const { memes, loading } = useFetchMemes();
  const [createdMemes, setCreatedMemes] = useState([]);
  const [currentMeme, setCurrentMeme] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editMemeId, setEditMemeId] = useState(null);
  const [editingMeme, setEditingMeme] = useState(null);

  const addMeme = (memeText) => {
    const newMeme = { id: uuidv4(), ...memeText, imageUrl: currentMeme.url };
    setCreatedMemes([...createdMemes, newMeme]);
  };

  const deleteMeme = (id) => {
    setCreatedMemes(createdMemes.filter(meme => meme.id !== id));
  };

  const startEditing = (id) => {
    const memeToEdit = createdMemes.find(meme => meme.id === id);
    setIsEditing(true);
    setEditMemeId(id);
    setEditingMeme(memeToEdit);
  };

  const editMeme = (updatedText) => {
    setCreatedMemes(
      createdMemes.map(meme =>
        meme.id === editMemeId ? { ...meme, ...updatedText } : meme
      )
    );
    setIsEditing(false);
    setEditMemeId(null);
    setEditingMeme(null);
  };

  if (loading) return <p>Loading...</p>;

  if (!currentMeme && memes.length > 0) {
    setCurrentMeme(memes[Math.floor(Math.random() * memes.length)]);
  }

  return (
    <div>
      <h1>Menoko OG's React Meme Generator</h1>
      <button onClick={() => setCurrentMeme(memes[Math.floor(Math.random() * memes.length)])} className="refresh">
        Refresh Meme Image
      </button>
      <MemeGeneratorForm onSubmit={isEditing ? editMeme : addMeme} memeImage={currentMeme} editingMeme={editingMeme} />
      {/* Display created memes */}
      <div>
        {createdMemes.map(meme => (
          <div key={meme.id}>
            <img src={meme.imageUrl} alt="Created Meme" />
            <p>{meme.topText}</p>
            <p>{meme.bottomText}</p>
            <button onClick={() => deleteMeme(meme.id)} className="delete">Delete</button>
            <button onClick={() => startEditing(meme.id)} className="edit">Edit</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemeGenerator;
