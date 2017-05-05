var AtlasArticle = function(){
	var that = this;
	
	/**
	 * 获得图集文章列表
	 * 传入参数：
	 * 参数名称：typeid；说明：栏目id( 默认：0 所有栏目 )
	 * 参数名称：page；说明：当前页码( 默认：1 )
	 * 参数名称：pagesize；说明：分页数量( 默认：10 )
	 */
	
	this.get_img_article = function(typeid,page,pagesize, succesFun, errFun){
		var ws = new WebService();
		ws.setURL(WebServiceURL);
		ws.setOpName("get_img_article");
		ws.setParas({
			typeid: typeid,
			page: page,
			pagesize: pagesize
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
	};
	
	
	/**
	 * 获得图集文章内容
	 * 传入参数
	 * id；说明：图集文章id( 默认：id降序 第一条数据 )
	 */
	this.get_img_article_content = function(id,succesFun,errFun){
		var ws = new WebService();
		ws.setURL(WebServiceURL);
		ws.setOpName("get_img_article_content");
		ws.setParas({
			id: id
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
	};
	
	/**
	 * 获取用户新闻动态
	 * 传入参数：
	 * 参数名称：typeid；说明：栏目id( 默认：0 所有栏目 )
	 * 参数名称：page；说明：当前页码( 默认：1 )
	 * 参数名称：pagesize；说明：分页数量( 默认：10 )
	 */
	this.get_release_list = function(typeid,page,pageSize, succesFun, errFun){
		var ws = new WebService();
		ws.setURL(WebServiceURL);
		ws.setOpName("get_release_list");
		ws.setParas({
			typeid: typeid,
			page: page,
			pageSize: pageSize
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
	};
	
	
	this.get_advertisement = function(typeid, succesFun, errFun){
		var ws = new WebService();
		ws.setURL(WebServiceURL);
		ws.setOpName("get_advertisement");
		ws.setParas({
			typeid: typeid
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
	};
	
	
}
