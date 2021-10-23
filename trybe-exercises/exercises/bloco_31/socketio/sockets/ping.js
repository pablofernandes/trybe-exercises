module.exports = (io) => {
  io.on('connection', (socket) => {
    socket.emit('ola', 'Que bom que você chegou aqui! Fica mais um cadin, vai ter bolo :)');
    socket.on('ping', () => {
      io.emit('pong', `${socket.id} enviou um ping`);
    });
  });
};
