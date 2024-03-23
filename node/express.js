const express = require("express");
const app = express();

app.get("/hello", (req, res) => {
  res.send("Hello, World!");
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
