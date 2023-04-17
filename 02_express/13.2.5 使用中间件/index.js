const fs = require('fs')
const express = require("express");
const router = require("./router")
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}))

app.use("/api", router);
app.get("/", (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
  // response.write('Hello from out application');
  myReadStream.pipe(res);
});

app.listen(3000, () => {
  console.log(3000);
})