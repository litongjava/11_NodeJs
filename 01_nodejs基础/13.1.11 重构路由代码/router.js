var fs = require('fs');

function route(handle, pathname, response) {
  console.log('Routing a request for ' + pathname);

  //如果找到对应的方法,则执行对应的处理器
  if (typeof handle[pathname] === 'function') {
    handle[pathname](response);
  } else {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(__dirname + '/404.html','utf8').pipe(response);
  }
}

module.exports.route = route;
