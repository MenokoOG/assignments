[Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/6aef2f33-de49-4357-824c-927199bca931/660d51a8-2867-4c82-99f5-1f395c810e45/Untitled.mp4)

## Zoom put the cameras over some of the curriculum in the recording both links are provided below.

Code for follow along: https://codesandbox.io/p/sandbox/agitated-flower-cxwg49?file=%2Fsrc%2Fcomponents%2FHome.js%3A56%2C1

Finished Code: https://codesandbox.io/p/sandbox/fast-cloud-8yjjzm?file=%2Fsrc%2FApp.js%3A39%2C1

## What is React Context?

- It's a way to share data and functionality between components in a React application without having to pass props down through every level of the component tree.
- Think of it as a global bulletin board or shared space where any component can access and update information.

## What is it for?

- Ideal for sharing:
- Global data (e.g., user authentication state, theme preferences)
- Frequently accessed data (e.g., cart items, current user profile)
- Data that needs to trigger updates in multiple components

## How it scales:

- Can be used with large, complex component trees to avoid excessive prop drilling
- Improves performance by reducing unnecessary re-renders

## Pros:

- Avoids prop drilling
- Simplifies data sharing across multiple components
- Potentially improves performance

## Cons:

- Can introduce complexity if overused
- Might make it harder to track data flow in larger applications
- Potential for performance overhead if used with frequently updating data