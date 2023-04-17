var http = require("http");
var data = require("./data.json")

function startServer() {
  var server = http.createServer(function (req, res) {
    console.log("request");
    res.writeHead(200, {
      "Content-Type": 'application/json'
    })

    res.end(JSON.stringify(data));
  })

  server.listen(3000, "127.0.0.1");
  console.log("服务器运行在3000端口上");
}

module.exports = {
  startServer
}