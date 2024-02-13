import React, { useContext } from "react";
import { Context } from "../context/Context";

 function Profile(props) {
  const { username } = useContext(Context);
  return (
    <div>
      <h1>Profile</h1>
      <p>Welcome {username.toUpperCase()}!</p>
      <h2>Context Instructions</h2>
      <ul>
        <h2>Context Provider</h2>
        <li>1. Create Context.js</li>
        <li>2. Create context Hook </li>
        <li>3. Create ContextProvider function</li>
        <li>4. Provide data through value tag</li>
        <h2>Wrapping App in Context Provider</h2>
        <li>1. Import ContextProvider </li>
        <li>2. Wrap App Component in ContextProvider tags </li>
        <h2>Consuming Context</h2>
        <li>1. import useContext hook</li>
        <li>2. import Context </li>
        <li>3. destructure context value from Context</li>
        <li></li>
      </ul>
    </div>
  );
}

export default Profile
