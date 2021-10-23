const net = require('net');

const client = net.connect({ port: 8080 }, () => {
  console.log('Client connection to the server is successful!');
});

client.on('data', (data) => {
  console.log(data.toString());
  client.end();
});

client.on('end', () => {
  console.log('Client is disconnected');
});