// console.log("👋hey");

// global.pi = 3.1415;
// console.log("value of pi is:", global.pi);

//console.log(process.platform);

// creating server

const http = require("http");

// Creating an HTTP server
const server = http.createServer((_req, res) => {
  // Handling incoming HTTP requests
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("yo\n");
});

// Listening for incoming requests on port 3000
server.listen(3000, "localhost", () => {
  console.log("Server running at http://localhost:3000/");
});
