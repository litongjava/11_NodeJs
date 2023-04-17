const express = require("express");
const url = require("url");
const connectMySQL = require("./config")

const router = express.Router();

//返回index.html

router.get("/register", (req, res) => {
  // 接受参数
  const username = url.parse(req.url, true).query.username;
  const password = url.parse(req.url, true).query.password;
  console.log(username,password);
  // 向数据库中插入一条数据
  const sql = "insert into user(username,password) values (?,?)";
  connectMySQL(sql, [username, password], function (result) {
    console.log(result);
    if (result.affectedRows > 0) {
      res.send({
        msg: '注册成功'
      })
    }
  })
})

router.post("/login", (req, res) => {
  // post接受参数
  const username = req.body.username;
  const password = req.body.password;
  console.log(username,password);
  const sql = "select * from user where username=? and password=?";
  connectMySQL(sql, [username, password], function (result) {
    console.log(result);
    if (result.length > 0) {
      res.send({
        status: 200,
        result
      })
    } else {
      res.send({
        msg: "用户名密码错误"
      })
    }
  })
})


module.exports = router;