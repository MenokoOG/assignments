import React, { useContext, useState } from "react";

 function Home(props) {
  return (
    <div>
      <h1>Home</h1>
      <h2>What is React Context?</h2>
      <ul>
        <li>
          It's a way to share data and functionality between components in a
          React application without having to pass props down through every
          level of the component tree.
        </li>
        <li>
          Think of it as a global bulletin board or shared space where any
          component can access and update information.
        </li>
      </ul>
      <h2>What is it for?</h2>
      <ul>
        <li>Ideal for sharing:</li>
        <li>
          Global data (e.g., user authentication state, theme preferences)
        </li>
        <li>
          Frequently accessed data (e.g., cart items, current user profile)
        </li>
        <li>Data that needs to trigger updates in multiple components</li>
      </ul>
      <h2>How it scales:</h2>
      <ul>
        <li>
          Can be used with large, complex component trees to avoid excessive
          prop drilling
        </li>
        <li>Improves performance by reducing unnecessary re-renders</li>
      </ul>
      <h2>Pros:</h2>
      <ul>
        <li>Avoids prop drilling</li>
        <li>Simplifies data sharing across multiple components</li>
        <li>Potentially improves performance</li>
      </ul>
      <h2>Cons:</h2>
      <ul>
        <li>Can introduce complexity if overused</li>
        <li>Might make it harder to track data flow in larger applications</li>
        <li>
          Potential for performance overhead if used with frequently updating
          data
        </li>
      </ul>
    </div>
  );
}

export default Home
