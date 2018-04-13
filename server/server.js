// set up custom events to emit (create) and listen to, passed data from server <-> client using first function argument

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

  socket.emit('newMessage', {
    from: 'chris@example.com',
    text: 'Do you want to meet up at 6?',
    createdAt: 456
  });

  socket.on('createMessage', (message) => {
    console.log('createMessage', message);
  })



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
