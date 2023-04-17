const express = require("express");
const app = express();

app.use(express.static('public'));

app.get("/banner", function (req, res) {
  res.send({
    code: 200,
    results: [
      {
        id: 1001,
        name: "美女",
        image: "http://localhost:3000/images/1.jpeg"
      },
      {
        id: 1002,
        name: "萌宠",
        image: "http://localhost:3000/images/2.jpeg"
      }
    ]
  })
})

app.listen(3000, function () {
  console.log(3000);
})