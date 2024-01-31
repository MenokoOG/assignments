import React from "react";

function Jokes(props) {
  return (
    <div className="jokes">
        {props.setup && <h2>Setup:</h2>}
      {props.setup && <h3 className="setup"> {props.setup}</h3>}
        <h2>Punchline:</h2>
      <h3 className="punchline">  {props.punchline}</h3>
    </div>
  );
}

export default Jokes;
