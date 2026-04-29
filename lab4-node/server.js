const http = require("http");
const greet = require("./greeting");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  const message = greet("Chinmay");
  res.end(`Welcome to Node.js Server\n${message}`);
});

server.listen(3000, () => {
  console.log("Server running at port 3000");
});