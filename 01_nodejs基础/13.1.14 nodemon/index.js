var http = require("http");

var server = http.createServer(function(req,res){
    console.log("request");
    res.writeHead(200,{
        "Content-Type":'application/json'
    })
    var obj = {
        name:"iwen",
        age:20,
        sex:"男",
        demo:"hah",
        hello:"hello"
    }
    res.end(JSON.stringify(obj));
})

server.listen(3000,"127.0.0.1");
console.log("服务器运行在3000端口上");