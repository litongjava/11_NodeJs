// var events = require("events");

// // 创建事件对象
// var myEmitter = new events.EventEmitter();

// // 设置事件监听器
// myEmitter.on("someEvent", function (message) {
//   console.log(message);
// })

// // 触发事件
// myEmitter.emit("someEvent", "the event was emitted");


// var events = require("events");
// var util = require("util")

// var Person = function (name) {
//   this.name = name;
// }

// //让Person类继承events.EventEmitter对象
// util.inherits(Person, events.EventEmitter);

// var xiaoming = new Person("xiaoming");
// var lilei = new Person("lilei");

// var person = [xiaoming, lilei];

// person.forEach(function (item) {
//   item.on("speak", function (message) {
//     console.log(item.name + " say:" + message);
//   })
// })

// xiaoming.emit("speak", "hi")
// lilei.emit("speak", "my name is lilei")

const EventEmitter = require('events');

class Person extends EventEmitter {
  constructor(name) {
    super();
    this.name = name;
  }
}

var xiaoming = new Person("xiaoming");
var lilei = new Person("lilei");

var person = [xiaoming, lilei];

person.forEach(function (item) {
  item.on("speak", function (message) {
    console.log(item.name + " say:" + message);
  })
})

xiaoming.emit("speak", "hi")
lilei.emit("speak", "my name is lilei")