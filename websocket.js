;(function(window){
	var WS = {
		ws:null,
		wsAPI:{
			connect: function(url, callback, close, error){
				if (!url || WS.ws !== null) {
					if(error) error("连接失败！");
					return this;
				}
				WS.ws = new WebSocket(url);
				WS.ws.onopen = function (evn) {
					console.log("onopen:",evn)
					if(WS.isFunction(callback)==true) callback('连接成功!');
				}
				WS.ws.onclose = function(evn) {
					if(WS.isFunction(close)==true) close(evn);
				};
				WS.ws.onerror = function (evn) {
					if(WS.isFunction(error)==true) error(evn);
				};
				return this;
			},
			message: function(callback){//连接监听器
				WS.ws.onmessage = function(e) {
					if(WS.isFunction(callback)==true) callback(e.data);
				}
				return this;
			},
			send:function(str){
				if(WS.ws.readyState==1) WS.ws.send(str);
				if(WS.ws.readyState==2) WS.close();
				if(WS.ws.readyState==3) WS.close();
			},
			disconnect:function(callback){//关闭连接的监听器
				if (WS.ws !== null) return WS.isFunction(callback)==true ? callback("您已经断开了！") :WS.close();
			}
		},
		close:function(callback){
			WS.ws.close()
			WS.ws = null;
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