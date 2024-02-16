React.js is your go-to for designing dynamic, efficient user interfaces. Whether you’re a seasoned developer or new to web development, this blog will explain React components, elements, and key ideas. We’ll help you master JSX syntax, React properties, and conditionals.

React Cheat Sheet
Utilized for building user interfaces in a declarative and efficient manner, React stands as an open-source JavaScript library. Operating exclusively within the view layer of a Model View Controller (MVC) architecture, it adopts a component-based approach. Facilitating the creation of modular user interfaces, React encourages the development of reusable UI components capable of presenting dynamic data through react context.

The React Cheat Sheet serves as a concise and swift reference for frequently employed React methods. This single-page resource encapsulates key components and methods for easy accessibility. Let’s watch some cheat sheet for React:

React Elements
React elements mirror regular HTML elements in their syntax. Any valid HTML element can be expressed in React.

<h1>My Header</h1>
<p>My paragraph</p>
<button>My button</button>
These React elements are constructed using JSX, a distinctive feature of React that blends HTML syntax with JavaScript functions.

However, due to JSX’s nature as JavaScript functions (as opposed to HTML), there are some syntactical differences. Notably, single-tag elements, like the img element, must be self-closing and terminate with a forward slash /:

<img src="my-image.png" />
<br />
<hr />
React Element Attributes
JSX introduces a modified syntax for attributes, aligning with JavaScript’s camelCase convention. For instance, the class attribute in HTML becomes className in JSX.

<div className="container"></div>
React Element Styles
Applying inline styles in JSX involves using double curly braces instead of double quotes. Styles are expressed not as plain strings, but as properties within objects:

<h1 style={{ fontSize: 24, margin: '0 auto', textAlign: 'center' }}>My header</h1>
React Fragments
React provides a special element known as a fragment to address the requirement of returning all elements within a single parent component. This is essential as React mandates a single “parent” for returned elements. If you prefer not to use a container element like a div, you can use a fragment:

// Valid syntax
function MyComponent() {
  return (
    <>
      <h1>My header</h1>
      <p>My paragraph</p>
    </>
 );
}
Fragments can be written in regular or shorthand syntax: or <></>.

React Components
In the realm of React useState Hook, we have the ability to organize clusters of elements into what we call React components.

A fundamental function component is crafted in a manner quite similar to a standard JavaScript function, with a couple of nuances to be mindful of.

Firstly, component names must kick off with a capital letter. That is, we’d go for something like MyComponent instead of myComponent. Furthermore, unlike regular JavaScript functions, components must gracefully return JSX.

The basic syntax of a React function component is as follows:

function App() {
  return (
     <div>Hello world!</div>
  );
}
React Props
In the world of React, components have the ability to receive data passed down to them, which we refer to as props.

These props are dispatched from the parent component to the child component. As an illustration, consider the passing of a prop named “name” from the App component to the User component:

function App() {
  return <User name="John Doe" />
}
function User(props) {
  return <h1>Hello, {props.name}</h1>; // Hello, John Doe!
}
Since props is essentially an object, we can extract the value of the “name” prop within the User component through react hooks.

For a cleaner code approach, especially when dealing with a single prop like “name,” object destructuring can be employed:

function App() {
  return <User name="John Doe" />
}
function User({ name }) {
   return <h1>Hello, {name}!</h1>; // Hello, John Doe!
}
It’s worth noting that any JavaScript value, including other elements and components, can be passed as a prop.

React Children Props
Props can also be conveyed by placing data between the opening and closing tags of a component. These props, passed in this manner, reside within the children’s property.

As an example, consider passing content between the tags of the User component:

function App() {
return (
   <User>
     <h1>Hello, John Doe!</h1>
   </User>
);
}
function User({ children }) {
  return children; // Hello, John Doe!
}
React Conditionals
React components and elements can be conditionally displayed. One approach is to employ a separate return statement with an if-statement.

function App() {
const isAuthUser = useAuth();
  if (isAuthUser) {
    // if our user is authenticated, let them use the app
   return <AuthApp />;
  }
// if user is not authenticated, show a different screen
  return <UnAuthApp />;
}
If you wish to create a conditional within a return statement, you must use a conditional that resolves to a value.

To utilize the ternary operator, enclose the entire conditional in curly braces.

function App() {
const isAuthUser = useAuth();
  return (
    <>
      <h1>My App</h1>
      {isAuthUser ? <AuthApp /> : <UnAuthApp />}
    </>
  ) 
}
React Lists
Lists of React components can be generated using the .map() function, which allows us to iterate over arrays of data and produce JSX.

Consider the example of outputting a list of soccer players using the SoccerPlayer component:

function SoccerPlayers() {
const players = ["Messi", "Ronaldo", "Laspada"];
  return (
    <div>
      {players.map((playerName) => (
        <SoccerPlayer key={playerName} name={playerName} />
      ))}
    </div>
  );
}
It’s imperative to include the key prop when looping over an array of data, and this key must be assigned a unique value, not merely an element index. In the above example, a unique value, the playerName, serves as the key.

