import { useState } from 'react'



function App() {
  /**
     * Challenge: Convert the code below to use an array
     * held in state instead of a local variable. Initialize 
     * the state array with the same 2 items below
     * 
     * Don't worry about fixing `addItem` quite yet.
     */
  const [thingsArray, setThingsArray] = useState(["Thing 1", "Thing 2"])
    
  function addItem() {
    // We'll work on this next
    setThingsArray(prevThingsArray => {
        return [...prevThingsArray, `Thing ${prevThingsArray.length + 1}`]})
}

function removeItem() {
  setThingsArray(prevThingsArray => {
    // Use slice to create a new array without the last item
    return prevThingsArray.slice(0, prevThingsArray.length - 1);
  });
}
  
  const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
  
  return (
      <div>
          <button onClick={addItem}>Add Item</button>
          <button onClick={removeItem}>Remove Item</button>
          {thingsElements}
      </div>
  )
}

export default App
