//websocket 通讯
;(function(window){
    var handlers = {},WS
    function isFunction(funcName){
        try {
            if (typeof(eval(funcName)) == "function") {return true;}
        } catch(e) {}
        return false;
    }
    function parseArguments (url, callback, close, error) {
        return {
            url:url,
            callback:callback,
            close:close,
            error:error
        }
    }
    WS = {
        wsAPI:{
            connect: function(url, callback, callbackclose, callbackerror){
                handlers = parseArguments.apply(null,arguments)
                if (!url) {
                    handlers.ws = null
                    handlers.message="连接失败！";
                    handlers.isConnects=false
                    if(error) error(handlers);
                    return this;
                }
                handlers.ws = new WebSocket(url);
                handlers.ws.onopen = function (evn) {
                    handlers.message="连接成功！";
                    if(isFunction(callback)===true) {
                        callback(handlers,evn);
                        handlers.isConnects=true; 
                    }
                };
                handlers.ws.onclose = function(evn) {
                    handlers.isConnects=false
                    handlers.message="连接关闭！";
                    if(isFunction(callbackclose)===true) callbackclose(handlers,evn);
                };
                handlers.ws.onerror = function (evn) {
                    handlers.isConnects=false
                    handlers.message="连接发生错误";
                    if(isFunction(callbackerror)===true) callbackerror(handlers,evn);
                };
                return this;
            },
            isConnect:function() {
                return handlers.isConnects;
            },
            message: function(callback){//连接监听器
                handlers.ws.onmessage = function(e) {
                    if(isFunction(callback)===true) callback(e.data);
                };
                return this;
            },
            send:function(str){
                if(!handlers.ws){
                    handlers.isConnects=false
                    handlers.message="连接发生错误";
                    handlers.error(handlers);
                }else{
                    switch(handlers.ws.readyState){
                        case 1:handlers.ws.send(str);break;
                        case 2:WS.close();break;
                        case 3:WS.close();break;
                    }
                }
                return handlers.ws;
            },
            disconnect:function(callback){//关闭连接的监听器
                handlers.message="断开连接了!";
                handlers.isConnects=false
                if (handlers.ws !== null) return isFunction(callback)===true ? callback("您已经断开了！") :WS.close();
            }
        },
        close:function(callback){
            handlers.ws.close(),
            handlers.ws = null;
        }
    },
    ws=function (key, data){};
    //IE不提供这个__proto__原型对象，可以这里判断
    // ws.__proto__ = WS.wsAPI;
    for (var a in WS.wsAPI) ws[a]=WS.wsAPI[a];
    //如果有 JSLite ，则同样扩展到 JSLite ?类似jQuery
    // http://jaywcjlove.github.io/JSLite/
    if(window.JSLite) window.JSLite.ws = ws;
    if(!window.ws) window.ws = ws
})(this);