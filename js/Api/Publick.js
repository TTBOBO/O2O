var Publick = function(){
	/**
	 * 中文 -> encode
	 */
	this.urlencodeHandler = function(str,succesFun,errFun){
		var ws = new WebService();
		ws.setURL(WebServiceURL); 
		ws.setOpName("urlencodeHandler");
		ws.setParas({
			str:str
		}); 
		ws.setCallBack(callback);
		ws.setErrorCallBack(errorCallback);
		ws.LoadData();

		function callback(data) {
			succesFun(data);
		}
		
		function errorCallback(e) {
			console.log(JSON.stringify(e));
		}
	};
	
	/**
	 * encode -> 中文
	 */
	this.urldecodeHandler = function(str,succesFun,errFun){
		var ws = new WebService();
		ws.setURL(WebServiceURL); 
		ws.setOpName("urldecodeHandler");
		ws.setParas({
			str:str
		}); 
		ws.setCallBack(callback);
		ws.setErrorCallBack(errorCallback);
		ws.LoadData();

		function callback(data) {
			succesFun(data);
		}
		
		function errorCallback(e) {
			console.log(JSON.stringify(e));
		}
	}
	
}
