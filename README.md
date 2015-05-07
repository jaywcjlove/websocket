# websocket

[![GitHub issues](https://img.shields.io/github/issues/jaywcjlove/websocket.svg)](https://github.com/jaywcjlove/websocket/issues) [![GitHub forks](https://img.shields.io/github/forks/jaywcjlove/websocket.svg)](https://github.com/jaywcjlove/websocket/network) [![GitHub stars](https://img.shields.io/github/stars/jaywcjlove/websocket.svg)](https://github.com/jaywcjlove/websocket/stargazers)

## 下载

```
bower info websocket
```

### connect 连接websocket
ws.connect(url, callback, close, error)

```js
ws.connect('ws://127.0.0.1:8080',function(str){
//连接成功！
},function(str){
//关闭触发！
},function(str){
//连接失败！
})
```

### message 一个连接监听器
//ws.message(callback)

```js
ws.message(function(data){

})
```

### send 通过Socket发送一条消息到服务器
//ws.send()

```js
ws.send('{}')
```

### 关闭连接的监听器
//ws.disconnect(callback)

```js
ws.disconnect(function(data){

})
```

### 判断是websocket否连接
//ws.isConnect()  //=> bool

```js
ws.isConnect()  //=> true | false
```
