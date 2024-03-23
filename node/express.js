const express = require("express");
const app = express();

//in localhost:xxxx/
app.get("/", (req, res) => {
  res.send("home page");
});

//in localhost:xxxx/hello

app.get("/hello", (req, res) => {
  res.send("Hello page");
});

//xxxx=3000 in this case
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
