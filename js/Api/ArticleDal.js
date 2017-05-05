var ArticleDAL = function() {
	var that = this;

	/**
	 * 【传入参数】：
		参数名称：【typeid】，说明：栏目id(默认：0，所有栏目)
		参数名称：【page】，说明：当前页码(默认：1)
		参数名称：【pagesize】，说明：分页数量(默认：10)
	 */
	this.get_article_list = function(typeid, page, pagesize, succesFun, errFun) {
		var ws = new WebService();
		ws.setURL(WebServiceURL);
		ws.setOpName("get_article_list");
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
	 * 【传入参数】：
		参数名称：【id】，说明：栏目id(默认：0，所有栏目)
	 */
	this.get_article_category = function(id, succesFun, errFun) {
		var ws = new WebService();
		ws.setURL(WebServiceURL);
		ws.setOpName("get_article_category");
		ws.setParas({
			id: id
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
	 * 获取文章详细内容
	 * 【传入参数】：
		参数名称：【id】，说明：文章id()
	 */
	this.get_article_contents = function(id, succesFun, errFun) {
		var ws = new WebService();
		ws.setURL(WebServiceURL);
		ws.setOpName("get_article_contents");
		ws.setParas({
			id: id
		});
		ws.setCallBack(callback);
		ws.setErrorCallBack(errorCallback);
		ws.LoadData();

		function callback(data) {
			if (data.code == '2000' || data.code == '4001'){
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
	 * 添加文章的浏览量，每次查看文章详情添加一个浏览量
	 * 【传入参数】：
		参数名称：【id】，说明：文章id
	 */
	
	this.set_article_click = function(id,succesFun,errFun){
		var ws = new WebService();
		ws.setURL(WebServiceURL);
		ws.setOpName("set_article_click");
		ws.setParas({
			id : id
		});
		ws.setCallBack(callback);
		ws.setErrorCallBack(errorCallback);
		ws.LoadData();

		function callback(data) {
			if (data.code == '2000' || data.code == '4001'){
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
	 * 给文章点赞
	 * 【传入参数】：
		参数名称：【id】，说明：文章id()
	 */
	this.set_article_isgood = function(id, succesFun, errFun) {
		var ws = new WebService();
		ws.setURL(WebServiceURL);
		ws.setOpName("set_article_isgood");
		ws.setParas({
			id: id
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
	 * 给文章收藏
	 * 【传入参数】：
		参数名称：【id】，说明：文章id()
	 */
	this.set_article_fav = function(aid, mid, succesFun, errFun) {
		var ws = new WebService();
		ws.setURL(WebServiceURL);
		ws.setOpName("set_article_fav");
		ws.setParas({
			mid: mid,
			aid: aid
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
		 * //获取收藏文章列表
		 * 【传入参数】：
			参数名称：【mid】，说明：用户id() 
			参数名称：【page】，说明：当前页码(默认：1)
			参数名称：【pagesize】，说明：分页数量(默认：10)
		 */

	this.get_user_fav_list = function(mid, page, pagesize, succesFun, errFun) {
		var ws = new WebService();
		ws.setURL(WebServiceURL);
		ws.setOpName("get_user_fav_list");
		ws.setParas({
			mid: mid,
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
	 * //获取收藏文章列表
	 * 【传出参数】：
	 *	参数名称：【id】，说明：收藏记录id() 
	 */
	this.set_article_fav_cancle = function(id, succesFun, errFun) {
		var ws = new WebService();
		ws.setURL(WebServiceURL);
		ws.setOpName("set_article_fav_cancle");
		ws.setParas({
			id: id
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
	/*
      * 保存文章的用户评论数据
      * 传入参数：
		参数名称：aid；说明：文章id(不允许为空！！！必须是数字！！！)
		参数名称：mid；说明：用户id(不允许为空！！！必须是数字！！！)
		参数名称：isanonymous；说明：是否匿名(0表示匿名，1表示不匿名，默认0)
		参数名称：goodbad；说明：评价(0表示顶，1表示踩，2表示中立，默认0)
		参数名称：msg；说明：评论内容(不允许为空！！！必须urlencode处理！！！)
      */
	this.set_article_feedback_save = function(aid, mid, goodbad, msg, succesFun, errFun) {
		var ws = new WebService();
		ws.setURL(WebServiceURL);
		ws.setOpName("set_article_feedback_save");
		ws.setParas({
			aid: aid,
			mid: mid,
//			isanonymous: isanonymous,
			goodbad: goodbad,
			msg: msg
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
	
	
	/*
	 * 获取文章评论列表数据
	 * 传入参数：
		参数名称：aid；说明：文章id(不允许为空！！！必须是数字！！！)
	 */
	this.get_article_feedback_list = function(aid, succesFun, errFun) {
		var ws = new WebService();
		ws.setURL(WebServiceURL);
		ws.setOpName("get_article_feedback_list");
		ws.setParas({
			aid: aid
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
	/*
	 * 获取用户评论列表数据
	 * 传入参数：
		参数名称：mid；说明：用户id(不允许为空！！！必须是数字！！！)
	 */
	this.get_user_feedback_list = function(mid, succesFun, errFun) {
		var ws = new WebService();
		ws.setURL(WebServiceURL);
		ws.setOpName("get_user_feedback_list");
		ws.setParas({
			mid: mid
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
	/*
	 * 获取评论详细数据
	 * 传入参数：
		参数名称：id；说明：评论记录id(不允许为空！！！必须是数字！！！)
	 */
	this.get_feedback_details = function(id, succesFun, errFun) {
		var ws = new WebService();
		ws.setURL(WebServiceURL);
		ws.setOpName("get_feedback_details");
		ws.setParas({
			id: id
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
	
	/*
	 * 用户评论订单并修改评论状态
	 * 传入参数：
		参数名称：buyid；说明：订单号
	 */
	this.updatecomment = function(buyid,succesFun,errFun){
		var ws = new WebService();
		ws.setURL(WebServiceURL);
		ws.setOpName("updatecomment");
		ws.setParas({
			"buyid" : buyid
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

}