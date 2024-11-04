const express = require("express");
const app = express();
const PORT = 3000;

// Define a basic API endpoint
app.get("/api/greet", (req, res) => {
    res.json({ message: "Hello from Express API!" });
});

// Endpoint with route parameter
app.get("/api/user/:id", (req, res) => {
    const userId = req.params.id;
    res.json({ message: `Hello, your user ID is ${userId}` });
});

// Endpoint with query parameters
app.get("/api/search", (req, res) => {
    const { query } = req.query;
    res.json({ message: `You searched for: ${query}` });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
