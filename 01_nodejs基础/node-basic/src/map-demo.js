const oldArr = [
  {displayName: 'display1', realName: 'real1'},
  {displayName: 'display2', realName: 'real2'},
  {displayName: 'display3', realName: 'real3'},
];

/*
这行代码使用了ES6的对象解构和箭头函数的语法。map()方法用于遍历数组并返回新数组，参数是一个回调函数，该回调函数接收一个参数作为当前数组元素，并对其进行操作后返回一个新的数组元素。

回调函数的参数是一个对象，使用对象解构将其属性取出并重命名为label和value，分别对应旧数组中的displayName和realName属性。接着，使用简写属性语法将它们作为label和value属性添加到一个新的对象中，最后将该对象添加到新数组中。

因此，这行代码的作用是将旧数组中的displayName和realName属性取出，分别添加到新数组中的label和value属性中。具体来说，它将旧数组的每个元素映射到一个新对象，新对象中的label属性值为旧数组元素的displayName属性值，value属性值为旧数组元素的realName属性值，最终生成一个新的数组对象。
 */
let callbackfn = ({displayName: label, realName: value}) => ({label, value});
let newArr = oldArr.map(callbackfn);

console.log(newArr);
// [{ label: 'display1', value: 'real1' }, { label: 'display2', value: 'real2' }, { label: 'display3', value: 'real3' }]

let callbackfn1 = it=>it.displayName;
console.log("typeof function:",typeof callbackfn1)
newArr=oldArr.map(callbackfn1)
console.log("new Arr",newArr);

console.log(typeof newArr)
console.log("isArray",Array.isArray(newArr))