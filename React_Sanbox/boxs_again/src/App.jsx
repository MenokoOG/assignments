import { useState } from 'react'
import Box from "./Box";
import boxes from "./boxes";

function App() {
  const[squares, setSquares] = useState(boxes)

  const toggle = (id) => {
    setSquares(prevSquares =>{
      return prevSquares.map((square) =>{
         return square.id === id ? {...square, on: !square.on} : square
      })
    })
  }

  const squareElements = squares.map(square => (<Box key={square.id} id={square.id} on={square.on} toggle= {() => toggle(square.id)}/>))

 


  return (
    <main>
      {squareElements}
    </main>
  )
}

export default App
