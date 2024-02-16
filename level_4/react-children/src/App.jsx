import React from "react";
import CTA from "./components/CTA";
function App() {
  return (
    <div>
      <CTA>
        <h1>This is an important CTA</h1>
        <button>Click me now or you'll miss out!</button>
      </CTA>

      <CTA>
        <form>
          <input type="email" placeholder="Enter email address here" />
          <br />
          <button>Submit</button>
        </form>
      </CTA>
    </div>
  );
}

export default App;
