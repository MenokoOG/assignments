import React from "react"
import { useState } from "react"



function App() {
  const [isImportant, setIsImportant] = useState("Yes")


const handleClick = () =>{
  setIsImportant("No")
  }


  return (
    <div className="state">
            <h1 className="state--title">Is state important to know?</h1>
            <div className="state--value" onClick={handleClick}>
                <h1>{isImportant}</h1>
            </div>
        </div>
  )
}

export default App
