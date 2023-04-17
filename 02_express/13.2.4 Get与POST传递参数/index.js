const express = require("express");
const url = require("url");
const bodyParser = require("body-parser")

const app = express();

// 接受post参数
app.use(bodyParser.urlencoded({
  extended: true
}))


// 接受参数 user=?
app.get("/list", (req, res) => {
  const user = url.parse(req.url, true).query.user;
  if (user === 'ping') {
    res.send({
      msg: user
    })
  } else {
    res.send({
      msg: "测试"
    })
  }
})

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  if (username === 'ping' && password === '123456') {
    res.send({
      msg: "登陆成功"
    })
  } else {
    res.send({
      msg: '用户名密码错误'
    })
  }

})


app.listen(3000, function () {
  console.log(3000);
})