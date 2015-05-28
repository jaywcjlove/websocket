# websocket

[![GitHub issues](https://img.shields.io/github/issues/jaywcjlove/websocket.svg)](https://github.com/jaywcjlove/websocket/issues) [![GitHub forks](https://img.shields.io/github/forks/jaywcjlove/websocket.svg)](https://github.com/jaywcjlove/websocket/network) [![GitHub stars](https://img.shields.io/github/stars/jaywcjlove/websocket.svg)](https://github.com/jaywcjlove/websocket/stargazers)

## 下载

```
# bower 下载
bower install websocket

# npm 下载
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
将原生websocket调用 `socket = new WebSocket(url,protocol)` 更换成
`socket = new ws(url,protocol)`

```js
var socket,url='ws://127.0.0.1:3001';
//原生websocket使用换成下面 ws 方法
socket = new WebSocket(url);
//换成了ws 方法之后，下面的事件才有作用
socket = new ws(url);
```

### readyState
`readyState` 属性使用以下常数描述 `WebSocket` 的连线状态。

```js
socket.readyState //=>1
```

| 常数 | 值 |  描述 |
| -------- | -------- | -------- |
| CONNECTING  | 0  | 连接尚未打开。|
| OPEN        | 1  | 连接已打开，可以进行通讯。|
| CLOSING     | 2  | 连接正在进行关闭程序。|
| CLOSED      | 3  | 连接已关闭／连接不能打开。|

### onopen

连接成功会执行这个事件

### onmessage

接收websocket推送过来的消息

### onconnecting

这是个监听事件，当连接开始尝试进行，事件监听器被调用。

### onclose

websocket关闭会执行这个事件

### onclose

websocket关闭会执行这个事件


## 完整例子

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