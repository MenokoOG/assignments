const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = 8000;

// Middleware
app.use(bodyParser.json());

// Dummy data for initial todos
let todos = [
  {
    "_id": "1",
    "name": "Todo 1",
    "description": "Description of todo 1",
    "imageUrl": "http://www.example.com/image1.jpg",
    "completed": false
  },
  {
    "_id": "2",
    "name": "Todo 2",
    "description": "Description of todo 2",
    "imageUrl": "http://www.example.com/image2.jpg",
    "completed": true
  }
];

// Get all todos
app.get('/todos', (req, res) => {
  res.json(todos);
});

// Get todo by id
app.get('/todos/:id', (req, res) => {
  const id = req.params.id;
  const todo = todos.find(todo => todo._id === id);
  if (!todo) {
    return res.status(404).json({ message: 'Todo not found' });
  }
  res.json(todo);
});

// Add a new todo
app.post('/todos', (req, res) => {
  const newTodo = req.body;
  newTodo._id = uuidv4(); // Generate unique id
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Update todo by id
app.put('/todos/:id', (req, res) => {
  const id = req.params.id;
  const updatedTodo = req.body;
  const index = todos.findIndex(todo => todo._id === id);
  if (index === -1) {
    return res.status(404).json({ message: 'Todo not found' });
  }
  todos[index] = { ...todos[index], ...updatedTodo };
  res.json(todos[index]);
});

// Delete todo by id
app.delete('/todos/:id', (req, res) => {
  const id = req.params.id;
  const index = todos.findIndex(todo => todo._id === id);
  if (index === -1) {
    return res.status(404).json({ message: 'Todo not found' });
  }
  const deletedTodo = todos.splice(index, 1);
  res.json(deletedTodo[0]);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
