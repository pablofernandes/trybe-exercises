const net = require('net');

const server = net.createServer((connection) => {
  console.log('Client is connected');
  
  connection.on('end', () => {
    console.log('Client is disconnected');
  });
  
  //connection.write('This is a server message! \r\n');
  //connection.pipe(connecttion);
});

server.getConnections((err, count) => {
  console.log(`Connections: ${count}`);
});

server.listen(8080, () => {
  console.log('Server is listening on port 8080');
});