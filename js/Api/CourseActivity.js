//课程活动
var CourseActivity = function(){
	
	/**
	 * 方法作用：获取课程列表
	 *	参数名称：page；说明：当前页码(默认：1)
	 *	参数名称：pagesize；说明：分页数量(默认：10)
	 */
	this.get_lessons_list = function(page,pagesize,succesFun,errFun){
		var ws = new WebService();
		ws.setURL(WebServiceURL); 
		ws.setOpName("get_lessons_list");
		ws.setParas({
			page:page,
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
	
/**方 法 名：get_lessons_contents
*	方法作用：获取课程内容
*   参数名称：id；说明：课程记录id(默认：id降序，第一条数据)
**/	
	this.get_lessons_contents = function(id,succesFun,errFun){
		var ws = new WebService();
		ws.setURL(WebServiceURL); 
		ws.setOpName("get_lessons_contents");
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
	
	/*保存用户收藏课程
	* data说明：
	*result是为保存结果（success表示保存成功，failed表示保存失败） 
	* favId是为保存后的收藏记录id
	 * 参数名称：mid；说明：用户id(不允许为空！！！必须是数字！！！)
	* 参数名称：id；说明：课程id(不允许为空！！！必须是数字！！！)
	*/
	this.set_lessons_fav = function(mid,id,succesFun,errFun){
		var ws = new WebService();
		ws.setURL(WebServiceURL); 
		ws.setOpName("set_lessons_fav");
		ws.setParas({
			mid:mid,
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
	
	
//	给课程点赞操作
//	goodpost是为操作后的赞数，操作失败的情况下是-1
//	传入参数：	参数名称：id；说明：课程id(不允许为空！！！必须是数字！！！)
//	
	
	
	
	this.set_lessons_isgood = function(id,succesFun,errFun){
		var ws = new WebService();
		ws.setURL(WebServiceURL); 
		ws.setOpName("set_lessons_isgood");
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
	
//	 	  方 法 名：alipay
//		方法作用：支付宝支付接口
//		参数名称：id；说明：课程id(不允许为空！！！必须是数字！！！)
//		参数名称：mid；说明：购买用户的id(不允许为空！！！必须是数字！！！)
//		参数名称：price；说明：价格(不允许为空！！！必须是数字！！！可以是浮点型数字！！！)
//		参数名称：cartcount；说明：购买数量(不允许为空！！！必须是数字！！！默认1)
	
	
	
	this.alipay = function(id,mid,price,cartcount,succesFun,errFun){
		var ws = new WebService();
		ws.setURL(WebServiceURL); 
		ws.setOpName("alipay");
		ws.setParas({
			id:id,
			mid:mid,
			price:price,
			cartcount:cartcount
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
