module.exports = (io) => io.on('connection', (socket) => {
  socket.on('clientMessage', (message) => {
    console.log(`${socket.id}: ${message}`);
    socket.broadcast.emit('serverMessage', `Coooool, Mr. ${socket.id} just connected!`);
    io.emit('serverMessage', `${socket.id}: ${message}`);
  });

  socket.on('disconnect', () => {
    socket.broadcast.emit('serverMessage', `Mr. ${socket.id} just leave the chat!`);
  });
});
