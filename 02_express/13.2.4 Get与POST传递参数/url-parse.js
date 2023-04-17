const url=require('url');

var urlString="http://localhost:8080/list?page=10";
var parseResult=url.parse(urlString);
console.log(parseResult);