const express = require('express');
const app = express();

// 设置静态文件夹
app.use(express.static(__dirname));
// 监听3000端口
app.listen(3000);

// 开始创建一个websocket对象
const Server = require('ws').Server;
// 设置服务器的端口号 
const ws = new Server({ port: 9999 });

ws.on('connection', socket => {
  // 监听客户端发来的消息
  socket.on('message', msg => {
    //  打印客户端发来的msg
    console.log('来自客户端的消息~~~~~',msg);
    //  服务端向客户端发送消息
    socket.send(`这是服务端给客户端发送的消息:${msg}`);
  })
})