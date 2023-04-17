//加载nodejs内置的http模板
var http=require('http')
var server=http.createServer(function(request,response){
  response.writeHeader(200,{'Content-Type':'text/html'});
  response.end('hello,world\n');
});
//启动应用监听127.0.0.1的8000端口
server.listen(8000,'127.0.0.1');
console.log("server is running at http://127.0.0.1:8000")