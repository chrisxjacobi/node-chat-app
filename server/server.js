// loaded http server, configured to integrate socket.io for client <-> server connections, used built in events (connect/disconnect)

const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '../public');
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.on('disconnect', () => {
    console.log('User was disconnected');
  });
});

server.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});





// web sockets are persistent. communication is open for as long as server/client likes.


// console.log(__dirname + '/../public');
// console.log(publicPath);
