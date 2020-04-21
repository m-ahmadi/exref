const WebSocket = require('ws');
 
const ws = new WebSocket('ws://www.host.com/path', {
  perMessageDeflate: false
});

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// express
const express = require('express');
const http = require('http');
const url = require('url');
const WebSocket = require('ws');
 
const app = express();
 
app.use(function (req, res) {
  res.send({ msg: "hello" });
});
 
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });
 
wss.on('connection', function connection(ws, req) {
  const location = url.parse(req.url, true);
  // You might use location.query.access_token to authenticate or share sessions 
  // or req.headers.cookie (see http://stackoverflow.com/a/16395220/151312) 
 
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });
 
  ws.send('something');
});
 
server.listen(8080, function listening() {
  console.log('Listening on %d', server.address().port);
});