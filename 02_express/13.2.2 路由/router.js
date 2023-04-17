const express = require("express");
const router = express.Router();

router.get("/list", (req, res) => {
  res.send({
    status: 200,
    info: '测试'
  })
})

router.post("/login", (req, res) => {
  res.send({
    msg: "登陆成功"
  })
})

module.exports = router;