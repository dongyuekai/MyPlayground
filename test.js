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
console.log(f);






