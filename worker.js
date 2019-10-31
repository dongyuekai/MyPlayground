if (window.Worker) {
  var worker = new Worker('./code.js');
  // 发送数据
  worker.postMessage('hello');
} else {
  console.log('浏览器不支持worker子线程...');
}
// 接收消息
worker.onmessage = event => {
  console.log(event.data);
}