React Context
React Context serves as a mechanism for seamlessly conveying data throughout our component tree, eliminating the need for relying solely on props.

The challenge with props lies in the occasional need to pass them through intermediary components that don’t necessarily require the data — an issue commonly referred to as props drilling.

Consider this simplified scenario where props are passed unnecessarily through a ‘Body’ component:

function App() {
return (
    <Body name="John Doe" />
  );
} 
function Body({ name }) {
  return (
    <Greeting name={name} />
  );
} 
function Greeting({ name }) {
  return <h1>Welcome, {name}</h1>;
}
Before embracing Context, it’s worthwhile to explore if our components can be better structured to circumvent the practice of passing props through unnecessary segments.

When implementing Context, we employ the createContext function provided by React. This function can be called with an initial value that becomes the starting point for the context.

The resultant context comprises a Provider and a Consumer property, both functioning as components. The Provider is wrapped around the component tree where the data needs to be propagated, while the Consumer is placed within the component set to consume this value.

import { createContext } from 'react';
const NameContext = createContext('');
function App() {
  return (
    <NameContext.Provider value="John Doe">
      <Body />
    </NameContext.Provider>
  );
} 
function Body() {
  return <Greeting />;
} 
function Greeting() {
  return (
    <NameContext.Consumer>
      {name => <h1>Welcome, {name}</h1>}
    </NameContext.Consumer>
  );
}
By adopting this approach, we enhance the organization of our components and sidestep the need to pass props through superfluous elements in the component tree.

React Hooks
React Hooks emerged with React version 16.8, providing a convenient way to integrate reusable, stateful logic into React function components, thereby extending their capabilities beyond what was traditionally exclusive to class components.

These hooks empower us to leverage features previously reserved for class components, and we can even craft our own custom hooks tailored to bestow specific functionalities upon our applications. The React library has incorporated numerous essential hooks, and we’ll delve into six that are pivotal for your understanding:

useState
useEffect
useRef
useContext
useCallback
useMemo
The useState hook, in particular, lives up to its name by enabling us to employ stateful values within function components. This hook is preferred over a simple variable because, upon state modification, the component automatically re-renders to reflect the updated value.

When using useState, we initiate it at the top of our component, optionally passing an initial value for its state variable. Employing array destructuring on the returned value allows us to access both the stored state and a function to update that state.

import { useState } from 'react';
function MyComponent() {
  const [stateValue, setStateValue] = useState(initialValue);
}
A practical illustration involves a basic counter that increments upon interaction:
import { useState } from 'react';
function Counter() {
  const [count, setCount] = useState(0);
  function updateCount() {
   setCount(count + 1);
  }
  return <button onClick={updateCount}>Count is: {count}</button>;
}
This showcases how useState facilitates the management of state in a functional and straightforward manner, enriching the functionality of React function components.

React useState Hook
The React useState hook serves a straightforward purpose — it enables the utilization of stateful values within function components.

Rather than relying on a basic variable, useState is employed because, upon the modification of state, our component undergoes a re-render, typically to showcase the updated value.

In keeping with the pattern of other hooks, we invoke useState at the outset of our component, allowing us to provide an initial value that populates its state variable.

The use of array destructuring on the value returned from useState enables us to conveniently access both the stored state and a function dedicated to updating that state.

import { useState } from 'react';
function MyComponent() {
  const [stateValue, setStateValue] = useState(initialValue);
}
For a practical demonstration, let’s consider a basic example involving the incrementation of a counter.
import { useState } from 'react';
function Counter() {
  const [count, setCount] = useState(0);
  function updateCount() {
    setCount(count + 1);
  }
  return <button onClick={updateCount}>Count is: {count}</button>;
}
This showcases how the useState hook simplifies the management of state in function components. By facilitating a seamless way to handle state changes, it enhances the functionality of React components, as illustrated in this uncomplicated counter scenario.

— — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — —

Improve the consistency and usability of your backend interface with React Templates by CodedThemes.

— — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — —

React useEffect Hook
The React useEffect hook comes into play when we need to interact with the external environment, such as making API calls. Its primary purpose is to handle side effects, encompassing operations beyond our application with unpredictable outcomes.

The basic syntax of useEffect involves providing a function as the first argument and an array as the second argument.

import { useEffect } from 'react';
function MyComponent() {
   useEffect(() => {
     // Perform side effect here
   }, []);
}
To illustrate its usage in fetching and displaying a list of posts, consider the following example:

import { useEffect } from 'react';
function PostList() {
   const [posts, setPosts] = useState([]);
   useEffect(() => {
     fetch('https://jsonplaceholder.typicode.com/posts')
       .then(response => response.json())
       .then(posts => setPosts(posts));
   }, []);
   return posts.map(post => <Post key={post.id} post={post} />);
}
If we require a value from outside the effect function, it must be included in the dependencies array. If that value undergoes changes, the effect function will be re-executed.

