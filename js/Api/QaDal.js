var QaDAL = function(){
	
	/**
	 * 获取问答栏目
	 * 传入参数：
	       参数名称：id；说明：栏目id(默认：0，所有栏目)
	 */
	this.get_ask_category = function(id,succesFun,errFun){
		var ws = new WebService();
		ws.setURL(WebServiceURL); 
		ws.setOpName("get_ask_category");
		ws.setParas({
			id:id
		}); 
		ws.setCallBack(callback);
		ws.setErrorCallBack(errorCallback);
		ws.LoadData();

		function callback(data) {
			if(data.code=='2000'||data.code=='4001'){
				succesFun(data.data);
				return;
			}
			errFun();
		}
		
		function errorCallback(e) {
			console.log(JSON.stringify(e));
		}
	};
	
}
