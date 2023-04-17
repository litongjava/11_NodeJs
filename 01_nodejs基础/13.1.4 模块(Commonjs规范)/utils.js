var adder=function(a,b){
  return `the sum of the 2 numbers is ${a+b}`
}
// module.exports=adder
var counter = function (arr) {
  return "there are " + arr.length + " elements in the array";
}


// 默认认为是导出了一个对象{ counter,adder }
// module.exports.counter = counter
// module.exports.adder = adder
// module.exports={
//   adder:adder,
//   counter:counter
// }
module.exports = {
  counter,
  adder: function (a, b) {
    return `this num of the 2 numbers is ${a + b}`;
  }
}