import React, { useState } from "react";
import boxes from "./boxes";

function App(props) {
  //  Step 1: Initialize state with the default value of the array
  const [boxState, setBoxState] = useState(boxes);
  


  const styles = {
    backgroundColor: props.darkMode ? "#222222" : "#cccccc"
  }
  return (
    <main>
      
      
       {/* Step 2: Map over the state array and display each box  */}
      <div className="boxes-container">
        {boxState.map((box) => (
          <div
            key={box.id}
            className="box"
            style={styles}
            
            
          ></div>
        ))}
      </div>
    </main>
  );
}

export default App;
