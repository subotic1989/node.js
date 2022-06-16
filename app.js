const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    return res.end("empty");
  }
  if (req.url === "/test") {
    return res.end("test");
  }

  res.end("-------------");
});

server.listen(5000);
