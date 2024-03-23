const express = require("express");
const app = express();
//authentication
const authenticateUser = (req, res, next) => {
  // Check if user is authenticated (e.g., validate JWT token)
  const isAuthenticated = checkAuthentication(req);
  if (isAuthenticated) {
    // If authenticated then attach user information to request object
    req.user = getUserInfo(req);
    next(); // Continue to next middleware/route handler
  } else {
    // not authenticated so 401 Unauthorized response
    res.status(401).json({ error: "Unauthorized" });
  }
};

// Protected route requiring authentication
app.get("/protected", authenticateUser, (req, res) => {
  // Access authenticated user information from req.user
  const user = req.user;
  res.json({ message: `Welcome, ${user.username}!` });
});
const checkAuthentication = (req) => {
  //check jwt valid and present or not
  return req.headers.authorization === "Bearer myAuthToken";
};

//get user info
const getUserInfo = (req) => {
  return { username: "JohnDoe" };
};
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
