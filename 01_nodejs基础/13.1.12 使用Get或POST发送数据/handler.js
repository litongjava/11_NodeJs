var fs = require("fs");
var data = require("./data.js")

// / /home
function home(response) {
  response.writeHead(200, { "Content-Type": 'text/html' });
  fs.createReadStream(__dirname + "/home.html", "utf8").pipe(response)
}

// /user
function user(response) {
  response.writeHead(200, { "Content-Type": 'application/json' });
  response.end(JSON.stringify(data))
}

// list
function list(response, params) {
  response.writeHead(200, { "Content-Type": 'application/json' });
  console.log(params);
  response.end(JSON.stringify(params))
}

module.exports = {
  home,
  user,
  list
}