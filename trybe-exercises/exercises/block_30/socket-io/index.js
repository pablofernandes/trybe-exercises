const express = require('express');

const app = express();

const http = require('http').createServer(app);

app.get('/' , (req , res)=>{
   res.sendFile(__dirname + '/index.html');
});

app.listen(3000, () => {
  console.log('The server is up and listening on port 3000');
});