var Shop = function(){
	var that = this;
	/**
	 * 获取商品列表
	 * 【传入参数】：
		参数名称：【typeid】，说明：栏目id(默认：0，所有栏目)
		参数名称：【page】，说明：当前页码(默认：1)
		参数名称：【pagesize】，说明：分页数量(默认：10)
	 */
	this.get_shop_list = function(typeid,page,pagesize,succesFun,errFun){
		var ws = new WebService();
		ws.setURL(WebServiceURL);
		ws.setOpName("get_shop_list");
		ws.setParas({
			"typeid":typeid,
			"page":page,
			"pagesize":pagesize
		});
		ws.setCallBack(callback);
		ws.setErrorCallBack(errorCallback);
		ws.LoadData();
		
		function callback(data) {
			if (data.code == '2000' || data.code == '4001') {
				succesFun(data.data);
				return;
			}
			errFun();
		}
		
		function errorCallback(e) {
			console.log(JSON.stringify(e));
		}
	}
	
	/**
	 * 获取商品价格详情
	 * 【传入参数】：
	 * 参数名称：【shopid】，说明商品id
	 */
	
	this.get_shop_detail = function(shopid,succesFun,errFun){
		var ws = new WebService();
		ws.setURL(WebServiceURL);
		ws.setOpName("get_shop_detail");
		ws.setParas({
			'shopid' :  shopid
		});
		ws.setCallBack(callback);
		ws.setErrorCallBack(errorCallback);
		ws.LoadData();
		
		function callback(data){
			if(data.code == "2000" || data.code == "4001"){
				succesFun(data.data);
				return;
			}
			errFun();
		}
		
		function errorCallback(e){
			console.log(JSON.stringify(e));
		}
	}
	
	/**
	 * 聚实惠商品分类
	 * 【传入参数】：
	 *	参数名称：【typeid】，说明：商品栏目id
	 */
	
	this.get_shop_subClass = function(typeid,succesFun,errorFun){
		var ws = new WebService();
		ws.setURL(WebServiceURL);
		ws.setOpName("get_shop_subClass")
		ws.setParas({
			'typeid' : typeid
		});
		ws.setCallBack(callback);
		ws.setErrorCallBack(errorCallback);
		ws.LoadData();
		function callback(data) {
			if (data.code == '2000' || data.code == '4001') {
				succesFun(data.data);
				return;
			}
			errFun();
		}
		
		function errorCallback(e) {
			console.log(JSON.stringify(e));
		}
	}
	/**
	 * 聚实惠商品分类（子类商品列表）
	 * 【传入参数】：
	 *	参数名称：【typeid】，说明：商品栏目id
	 */
	
	this.get_shop_subClass_list = function(typeid,page,pagesize,succesFun,errorFun){
		var ws = new WebService();
		ws.setURL(WebServiceURL);
		ws.setOpName("get_shop_subClass_list")
		ws.setParas({
			"typeid":typeid,
			"page":page,
			"pagesize":pagesize
		});
		ws.setCallBack(callback);
		ws.setErrorCallBack(errorCallback);
		ws.LoadData();
		function callback(data) {
			if (data.code == '2000' || data.code == '4001') {
				succesFun(data.data);
				return;
			}
			errFun();
		}
		
		function errorCallback(e) {
			console.log(JSON.stringify(e));
		}
	}
	
	/**
	 * 获取商品价格信息
	 * 【传入参数】：
		参数名称：【aid】，说明：商品id
	 */
	
	this.get_shop_about = function(aid,succesFun,errFun){
		var ws = new WebService();
		ws.setURL(WebServiceURL);
		ws.setOpName("get_shop_about");
		ws.setParas({
			"aid":aid
		});
		ws.setCallBack(callback);
		ws.setErrorCallBack(errorCallback);
		ws.LoadData();
		
		function callback(data) {
			if (data.code == '2000' || data.code == '4001') {
				succesFun(data.data);
				return;
			}
			errFun();
		}
		
		function errorCallback(e) {
			console.log(JSON.stringify(e));
		}
	}
	
	/**
	 * 【传入参数】：
		参数名称：【id】，说明：汽车栏目商品的id
	 */
	this.get_car_about = function(id,succesFun,errFun){
		var ws = new WebService();
		ws.setURL(WebServiceURL);
		ws.setOpName("get_car_about");
		ws.setParas({
			"id" : id
		});
		ws.setCallBack(callback);
		ws.setErrorCallBack(errorCallback);
		ws.LoadData();
		
		function callback(data){
			if(data.code == '2000' || data.code == '4001'){
				succesFun(data.data);
				return;
			}
			errFun();
		}
		
		function errorCallback(e){
			console.log(JSON.stringify(e));
		}
	}
	
	/**
	 * 加入购物车
	 * 【传入参数】：
		参数名称：【id】，说明：聚实惠栏目商品的id
		参数名称：【mid】，说明：聚实惠栏目商品的用户id
	 */
	this.add_shop_car = function(id,mid,succesFun,errFun){
		var ws = new WebService();
		ws.setURL(WebServiceURL);
		ws.setOpName("add_shop_car");
		ws.setParas({
			"id" : id,
			"mid" : mid
		});
		ws.setCallBack(callback);
		ws.setErrorCallBack(errorCallback);
		ws.LoadData();
		
		function callback(data){
			if(data.code == '2000' || data.code == '4001'){
				succesFun(data.data);
				return;
			}
			errFun();
		}
		
		function errorCallback(e){
			console.log(JSON.stringify(e));
		}
	}
	
	/**
	 * 用户获取订单
	 * 【传入参数】：
		参数名称：【userid】，说明：用户mid
	 */
	
	
	this.get_user_shop_car_list = function(mid,succesFun,errFun){
		var ws = new WebService();
		ws.setURL(WebServiceURL);
		ws.setOpName("get_user_shop_car_list");
		ws.setParas({
			"userid" : mid
		});
		ws.setCallBack(callback);
		ws.setErrorCallBack(errorCallback);
		ws.LoadData();
		
		function callback(data){
			if(data.code == '2000' || data.code == '4001'){
				succesFun(data.data);
				return;
			}
			errFun();
		}
		
		function errorCallback(e){
			console.log(JSON.stringify(e));
		}
		
	}
	
	
	/**
	 * 用户删除购物车订单
	 * 【传入参数】：
		参数名称：【oid】，说明：购物车订单id
	 */
	
	this.delete_user_car_list = function(oid,succesFun,errFun){
		var ws = new WebService();
		ws.setURL(WebServiceURL);
		ws.setOpName("delete_user_car_list");
		ws.setParas({
			"oid" : oid
		});
		ws.setCallBack(callback);
		ws.setErrorCallBack(errorCallback);
		ws.LoadData();
		
		function callback(data){
			if(data.code == '2000' || data.code == '4001'){
				succesFun(data.data);
				return;
			}
			errFun();
		}
		
		function errorCallback(e){
			console.log(JSON.stringify(e));
		}
	}
	
	/**
	 * 用户购物车提交订单
	 * 【传入参数】：
		参数名称：【oid】，说明：购物车订单号(数组)
	 */
	this.buy_from_car = function(oid,succesFun,errFun){
		var ws = new WebService();
		ws.setURL(WebServiceURL);
		ws.setOpName("buy_from_car");
		ws.setParas({
			"oid" : oid
		});
		ws.setCallBack(callback);
		ws.setErrorCallBack(errorCallback)
		ws.LoadData();
		
		function callback(data){
			if(data.code == '2000' || data.code == '4001'){
				succesFun(data.data);
				return;
			}
			errFun();
		}
		
		function errorCallback(e){
			console.log(JSON.stringify(e));
		}
	}
	
	
	
	/**
	 * 通过关键字搜索信息
	 * 【传入参数】：
		参数名称：【keywords】，说明：搜索关键字
	 */
	
	this.select_for_keywords = function(keywords,succesFun,errFun){
		var ws = new WebService();
		ws.setURL(WebServiceURL);
		ws.setOpName("select_for_keywords");
		ws.setParas({
			"keywords" : keywords
		});
		ws.setCallBack(callback);
		ws.setErrorCallBack(errorCallback);
		ws.LoadData();
		
		function callback(data){
			if(data.code == '2000' || data.code == '4001'){
				succesFun(data.data);
				return;
			}
			errFun();
		}
		
		function errorCallback(e){
			console.log(JSON.stringify(e));
		}
	}
	
	
	
	
	/**
	 * 用户每次搜素关键字就添加一次记录便于关键字排名
	 * 【传入参数】：
		参数名称：【keywords】，说明：关键字
		参数名称：【typeid】，说明：栏目id
		msg 返回true表示添加关键字成功，false表示添加失败 
	 */
	
	this.set_user_search_keywords = function(typeid,keywords,succesFun,errFun){
		var ws = new WebService();
		ws.setURL(WebServiceURL);
		ws.setOpName("set_user_search_keywords");
		ws.setParas({
			"keywords" : keywords,
			"typeid" : typeid
		});
		ws.setCallBack(callback);
		ws.setErrorCallBack(errorCallback);
		ws.LoadData();
		
		function callback(data){
			if(data.code == '2000' || data.code == '4001'){
				succesFun(data.data);
				return;
			}
			errFun();
		}
		
		function errorCallback(e){
			console.log(JSON.stringify(e));
		}
	}
	
	/**
	 * 页面获取搜索关键字排名
	 * 【传入参数】：
		参数名称：【typeid】，说明：栏目id
	 */
	
	this.get_hot_search_keywords = function(typeid,succesFun,errFun){
		var ws = new WebService();
		ws.setURL(WebServiceURL);
		ws.setOpName("get_hot_search_keywords");
		ws.setParas({
			"typeid" : typeid
		});
		ws.setCallBack(callback);
		ws.setErrorCallBack(errorCallback);
		ws.LoadData();
		
		function callback(data){
			if(data.code == '2000' || data.code == '4001'){
				succesFun(data.data);
				return;
			}
			errFun();
		}
		
		function errorCallback(e){
			console.log(JSON.stringify(e));
		}
	}
	
	
	
	
}


