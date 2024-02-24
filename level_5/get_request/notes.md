
# Overview

Follow along in the video and make your first Get Request

# Lesson Video

https://www.youtube.com/watch?v=U0hDlcfoybI

---

# Understanding the Provided Code

In this section, we'll break down the provided code and explain what each part is doing. This code is designed to create a simple Node.js server using Express and serve a list of fake user data.

### Importing Express and Initializing the App

```jsx
const express = require('express');
const app = express();

```

- `const express = require('express');`: This line imports the Express.js framework, which simplifies building web applications and APIs in Node.js. It's stored in the `express` constant, making it available for creating an Express application.
- `const app = express();`: Here, we create an instance of an Express application and store it in the `app` constant. This `app` object is the main entry point for creating routes and handling HTTP requests.

### Fake User Data

```jsx
const users = [
    { name: 'joe', age: 20 },
    { name: 'moe', age: 24 },
    { name: 'betty', age: 20 },
    { name: 'sarah', age: 20 },
    { name: 'mike', age: 20 }
];

```

- The section below defines some fake user data in an array called `users`. This data will be sent as a response when a GET request is made to the `/users` endpoint.

### Creating a Route and Starting the Server

```jsx
app.get('/users', (req, res) => {
    res.send(users);
});

app.listen(9000, () => {
    console.log('The server is running on Port 9000');
});

```

- `app.get('/users', (req, res) => { ... });`: This code sets up a route using the `app.get` method. It specifies that when a GET request is made to the `/users` endpoint, a callback function should be executed. The callback function takes two parameters: `req` (request) and `res` (response). In this case, the callback function sends the `users` array as the response when this route is accessed.
- `app.listen(9000, () => { ... });`: This line starts the Express application and listens on port 9000. When the server starts, it executes the callback function, which logs a message indicating that the server is running on Port 9000.

In summary, this code sets up an Express server, defines a route for handling GET requests to `/users`, and responds with the `users` data when the endpoint is accessed. It also starts the server on port 9000, making it ready to accept incoming requests.

---

# Next Up

[Introduction to REST](https://www.notion.so/Introduction-to-REST-40aa7b8b4541458a91a8d408cd6931e0?pvs=21)