As an illustration, consider this code snippet that toggles the “overflow-hidden” class on the body element based on whether the mobile menu is open or closed:

function Mobile({ open }) {
useEffect(() => {
    const body = document.querySelector("#__next");
    if (open) {
      body.classList.add("overflow-hidden");
    } else {
      body.classList.remove("overflow-hidden");
    }
  }, [open]);
  // ...
}
This exemplifies how useEffect efficiently manages side effects, ensuring that our interactions with the external world are seamlessly integrated into the React component lifecycle.

React useRef
The React useRef hook provides a direct gateway to a JSX element, offering a mechanism for accessing it without the need for prop drilling.

To utilize useRef, simply call the hook, retrieve the returned value, and assign it to the ref prop of the desired React element. It’s important to note that refs are not inherent properties of components but rather of React elements.

The fundamental syntax for useRef is as follows:

import { useRef } from 'react';
function MyComponent() {
  const ref = useRef();
  return <div ref={ref} />;
}
Once a ref is linked to a specific element, the value stored in ref.current can be utilized to directly interact with the underlying element. As an example, suppose we want to focus on a search input when users employ the key combination Control + K:

import { useWindowEvent } from "@mantine/hooks";
import { useRef } from "react";
function Header() {
  const inputRef = useRef();
  useWindowEvent("keydown", (event) => {
    if (event.code === "KeyK" && event.ctrlKey) {
      event.preventDefault();
      inputRef.current.focus();
    }
  });
  return <input ref={inputRef} />;
}
In this scenario, the inputRef is employed to directly access the input element, demonstrating how useRef enhances our ability to interact with specific elements within a React component.

React useContext
The React useContext hook streamlines the consumption of context compared to employing the standard Context.Consumer component.

The syntax entails passing the entire Context object that we intend to consume into useContext. The returned value corresponds to the value propagated through the Context.

import { useContext } from 'react';
function MyComponent() {
  const value = useContext(Context);
  // ...
}
To adapt our previous example using the useContext hook:
import { createContext, useContext } from 'react';
const NameContext = createContext('');
function App() {
  return (
    <NameContext.Provider value="John Doe">
      <Body />
    </NameContext.Provider>
  );
} 
function Body() {
  return <Greeting />;
} 
function Greeting() {
  const name = useContext(NameContext);
  return (
    <h1>Welcome, {name}</h1>
  );
}
This showcases how useContext simplifies the process of accessing context values, providing a more concise and readable approach compared to the traditional Context.Consumer component.

React useCallback
React’s useCallback hook is a valuable tool for optimizing our application’s performance by preventing the recreation of functions each time a component re-renders. This is crucial for maintaining efficiency in our app.

To illustrate, consider our previous example with a PlayerList. If we enhance it to allow adding players to our array and pass down a function (handleRemovePlayer) via props to remove players, this function would be recreated with every re-render, potentially impacting performance.

To address this, we can employ useCallback by encapsulating our callback function and including its sole argument, player, in the dependencies array. Here’s a human-written version of the code:

function App() {
const [player, setPlayer] = React.useState("");
  const [players, setPlayers] = React.useState(["Messi", "Ronaldo", "Laspada"]);
  function handleChangeInput(event) {
    setPlayer(event.target.value);
  }
  function handleAddPlayer() {
    setPlayers(players.concat(player));
  }
  const handleRemovePlayer = useCallback((player) => {
    setPlayers(players.filter((p) => p !== player));
  }, [players]);
  return (
    <>
      <input onChange={handleChangeInput} />
      <button onClick={handleAddPlayer}>Add Player</button>
      <PlayerList players={players} handleRemovePlayer={handleRemovePlayer} />
    </>
  );
}
function PlayerList({ players, handleRemovePlayer }) {
  return (
    <ul>
      {players.map((player) => (
        <li key={player} onClick={() => handleRemovePlayer(player)}>
          {player}
        </li>
      ))}
    </ul>
  );
}
React useMemo
Moving on to useMemo, this performance-enhancing hook allows us to ‘memoize’ operations, remembering the results of expensive calculations to avoid unnecessary recomputation.

In contrast to useEffect and useCallback, useMemo is designed to return a value. It requires a callback function and a dependencies array, and the callback must explicitly return the value. Let’s consider a real-world example from the mdx-bundler documentation, which converts .mdx files into React components:

import * as React from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
function Post({ code, frontmatter }) {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);
  return (
    <>
      <header>
        <h1>{frontmatter.title}</h1>
        <p>{frontmatter.description}</p>
      </header>
      <main>
        <Component />
      </main>
    </>
  );
}
Here, useMemo ensures that the Component value is not needlessly recreated during re-renders, contributing to better performance.