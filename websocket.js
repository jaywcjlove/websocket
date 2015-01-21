;(function(window){
	var WS = {
		ws:null,
		wsAPI:{
			connect: function(url, callback ,error){
				if (WS.ws !== null) return WS.isFunction(callback)==true ? error("您已连接！") :alert("您已连接！");
				WS.ws = new WebSocket(url);
				WS.ws.onopen = function () {
					if(WS.isFunction(callback)==true) callback('连接成功!');
				};
			},
			message: function(callback){//连接监听器
				WS.ws.onmessage = function(str) {
					if(WS.isFunction(callback)==true) callback(str);
				};
			},
			send:function(str){
				WS.ws.send(str)
			},
			disconnect:function(callback){ //关闭连接的监听器
				if (WS.ws !== null) return WS.isFunction(callback)==true ? callback("您已连接！") :alert("您已连接！");
				this.close();
			},
			close:function(callback){
				WS.ws.onclose = function(str) {
					if(WS.isFunction(callback)==true) callback(str);
				};
				WS.ws = null;
			},
			error:function(callback){
				WS.ws.onerror = function (error) {
					if(WS.isFunction(callback)==true) callback(error);
				};
			}
		},
		isFunction:function(funcName){
		    try {
		    	if (typeof(eval(funcName)) == "function") {return true;}
		    } catch(e) {}
		    return false;
		}
	},
	ws=function (key, data){

	};
	//IE不提供这个__proto__原型对象，可以这里判断
	// ws.__proto__ = WS.wsAPI;
	for (var a in WS.wsAPI) ws[a]=WS.wsAPI[a];
	//如果有 JSLite ，则同样扩展到 JSLite ?类似jQuery
	// http://jaywcjlove.github.io/JSLite/
	if(window.JSLite) window.JSLite.ws = ws;
	if(!window.ws) window.ws = ws
})(window);