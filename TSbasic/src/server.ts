import http from "http";

const server = http.createServer((req, res) => {
  console.log(req.headers, req.url);
});

server.listen(8080);