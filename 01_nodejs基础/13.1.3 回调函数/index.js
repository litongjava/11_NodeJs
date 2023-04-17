function sayHi() {
  console.log("hi");
}

var sayBye = function () {
  console.log("bye");
}

sayHi();
sayBye();
function callFunction(callback) {
  callback()
}
callFunction(sayBye);

var sayBye2 = function(name){
  console.log(name+":bye");
}

function callFunction2(callback,name){
  callback(name)
}

callFunction2(sayBye2,'iwen');


callFunction2(function (name) {
  console.log(name + ":bye");
}, "frank")