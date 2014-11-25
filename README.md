## websocket APIs


### connect 连接websocket
ws.connect(url, callback ,error)

```js
ws.connect('ws://127.0.0.1:8080',function(str){
//连接成功！
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

### 关闭连接的监听器
//ws.close(callback) ===  ws.disconnect(callback)

```js
ws.close(function(data){

})
```

