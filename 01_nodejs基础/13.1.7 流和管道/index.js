// var fs = require('fs');

// var myReadStream = fs.createReadStream(__dirname + '/readMe.txt');
// var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', "utf8");
// myReadStream.on('data', function(chunk) {
//   console.log(chunk);
// })

// myReadStream.setEncoding("utf8")

// var data = "";

// myReadStream.on('data', function (chunk) {
//   data += chunk;
// })

// myReadStream.on("end", function () {
//   console.log("读取文件完成");
//   console.log(data);
// })

// var fs = require("fs");

// var myReadStream = fs.createReadStream(__dirname + "/readMe.txt", "utf8");
// var myWriteStream = fs.createWriteStream(__dirname + "/writeMe.txt");

// var data = ""
// myReadStream.on('data', function (chunk) {
//   myWriteStream.write(chunk)
// })

// myReadStream.on("end", function () {
//   console.log("end");
// })s

// var fs = require("fs");
// var myWriteStream = fs.createWriteStream(__dirname + "/writeMe.txt");

// var myData = "Hello Node";
// myWriteStream.write(myData);
// myWriteStream.end();
// myWriteStream.on("finish", function () {
//   console.log("finish");
// })


// var fs = require("fs");

// var myReadStream = fs.createReadStream(__dirname + "/readMe.txt","utf8");
// var myWriteStream = fs.createWriteStream(__dirname + "/writeMe.txt");

// myReadStream.pipe(myWriteStream);

// 压缩
// var crypto = require('crypto');
// var fs = require('fs');
// var zlib = require('zlib');

// var password = new Buffer(process.env.PASS || 'password');
// var encryptStream = crypto.createCipher('aes-256-cbc', password);

// var gzip = zlib.createGzip();
// var readStream = fs.createReadStream(__dirname + "/readMe.txt"); // current file
// var writeStream = fs.createWriteStream(__dirname + '/readMe.gz');

// readStream // reads current file
//   .pipe(encryptStream) // encrypts
//   .pipe(gzip) // compresses
//   .pipe(writeStream) // writes to out file
//   .on('finish', function () { // all done
//     console.log('done');
//   });

// 解压
var crypto = require('crypto');
var fs = require('fs');
var zlib = require('zlib');

var password = new Buffer(process.env.PASS || 'password');
var decryptStream = crypto.createDecipher('aes-256-cbc', password);

var gzip = zlib.createGunzip();
var readStream = fs.createReadStream(__dirname + '/readMe.gz');

readStream // reads current file
  .pipe(gzip) // uncompresses
  .pipe(decryptStream) // decrypts
  .pipe(process.stdout) // writes to terminal
  .on('finish', function () { // finished
    console.log('done');
  });