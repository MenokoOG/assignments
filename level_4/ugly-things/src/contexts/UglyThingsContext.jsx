import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const UglyThingsContext = createContext();

const UglyThingsContextProvider = (props) => {
  const [uglyThings, setUglyThings] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://api.vschool.io/lawrencejefferson/thing')
      .then(response => setUglyThings(response.data))
      .catch(error => {
        console.error('Error fetching ugly things:', error);
        setError('Error fetching ugly things. Please try again later.');
      });
  }, []);

  const addUglyThing = (uglyThing) => {
    axios.post('https://api.vschool.io/lawrencejefferson/thing', uglyThing, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        setUglyThings([...uglyThings, response.data]);
      })
      .catch(error => {
        console.error('Error adding ugly thing:', error);
        setError('Error adding ugly thing. Please try again later.');
      });
  };

  const deleteUglyThing = (index) => {
    axios.delete(`https://api.vschool.io/lawrencejefferson/thing/${uglyThings[index]._id}`)
      .then(() => {
        const updatedUglyThings = [...uglyThings];
        updatedUglyThings.splice(index, 1);
        setUglyThings(updatedUglyThings);
      })
      .catch(error => {
        console.error('Error deleting ugly thing:', error);
        setError('Error deleting ugly thing. Please try again later.');
      });
  };

  const editUglyThing = (index, updatedUglyThing) => {
    const { _id } = uglyThings[index];
    axios.put(`https://api.vschool.io/lawrencejefferson/thing/${_id}`, updatedUglyThing, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        const updatedUglyThings = [...uglyThings];
        updatedUglyThings[index] = response.data;
        setUglyThings(updatedUglyThings);
      })
      .catch(error => {
        console.error('Error editing ugly thing:', error);
        setError('Error editing ugly thing. Please try again later.');
      });
  };

  return (
    <UglyThingsContext.Provider value={{ uglyThings, addUglyThing, deleteUglyThing, editUglyThing, error }}>
      {props.children}
    </UglyThingsContext.Provider>
  );
};

export default UglyThingsContextProvider;
