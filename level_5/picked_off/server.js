const express = require('express');
const middleware = require('./middleware');

const app = express();

// Middleware setup
app.use(middleware);

// Route to handle GET request
app.get('/', (req, res) => {
  res.json({ message: 'Hello from Express server!', customProperty: req.customProperty });
});

// Starting the server
const PORT = process.env.PORT || 7500;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
