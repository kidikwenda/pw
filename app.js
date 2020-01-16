const http = require('http');
const url = require('url');
const fs = require('fs');

const port = process.env.PORT || 5000;

const server = http.createServer((request, response) => {
  response.writeHead(200, {'Content-Type':'text/html'});
  
  fs.readFile('./index.html', function(err, data){
    if (err) {
      response.writeHead(404);
      respone.write('Whoops! File not found!');
  } else {
      response.write(data);
  }
  response.end();
  }
)}).listen(port);

console.log(`Server running`);