// server.js
const express = require('express');
const app = express();
const port = 3000;

// Root route: http://localhost:3000/
app.get('/', (req, res) => {
  res.send('hello world');
});

// New route "firstServer": http://localhost:3000/firstServer
app.get('/firstServer', (req, res) => {
  res.send('Hi there! This is my first route built using express framework');
});

// New route "firstUser/:id": http://localhost:3000/firstUser/:id
app.get('/firstUser/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`Hi there, your user ID is ${userId}`);
});

// 404 Route for non-existent paths
app.use((req, res) => {
  res.status(404).send("404: Page not found");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
