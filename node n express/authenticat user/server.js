const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Load existing users from file or initialize empty array
let users = []; //will be found in users.json
try {
  const data = fs.readFileSync("users.json");
  users = JSON.parse(data);
} catch (error) {
  console.log("No existing user data found.");
}

// Routes
app.post("/register", (req, res) => {
  const { username, password } = req.body;

  // Check if username or password is missing
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required" });
  }

  // Check if username already exists
  if (users.some((user) => user.username === username)) {
    return res.status(400).json({ message: "Username already exists" });
  }

  // Create user object and push to array
  const user = { username, password };
  users.push(user);

  // Save updated user data to file
  fs.writeFileSync("users.json", JSON.stringify(users));

  res.status(201).json({ message: "User created successfully" });
});
// Login route
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Find user by username
  const user = users.find((user) => user.username === username);

  // Check if user exists and password matches
  if (!user || user.password !== password) {
    return res.status(401).json({ message: "Invalid username or password" });
  }

  // Login successful
  res.status(200).json({ message: "Login successful" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
