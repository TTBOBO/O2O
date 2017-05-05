var AskDAL =function(){
	var that = this;
	
	/*
	 * 获取问答列表
	 * 传入参数：
		参数名称：tid；说明：栏目id(默认：0，所有栏目)
		参数名称：page；说明：当前页码(默认：1)
		参数名称：pagesize；说明：分页数量(默认：10)
	 */
	
	this.get_ask_list = function(tid,page,pagesize,succesFun,errFun){
		var ws = new WebService();
		ws.setURL(WebServiceURL); 
		ws.setOpName("get_ask_list");
		ws.setParas({
			tid: tid,
			page: page,
			pagesize:pagesize
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
	
	
	/*
	 * 获取问答栏目
	 * 传入参数：
		参数名称：id；说明：栏目id(默认：0，所有栏目)
	 */
	this.get_ask_category = function(id,succesFun,errFun){
		var ws = new WebService();
		ws.setURL(WebServiceURL); 
		ws.setOpName("get_ask_category");
		ws.setParas({
			id: id
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
	
	/*
	 * 获取问答详细数据
	 * 传入参数：
		参数名称：id；说明：问题id(不允许为空！！！必须是数字！！！)
	 */
	this.get_ask_details = function(id,succesFun,errFun){
		var ws = new WebService();
		ws.setURL(WebServiceURL); 
		ws.setOpName("get_ask_details");
		ws.setParas({
			id: id
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
	
	/*
	 * 设置问答状态
	 * 传入参数：
		参数名称：id；说明：问答id(不允许为空！！！必须是数字！！！)
		参数名称：status；说明：问答状态(不允许为空！！！必须是数字！！！
		状态值说明：-1未审核，1已解决，0待解决，2已关闭，3已过期)
	 */
	this.set_ask_status = function(id,status,succesFun,errFun){
		var ws = new WebService();
		ws.setURL(WebServiceURL); 
		ws.setOpName("set_ask_status");
		ws.setParas({
			id: id,
			status: status
		}); 
		ws.setCallBack(callback);
		ws.setErrorCallBack(errorCallback);
		ws.LoadData();

		function callback(data) {
			if(data.code== '2000'||data.code=='4001'){
				succesFun(data.data);
				return;
			}
			errFun();
		}
		
		function errorCallback(e) {
			console.log(JSON.stringify(e));
		}
	};
	
	/*
	 * 保存用户发布问答
	 * 传入参数：
		参数名称：tid；说明：问答栏目id(不允许为空！！！必须是数字！！！)
		参数名称：tidname；说明：问答栏目名称(不允许为空！！！必须urlencode处理！！！)
		参数名称：tid2；说明：问答二级栏目id(默认：0)
		参数名称：tid2name；说明：问答二级栏目名称(默认：空)
		参数名称：mid；说明：用户id(不允许为空！！！必须是数字！！！)
		参数名称：anonymous；说明：是否匿名(默认：0，1是匿名，0是不匿名)
		参数名称：title；说明：问答标题(不允许为空！！！必须urlencode处理！！！)
		参数名称：reward；说明：悬赏分(默认：0)
		参数名称：expiredtime；说明：到期时间(默认：当前时间+1天，格式：yyyy-mm-dd)
		参数名称：content；说明：问答内容(不允许为空！！！必须urlencode处理！！！)
	 */
	this.set_ask_save = function(tid,tidname,mid,title,content,succesFun,errFun){
		var ws = new WebService();
		ws.setURL(WebServiceURL); 
		ws.setOpName("set_ask_save");
		ws.setParas({
			tid: tid,
			tidname: tidname,
			mid: mid,
			title: title,
			content:content
		}); 
		ws.setCallBack(callback);
		ws.setErrorCallBack(errorCallback);
		ws.LoadData();

		function callback(data) {
			if(data.code== '2000'||data.code=='4001'){
				succesFun(data.data);
				return;
			}
			errFun();
		}
		
		function errorCallback(e) {
			console.log(JSON.stringify(e));
		}
	};
	
	/*
	 * 保存用户回答
	 * 传入参数：
			参数名称：askid；说明：问题id(不允许为空！！！必须是数字！！！)
		参数名称：mid；说明：用户id(不允许为空！！！必须是数字！！！)
		参数名称：content；说明：问答内容(不允许为空！！！必须urlencode处理！！！)
	 */
	this.set_answer_save = function(askid,mid,content,succesFun,errFun){
		var ws = new WebService();
		ws.setURL(WebServiceURL); 
		ws.setOpName("set_answer_save");
		ws.setParas({
			askid: askid,
			mid: mid,
			content:content
		}); 
		ws.setCallBack(callback);
		ws.setErrorCallBack(errorCallback);
		ws.LoadData();

		function callback(data) {
			if(data.code== '2000'||data.code=='4001'){
				succesFun(data.data);
				return;
			}
			errFun();
		}
		
		function errorCallback(e) {
			console.log(JSON.stringify(e));
		}
	};
	
	/*
	 * 方法作用：获取问答列表（通过状态）
	 * 传入参数：
		参数名称：status；说明：状态(默认：0：待解决；1：已解决；2：已关闭)
		参数名称：mid；说明：用户id(默认：0，表示所有用户)
		参数名称：page；说明：当前页码(默认：1)
		参数名称：pagesize；说明：分页数量(默认：10)
	 */
	this.get_ask_list_by_status = function(status,mid,page,pagesize,succesFun,errFun){
		var ws = new WebService();
		ws.setURL(WebServiceURL); 
		ws.setOpName("get_ask_list_by_status");
		ws.setParas({
			status: status,
			mid: mid,
			page:page,
			pagesize:pagesize
		}); 
		ws.setCallBack(callback);
		ws.setErrorCallBack(errorCallback);
		ws.LoadData();

		function callback(data) {
			if(data.code== '2000'||data.code=='4001'){
				succesFun(data.data);
				return;
			}
			errFun();
		}
		
		function errorCallback(e) {
			console.log(JSON.stringify(e));
		}
	};
	
	/*
	 * 方法作用：获取用户回答过的问题列表
	 * 传入参数：
		参数名称：mid；说明：用户id(默认：0，表示所有用户)
		参数名称：page；说明：当前页码(默认：1)
		参数名称：pagesize；说明：分页数量(默认：10)
	 */
	this.get_answered_ask_list_by_mid = function(mid,page,pagesize,succesFun,errFun){
		var ws = new WebService();
		ws.setURL(WebServiceURL); 
		ws.setOpName("get_answered_ask_list_by_mid");
		ws.setParas({
			mid: mid,
			page:page,
			pagesize:pagesize
		}); 
		ws.setCallBack(callback);
		ws.setErrorCallBack(errorCallback);
		ws.LoadData();

		function callback(data) {
			if(data.code== '2000'||data.code=='4001'){
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
