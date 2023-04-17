// 链接数据库，提供数据库操作方法
const mysql = require("mysql");

const client = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "robot_123456#",
  database: "itbaizhan"
})

// query:执行数据库语句的方法
function connectMySQL(sql, arr, callback) {
  client.query(sql, arr, function (err, result) {
    if (err) {
      console.log(err);
      return;
    }
    callback(result);
  })
}

module.exports = connectMySQL