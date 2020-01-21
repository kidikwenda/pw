const http = require('http');
const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/javascript');
  res.end('Hello World2\n');
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
});

app.listen(port, () => {
  console.log("Server running")
}); 