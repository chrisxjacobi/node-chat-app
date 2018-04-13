var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');

  socket.emit('createMessage', {
    from: 'sunny@example.com',
    text: 'No way!'
  });
});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});


// custom events
socket.on('newMessage', function (message) {
  console.log('New message:', message);
})
