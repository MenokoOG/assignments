import React, { useState, useContext } from 'react'; // Add useContext to the import statement
import { UglyThingsContext } from './contexts/UglyThingsContext';

const App = () => {
  const { uglyThings, addUglyThing, deleteUglyThing, editUglyThing, error } = useContext(UglyThingsContext);
  const [imageUrl, setImageUrl] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editDescription, setEditDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!imageUrl || !title || !description) return;
    addUglyThing({ title, description, imgUrl: imageUrl });
    setImageUrl('');
    setTitle('');
    setDescription('');
  };

  const handleSubmitEdit = (index) => {
    if (!editTitle || !editDescription) return;
    editUglyThing(index, { title: editTitle, description: editDescription, imgUrl: uglyThings[index].imgUrl });
    setEditIndex(null);
    setEditTitle('');
    setEditDescription('');
  };

  return (
    <div>
      <h1> Menoko Og Ugly Things</h1>
      <form onSubmit={handleSubmit} className='form'>
        <input type="text" placeholder="Image URL" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
      {error && <p>Error: {error}</p>}
      <ul className="ugly-things-list">
        {uglyThings.map((uglyThing, index) => (
          <li key={index}>
            <div className="ugly-thing">
              <img src={uglyThing.imgUrl} alt={uglyThing.title} className="ugly-thing-image" />
              {editIndex === index ? (
                <div className="edit-form">
                  <input type="text" placeholder="Title" value={editTitle} onChange={(e) => setEditTitle(e.target.value)} />
                  <input type="text" placeholder="Description" value={editDescription} onChange={(e) => setEditDescription(e.target.value)} />
                  <button onClick={() => handleSubmitEdit(index)}>Submit</button>
                  <button onClick={() => setEditIndex(null)}>Cancel</button>
                </div>
              ) : (
                <div className="ugly-thing-details">
                  <h2>{uglyThing.title}</h2>
                  <p>{uglyThing.description}</p>
                  <div className="ugly-thing-buttons">
                    <button onClick={() => deleteUglyThing(index)}>Delete</button>
                    <button onClick={() => setEditIndex(index)}>Edit</button>
                  </div>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
