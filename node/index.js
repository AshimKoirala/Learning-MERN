// console.log("👋hey");

// global.pi = 3.1415;
// console.log("value of pi is:", global.pi);

//console.log(process.platform);

// creating server

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/hello") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("this is working\n");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found\n");
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
