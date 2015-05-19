# websocket

[![GitHub issues](https://img.shields.io/github/issues/jaywcjlove/websocket.svg)](https://github.com/jaywcjlove/websocket/issues) [![GitHub forks](https://img.shields.io/github/forks/jaywcjlove/websocket.svg)](https://github.com/jaywcjlove/websocket/network) [![GitHub stars](https://img.shields.io/github/stars/jaywcjlove/websocket.svg)](https://github.com/jaywcjlove/websocket/stargazers)

## 下载

```
bower info websocket
```

### connect 连接websocket
ws.connect(url, callback, close, error)

```js
ws.connect('ws://127.0.0.1:8080',function(handlers,evn){
//连接成功！
},function(handlers,evn){
//关闭触发！
    if(handlers.closeType === "kick"){
        console.log('这个是踢下线！的关闭！')
    }
},function(handlers,evn){
//连接失败！
})
```

### message 一个连接监听器
//ws.message(callback)

```js
ws.message(function(evn,handlers){
    console.log(evn.data,handlers)
})
```

### send 通过Socket发送一条消息到服务器
//ws.send()

```js
ws.send('{}') //=>handlers
```

### 关闭连接的监听器
//ws.disconnect(type,callback) 关闭类型

```js
ws.disconnect("kick",function(data){

})
```

### 判断是websocket否连接
//ws.isConnect()  //=> bool

```js
ws.isConnect()  //=> true | false
```
