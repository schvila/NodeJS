const http = require('http');
const server = http.createServer((req, res) => {
  console.log(req.url, req.headers);
})

server.listen(8000);