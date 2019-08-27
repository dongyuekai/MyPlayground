// let watch = (object, onChange) => {
//   const handler = {
//     get(target, property, receiver) {
//       try {
//         return new Proxy(target[property], handler);
//       } catch (err) {
//         return Reflect.get(target, property, receiver);
//       }
//     },
//     defineProperty(target, property, descriptor) {
//       onChange('define', property);
//       return Reflect.defineProperty(target, property, descriptor);
//     },
//     deleteProperty(target, property) {
//       onchange('delete', property);
//       return Reflect.deleteProperty(target, property);
//     }
//   };
//   return new Proxy(object, handler);
// }
// // 测试对象
// let obj = {
//   name: 'dyk',
//   age: 22,
//   child: [1, 2, 3]
// }

// // 对象代理
// let p = watch(obj, (type, property) => {
//   console.log(`类型：${type},修改的属性：${property}`);
// });


// 验证值
// let validator = {
//   set: function (obj, prop, value) {
//     if (prop === 'age') {
//       if (!Number.isInteger(value)) {
//         throw new TypeError('The age is not an integer');
//       }
//       if (value > 200) {
//         throw new RangeError('The age seems invalid');
//       }
//     }
//     // 设置默认值
//     obj[prop] = value;
//   }
// }
// let person = new Proxy({}, validator);
// person.age = 100;
// console.log(person.age);

// // person.age = 'yong';

// person.age = 222;

// 基础示例
// let handler = {
//   get: function (target, name) {
//     return name in target ? target[name] : 37;
//   }
// };
// let p = new Proxy({}, handler);
// p.a = 1;
// p.b = undefined;
// console.log(p.a, p.b);

// console.log(p.c);

// 无操作转发代理
// let target = {};
// let p = new Proxy(target, {});
// p.a = 37;
// console.log(target.a);


// function foo() {

// }
// let f1 = new foo();

// console.log(foo.prototype);

// console.log(f1.__proto__);

// let obj = {
//   name: 'dreamapple',
//   age: 22
// };

// let r1 = Reflect.deleteProperty(obj, 'name');
// console.log(r1); // true
// let r2 = Reflect.deleteProperty(obj, 'name');
// console.log(r2); // true
// let r3 = Reflect.deleteProperty(Object.freeze(obj), 'age');
// console.log(r3); // false


// var arrayStr = new Array("1", "2", "3", "4", "5");

// var objStr = new Object();

// var str = '123444';

// console.log(arrayStr instanceof Array);

// console.log(Object.prototype.toString.call(str)); 
