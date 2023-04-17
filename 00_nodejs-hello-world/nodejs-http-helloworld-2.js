// 加载nodejs内置模块
var http=require('http');
function params(request,response){
	response.writeHeader(200,{'Content-Type':'text/html'});
	response.end("hello,world\n");
}
var server=http.createServer(params);
server.listen(8000,'127.0.0.1');
console.log('server is runing at http://127.0.0.1:8000');