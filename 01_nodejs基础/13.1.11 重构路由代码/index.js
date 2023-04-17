//入口
var server = require('./server');
var router = require('./router');
var handler = require('./handler');

var handle = {};
//将方法赋值给路径值
handle["/"] = handler.home;
handle['/home'] = handler.home;
handle['/review'] = handler.review;
handle['/api/v1/records'] = handler.api_records;

server.startServer(router.route, handle);