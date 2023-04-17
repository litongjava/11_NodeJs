var fs = require("fs");
// var readMe = fs.readFileSync("./readMe.txt", "utf8");
// console.log(readMe);

//fs.writeFileSync("wirteMe.txt",readMe)

// var readMe = fs.readFile("./readMe.txt",'utf8',function(err,data){
//   console.log(data);
// });

// var waitTill = new Date(new Date().getTime() + 4 * 1000);
// while (waitTill > new Date()) {}

var readMe = fs.readFile("./readMe.txt", "utf8", function (err, data) {
  fs.writeFileSync("wirteMe.txt", data, function () {
    console.log("读取数据完成");
  })
})

console.log("finshed");