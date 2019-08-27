// let corp = {};
// corp.list = [];

// corp.on = function (key, fn) {
//   // 如果对象中没有对应的key值 也就是说没有订阅过 就给key创建一个缓存列表
//   if (!this.list[key]) {
//     this.list[key] = [];
//   }
//   this.list[key].push(fn);
// }

// corp.emit = function () {
//   // 取出第一个参数对应的key值 
//   let key = [].shift.call(arguments);
//   let fns = this.list[key];
//   // 如果缓存列表里没有函数就返回false
//   if (!fns || fns.length === 0) {
//     return false;
//   }
//   // 遍历key值对应的缓存列表
//   // 依次执行函数的方法
//   fns.forEach(fn => {
//     fn.apply(this, arguments);
//   })
// }

// // 发布
// corp.emit('join', '前端', 2000000);

// // 订阅
// corp.on('join', (position, salary) => {
//   console.log('position===' + position);
//   console.log('salary===' + salary);
// })


let event = {
  list: {},
  on(key, fn) {
    if (!this.list[key]) {
      this.list[key] = [];
    }
    this.list[key].push(fn);
  },
  emit() {
    // console.log('-------', arguments); // { '0': 'pet', '1': [ '二哈', '波斯猫' ] }
    let key = [].shift.call(arguments);
    // console.log('========', arguments); // { '0': [ '二哈', '波斯猫' ] } 因为执行了shift后 第一个元素被取出来了
    let fns = this.list[key];
    if (!fns || fns.length === 0) {
      return false;
    }
    fns.forEach(fn => {
      fn.apply(this, arguments);
    })

  },
  // 取消订阅的方法
  remove(key, fn) {
    let fns = this.list[key];
    // 如果缓存列表中没有函数，返回false
    if (!fns) return false;
    // 如果没有传对应函数的话
    // 就会将key值对应缓存列表中的函数都清空掉
    if (!fn) {
      fns && (fns.length = 0)
    } else {
      // 遍历缓存列表 看看传入的fn与哪个函数相同
      // 如果相同就直接从缓存列表中删掉即可
      fns.forEach((cb, i) => {
        if (cb === fn) {
          fns.splice(i, 1);
        }
      });
    }
  }
};

// 测试
function cat() {
  console.log('一起喵喵喵');
}
function dog() {
  console.log('一起旺旺旺');
}

event.on('pet1', data => {
  console.log('接收数据');
  console.log(data);
});
event.on('pet2', cat);
event.on('pet3', dog);

// 取消dog方法的订阅
event.remove('pet3', dog);

// 发布
event.emit('pet2', ['二哈', '波斯猫']);




