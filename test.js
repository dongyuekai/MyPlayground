// let rowData = [
//   { name: 'dyk', content: '' },
//   { name: 'lisi', content: '123' },
//   { name: 'shiguangjie', content: '222' }
// ]
// rowData = rowData.filter(item => item.content.length > 0)

// console.log(rowData)

// const arr = [10, 12, 15, 21];
// for (var i = 0; i < arr.length; i++) {
//   setTimeout(function () {
//     console.log('The index of this number is: ' + i);
//   }, 3000);
// }



// let arr = [1, 2, 3, 4, 5];
// let val = arr.pop();

// console.log(val);
// console.log(arr);

// const arr = [10, 12, 15, 21];
// for (var i = 0; i < arr.length; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 3000);
// }

// var arr = [1,2,4];
// // 下面的代码等价于 var max = Function.prototype.apply.call(Math.max,null,arr);
// var max = Math.max.apply(null, arr);   // Function.prototype.apply.call(Math.max,null,arr) 意思是说把apply这个方法指向Math.max  call函数第一个参数是指针 然后是逗号隔开的参数
// console.log(max);

// function isArray(obj){
//   return Object.prototype.toString.call(obj) === '[object Array]';
// }
// console.log(isArray([1,2,4]));

// function log(msg){
//   console.log(msg)
// }
// log(1);
// log(1,2,3);

// bind 作用
// this.num = 9;
// var mymodule = {
//   num: 81,
//   getNum: function () {
//     console.log(this.num);
//   }
// };

// mymodule.getNum(); // 81

// var getNum = mymodule.getNum;
// getNum(); // 9, 因为在这个例子中，"this"指向全局对象 ??返回undefined

// var boundGetNum = getNum.bind(mymodule);
// boundGetNum(); // 81



// function list() {
//   return Array.prototype.slice.call(arguments);
// }
// var list1 = list(1, 2, 3); // 得到数组[1,2,3]

// // 预定义参数37
// var loadingThirysevenList = list.bind(undefined, 37);

// var list2 = loadingThirysevenList(); // [37]

// console.log(list2);

// var list3 = loadingThirysevenList(1, 2, 3); // [37,1,2,3]

// console.log(list3);

// let arr = [1, 2, 3, 4, 5];
// arr.map((item, index) => {
//   console.log(item, index, arr.length)
// })

// Set
let s = new Set()
s.add('hello').add('good').add('world')
// console.log(s.size)
// console.log(s.has('good'))
// console.log(s);

// Maps
let m = new Map()
m.set('hello', 43)
m.set(s, 4)
// console.log(m.get(s))

// Weak Maps
let wm = new WeakMap()
wm.set(s, { extra: 42 })
// console.log(wm.size)

// Weak Sets
let ws = new WeakSet()
ws.add({ data: 42 })
// console.log(ws);

// Map解决的是Object的键值对中键只能是字符串的问题 Map的键不限于字符串 各种类型（包括对象）都可以做键
// WeakMap结构与Map结构基本类似 唯一的区别是WeakMap只接受对象作为键名（null除外）而且键名所指向的对象不计入垃圾回收机制
// 第一个：WeakSet的成员只能是对象，而不能是其他的值。
// 第二个：WeakSet中的对象都是弱引用，即垃圾回收机制不考虑WeakSet对该对象的引用，也就是说，如果其他对象都不再引用该对象。那么垃圾回收机制会自动会输该对象所占用的额内存，不考虑该对象还存在与WeakSet之中。

let map = new Map([['F', 'no'], ['T', 'yes']])
// for (let key of map.keys()) {
//   console.log(key);   // F T
// }
// console.log(map.keys());
// console.log(map.values());
// console.log(map.entries());

let ds = { a: 5, c: 8 };
let { c: f } = ds;
// console.log(f);


let num = 10;
// console.log('dyk----', num.toString());
// console.log('dyk----', num.toString(2));
// console.log('dyk----', num.toString(8));
// console.log('dyk----', num.toString(10));
// console.log('dyk----', num.toString(16));

// function add(n1, n2) {
//   // arguments[1] = 10;
//   // console.log(n1);
//   // console.log(n2);
//   console.log(arguments.callee);
// }
// add(1,2);

// console.log(Math.floor(2.95));



// let person = {
//   name: 'dongyuekai',
//   year: 11
// };
// Object.defineProperty(person, '_name', {
//   get: function () {
//     return this.name;
//   },
//   set: function (newValue) {
//     this.name = newValue;
//     this.year = 12;
//   }
// })
// person._name = '123';
// console.log(person);

// ajax
// let xhr = new XMLHttpRequest();
// xhr.open('get', 'exam.php', false);
// xhr.send(null);

// // 检验响应的状态--->针对同步
// if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
//   let data = xhr.responseText;
// } else {
//   console.log(xhr.status);
// }
// // 异步方案
// xhr.onreadystatechange = function () {
//   // xhr.readyStatus表示请求/响应过程的当前活动阶段
//   // 0 未初始化，还没调用open()
//   // 1 启动，已调用open()方法但未调用send()
//   // 2 发送， 已调用send()方法，但未收到响应
//   // 3 接收，已接收到部分响应数据
//   // 4 完成，已接受到全部响应数据
//   if (xhr.readyStatus == 4) {
//     if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
//       var data = xhr.responseText;
//     } else {
//       console.log(xhr.status);
//     }
//   }
// }
// xhr.open('get', 'exam.php', false);
// xhr.send(null);

// xhr.abort();

// function isArray(value) {
//   return Object.prototype.toString().call(value) == '[object Array]';
// }
// function isFunction(value) {
//   return Object.prototype.toString().call(value) == '[object Function]';
// }

// 函数柯里化
// 函数柯里化
// function curry(fn) {
//   var args = Array.prototype.slice.call(arguments, 1);
//   return function () {
//     var innerArgs = Array.prototype.slice.call(arguments);
//     var finalArgs = args.concat(innerArgs);
//     return fn.apply(null, finalArgs)
//   }
// }
// 使用
// function add(n1, n2) {
//   return n1 + n2
// }
// var curriedAdd = curry(add, 5);
// console.log(curriedAdd, 5);


function maxSort(arr) {
  let result = [...arr];
  for (let i = 0, len = result.length; i < len; i++) {
    // 每次取最小值
    let minV = Math.min(...result.slice(i))
    // 从i开始索引 result中minV的位置
    let pos = result.indexOf(minV,i);
    // 找到minV的位置 删除
    result.splice(pos,1);
    // 把minV放到头部
    result.unshift(minV);
  }
  result.reverse();
  console.log(result);
  return result;
}
maxSort([11, 22, 33, 4, 5, 6, 7, 8, 9])
