import React, { useState } from "react";
import Box from "./Box";
import boxes from "./boxes";

function App() {
  const [squares, setSquares] = React.useState(boxes)
    
  const squareElements = squares.map(square => (
      <Box key={square.id} on={square.on} />
  ))
  
  
  return (
      <main>
          {squareElements}
      </main>
  );
}

export default App;
