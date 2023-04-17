var http = require("http");
var url = require("url");
var querystring = require("querystring")

function startServer(route, handle) {
  var onRequest=(request, response) => {
    var pathname = url.parse(request.url).pathname;
    var data = [];
    
    request.on("error", function (err) {
      console.log(err);
    }).on("data", function (chunk) {
      data.push(chunk);
    }).on("end", function () {
      if (request.method === "POST") {
        data = Buffer.concat(data).toString();
        route(handle, pathname, response, querystring.parse(data));
      } else {
        var params = url.parse(request.url, true).query;
        route(handle, pathname, response, params);
      }
    });
  };
  var server = http.createServer(onRequest);

  server.listen(3000, "127.0.0.1");
  console.log("服务器运行在3000端口上");
}

module.exports = {
  startServer
}