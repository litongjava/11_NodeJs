const express = require("express");
const app = express();

var port = 3000;

// 配置服务器访问地址(路由)
app.get("/list", function (req, res) {
  res.send({ status: 200, results: [{ name: "iwen", age: "20" }, { name: "ime", age: "30" }] });
})

// res.end("str")// 转换操作


app.listen(port, ()=>{
  console.log(`服务器运行在${port}端口上`);
})