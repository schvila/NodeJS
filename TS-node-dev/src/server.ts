//const http = require('http');
import http, { IncomingMessage, ServerResponse}   from 'http';

const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
  console.log(req.method, req.url);
});

server.listen(8080);