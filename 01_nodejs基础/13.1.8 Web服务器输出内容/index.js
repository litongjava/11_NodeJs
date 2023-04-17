var http = require('http');

var onRequest = function(request, response) {
  console.log('Request received');
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.write('Hello from out application');
  // response.end('bye');
}

var server = http.createServer(onRequest);

server.listen(3000, '127.0.0.1');
console.log('Server started on localhost port 3000');


// var http = require("http");
// var fs = require("fs")

// var server = http.createServer(function (req, res) {
//   console.log("request");
//   res.writeHead(200, {
//     // 纯文本、HTML、JSON
//     "Content-Type": 'application/json'
//   })
//   var obj = {
//     name: "Ping",
//     age: 20
//   }
//   res.end(JSON.stringify(obj));
// })

// server.listen(3001, "127.0.0.1");
// console.log("服务器运行在3000端口上");

var http = require('http');
var fs = require('fs');

var onRequest = function(request, response) {
  console.log('Request received');
  response.writeHead(200, { 'Content-Type': 'text/html' });
  var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
  myReadStream.pipe(response);
}

var server = http.createServer(onRequest);

server.listen(3001, '127.0.0.1');
console.log('Server started on localhost port 3000');