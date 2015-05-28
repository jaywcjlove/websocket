# websocket

[![GitHub issues](https://img.shields.io/github/issues/jaywcjlove/websocket.svg)](https://github.com/jaywcjlove/websocket/issues) [![GitHub forks](https://img.shields.io/github/forks/jaywcjlove/websocket.svg)](https://github.com/jaywcjlove/websocket/network) [![GitHub stars](https://img.shields.io/github/stars/jaywcjlove/websocket.svg)](https://github.com/jaywcjlove/websocket/stargazers)

## 下载

```
bower install websocket
```

```
npm install websocketjs
```


## 测试

进入 `test` 目录 在命令行中运行 `node sever.js` 会输出下面内容  

```
--WebSocket-------------
WebSocket address: ws://127.0.0.1:3001
WebSocket has started.
--Server----------------
Server address: http://127.0.0.1:8080
Server running... press ctrl-c to stop.
Server has started.
------------------------
```


## 接口调用

```js
var socket = new ws('ws://127.0.0.1:3001'),
    str = "JSLite.io";

socket.onconnecting = function(evn){
    console.log("socket:onconnecting:",evn);
    // sendMsg("wcj");
    
}
socket.onopen = function(evn){
    console.log("socket:onopen:",evn);
    log('发了个消息！"'+str+'"');
    sendMsg(str);
    
}
socket.onclose = function(evn){
    console.log("socket.onclose:",evn);
    log('WebSocket 被你关闭了！，您老人家再也没有办法建立连接了?');
    
}
socket.onmessage = function(evn){
    console.log("socket:onmessage:",evn);
    log('收到消息！"'+evn.data+'"');
    // socket.close()
    
}

function sendMsg (str) {
    console.log("socket:sendMsg:",socket);
    socket.send(str);
}

```