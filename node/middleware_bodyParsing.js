//middlewarw is functions that have access to the request object (req),
//the response object (res), and the next middleware function
//in the application’s request-response cycle

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// Middleware for parsing JSON request bodies
app.use(bodyParser.json());

// keeping log of every requested request aka '/' '/home' '/about' etc
// app.use((req, res, next) => {
//   console.log(`${req.method} ${req.url}`);
//   next();
// });

//for specific
app.use((req, res, next) => {
  if (req.url != "/") {
    console.log(`${req.method} ${req.url}`);
  }
  next();
});

app.get("/", (req, res) => {
  res.send("wasssuppppp");
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
