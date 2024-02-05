import { useState } from 'react'
import DiceBox from './DiceBox'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <DiceBox />
    </>
  )
}

export default App
