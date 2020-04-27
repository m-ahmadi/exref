const express = require('express');
const server = express();

server.use('/static', express.static(__dirname + '/static'));

server.get('/*', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})

server.listen(8000, () => console.log('server listening on port 8000'));