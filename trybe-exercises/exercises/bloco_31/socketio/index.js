const express = require('express');

const app = express();
const http = require('http').createServer(app);

const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  }});

io.on('connection', (socket) => {
  console.log(`User connected. ID: ${socket.id}`);
  socket.emit('ola', 'Que bom que você chegou aqui! Fica mais um cadin, vai ter bolo :)');

  socket.on('ping', () => {
    io.emit('pong', `${socket.id} emitiu um ping!`);
  });

});

app.get('/' , (req , res)=>{
  res.sendFile(__dirname + '/index.html');
});

http.listen(3000, () => {
  console.log('Servidor ouvindo na porta 3000');
});
