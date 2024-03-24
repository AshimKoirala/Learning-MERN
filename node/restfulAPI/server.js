const express = require("express");
const app = express();
const PORT = 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Middleware to parse JSON request bodies
app.use(express.json());

//route
let users = [];

// Create a new user
app.post("/users", (req, res) => {
  const { name, email } = req.body;
  const newUser = { id: users.length + 1, name, email };
  users.push(newUser);
  res.status(201).json(newUser);
});

// Read all users
app.get("/users", (req, res) => {
  res.json(users);
});

// Read user by ID
app.get("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((user) => user.id === userId);
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  res.json(user);
});

// Update user by ID
app.put("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const { name, email } = req.body;
  const userIndex = users.findIndex((user) => user.id === userId);
  if (userIndex === -1) {
    return res.status(404).json({ error: "User not found" });
  }
  users[userIndex] = { id: userId, name, email };
  res.json(users[userIndex]);
});

// Delete user by ID
app.delete("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex((user) => user.id === userId);
  if (userIndex === -1) {
    return res.status(404).json({ error: "User not found" });
  }
  const deletedUser = users.splice(userIndex, 1)[0];
  res.json(deletedUser);
});
