const http = require("http");
const greet = require("./greeting");
const clc = require("cli-color");

const server = http.createServer((req, res) => {
  console.log(clc.blue("Request received"));

  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(`Welcome to Node.js Server\n${greet("Chinmay")}`);
    console.log(clc.green("Response sent successfully!"));
  } else {
    console.log(clc.red(`Error: Route ${req.url} not found`));

    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  }
});

server.listen(3000, () => {
  console.log(clc.green("Server running at port 3000"));
});