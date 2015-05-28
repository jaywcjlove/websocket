var ws = require("nodejs-websocket");
var server = ws.createServer(function(conn){
    conn.on("text", function (str) {
        console.log("收到的信息为:"+str)
        conn.sendText(str)
    })
    conn.on("close", function (code, reason) {
        console.log("关闭连接")
    });
    conn.on("error", function (code, reason) {
        console.log("异常关闭")
    });
}).listen(3002)

console.log("--WebSocket-------------")
console.log("WebSocket address: ws://127.0.0.1:3002")
console.log("WebSocket has started.")
console.log("------------------------")