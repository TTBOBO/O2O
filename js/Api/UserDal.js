var UserDAL = function() {
	/**
	 * 用户登陆
	 * 【传入参数】：
		参数名称：【uname】，说明：登录用户名
		参数名称：【pwd】，说明：登录密码
	 */
	this.op_user_login = function(uname, pwd, succesFun, errFun) {
		var ws = new WebService();
		ws.setURL(WebServiceURL);
		ws.setOpName("op_user_login");
		ws.setParas({
			uname: uname,
			pwd: pwd
		});
		ws.setCallBack(callback);
		ws.setErrorCallBack(errorCallback);
		ws.LoadData();

		function callback(data) {
			if(data.code == '2000' || data.code == '4001') {
				succesFun(data.data);
				return;
			}
			errFun();
		}

		function errorCallback(e) {
			console.log(JSON.stringify(e));
		}
	};

	//用户获取验证码
	this.get_mobile_code = function(shouji, succesFun, errFun) {
		var ws = new WebService();
		ws.setURL(WebServiceURL);
		ws.setOpName("get_mobile_code");
		ws.setParas({
			shouji: shouji
		});
		ws.setCallBack(callback);
		ws.setErrorCallBack(errorCallback);
		ws.LoadData();

		function callback(data) {
			if(data.code == '2000' || data.code == '4001') {
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
	 * 用户注册
	 * 【传入参数】：
		参数名称：【shouji】，说明：注册手机号码
		参数名称：【pwd】，说明：注册密码
	 */
	//用户注册
	this.op_user_register = function(shouji, pwd, succesFun, errFun) {
		var ws = new WebService();
		ws.setURL(WebServiceURL);
		ws.setOpName("op_user_register");
		ws.setParas({
			shouji: shouji,
			pwd: pwd
		});
		ws.setCallBack(callback);
		ws.setErrorCallBack(errorCallback);
		ws.LoadData();

		function callback(data) {
			if(data.code == '2000' || data.code == '4001') {
				succesFun(data.data);
				return;
			}
			errFun();
		}

		function errorCallback(e) {
			console.log(JSON.stringify(e));
		}
	};

	//通过手机号获取用户详细信息
	this.get_user_detail_by_shouji = function(shouji, succesFun, errFun) {
		var ws = new WebService();
		ws.setURL(WebServiceURL);
		ws.setOpName("get_user_detail_by_shouji");
		ws.setParas({
			shouji: shouji
		});
		ws.setCallBack(callback);
		ws.setErrorCallBack(errorCallback);
		ws.LoadData();

		function callback(data) {
			if(data.code == '2000' || data.code == '4001') {
				succesFun(data.data);
				return;
			}
			errFun();
		}

		function errorCallback(e) {
			console.log(JSON.stringify(e));
		}
	};

	//第三方登录接口
	this.op_user_third_party_login = function(openid, gender, face, nickname, logintype, succesFun, errFun) {
		var ws = new WebService();
		ws.setURL(WebServiceURL);
		ws.setOpName("op_user_third_party_login");
		ws.setParas({
			openid: openid,
			gender: gender,
			face: face,
			nickname: nickname,
			logintype: logintype
		});
		ws.setCallBack(callback);
		ws.setErrorCallBack(errorCallback);
		ws.LoadData();

		function callback(data) {
			if(data.code == '2000' || data.code == '4001') {
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
	 * 忘记密码--修改密码
	 * 【传入参数】：
	 * 参数名称：【uname】，说明：用户名
	 * 参数名称：【tel】，说明：用户所绑定的手机号码
	 */
	this.inspect_user = function(uname, tel, succesFun, errFun) {
		var ws = new WebService();
		ws.setURL(WebServiceURL);
		ws.setOpName("inspect_user");
		ws.setParas({
			"uname": uname,
			"tel": tel
		});
		ws.setCallBack(callback);
		ws.setErrorCallBack(errorCallback);
		ws.LoadData();
		function callback(data) {
			if(data.code == '2000' || data.code == '4001') {
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
	 * 忘记密码--修改密码
	 * 【传入参数】：
	 * 参数名称：【uname】，说明：用户名
	 * 参数名称：【tel】，说明：用户所绑定的手机号码
	 * 参数名称：【pwd】，说明：用户需要修改的新密码
	 */
	this.set_new_password = function(uname,pwd,succesFun,errFun){
		var ws = new WebService();
		ws.setURL(WebServiceURL);
		ws.setOpName("set_new_password");
		ws.setParas({
			"uname" : uname,
			"pwd" : pwd
		});
		ws.setCallBack(callback);
		ws.setErrorCallBack(errorCallback);
		ws.LoadData();
		function callback(data) {
			if(data.code == '2000' || data.code == '4001') {
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
	 * 直接通过原始密码修改密码
	 * 【传入参数】：
	 * 参数名称：【mid】，说明：用户mid
	 * 参数名称：【oldPwd】，说明：用户旧密码
	 * 参数名称：【newPwd】，说明：用户新密码
	 */
	
	
	this.change_user_pwd = function(mid,oldPwd,newPwd,succesFun,errFun){
		var ws = new WebService();
		ws.setURL(WebServiceURL);
		ws.setOpName("change_user_pwd");
		ws.setParas({
			'mid' : mid,
			'oldPwd' : oldPwd,
			'newPwd' : newPwd
		});
		ws.setCallBack(callback);
		ws.setErrorCallBack(errorCallback);
		ws.LoadData();
		
		function callback(data) {
			if(data.code == '2000' || data.code == '4001') {
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
	 * 获取图片验证码
	 * 无需传入任何参数
	 */
	this.get_img_code = function(succesFun,errFun){
		var ws = new WebService();
		ws.setURL(WebServiceURL);
		ws.setOpName("get_img_code");
		ws.setParas({
			
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
	 * 添加用户收货地址
	 * 【传入参数】：
	 * 参数名称：【userid】，说明：用户mid
	 * 参数名称：【consignee】，说明：收货姓名
	 * 参数名称：【address】，说明：收货地址
	 * 参数名称：【city】，说明：所在地区
	 * 参数名称：【tel】，说明：联系电话
	 * 参数名称：【des】，说明：是否是默认地址
	 */
	
	
	this.add_user_address = function(userid,consignee,address,city,tel,des,succesFun,errFun){
		var ws = new WebService();
		ws.setURL(WebServiceURL);
		ws.setOpName("add_user_address");
		ws.setParas({
			'userid' : userid,
			'consignee' : consignee,
			'address' : address,
			'city' : city,
			'tel' : tel,
			'des' : des
		});
		ws.setCallBack(callback);
		ws.setErrorCallBack(errorCallback);
		ws.LoadData();
		
		function callback(data){
			if (data.code == '2000' || data.code == '4001') {
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
	 * 删除用户收货地址
	 * 【传入参数】：
	 * 参数名称：【aid】，说明：收货地址的aid
	 */
	
	this.delete_user_address = function(aid,mid,succesFun,errorFun){
		var ws = new WebService();
		ws.setURL(WebServiceURL);
		ws.setOpName("delete_user_address");
		ws.setParas({
			'aid' : aid,
			'mid' : mid
		});
		ws.setCallBack(callback);
		ws.setErrorCallBack(errorCallback);
		ws.LoadData();
		
		function callback(data){
			if (data.code == '2000' || data.code == '4001') {
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
	 * 获取用户的收货地址列表
	 * 【传入参数】：
	 * 参数名称：【mid】，说明：用户mid
	 */
	
	
	this.get_user_address = function(mid,succesFun,errFun){
		var ws = new WebService();
		ws.setURL(WebServiceURL);
		ws.setOpName("get_user_address");
		ws.setParas({
			'mid' : mid
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
	 * 用户修改收货地址
	 * 【传入参数】：
	 * 参数名称：【aid】，说明：地址id
	 * 参数名称：【consignee】，说明：收货人姓名
	 * 参数名称：【address】，说明：收货地址
	 * 参数名称：【tel】，说明：收货人联系电话
	 * 参数名称：【city】，说明：地址所在地区
	 * 参数名称：【des】，说明：是否设置成默认地址
	 */
	
	this.update_user_address = function(mid,aid,consignee,address,city,tel,des,succesFun,errFun){
		var ws = new WebService();
		ws.setURL(WebServiceURL);
		ws.setOpName("update_user_address");
		ws.setParas({
			'mid' : mid,
			'aid' : aid,
			'consignee' : consignee,
			'address' : address,
			'city' : city,
			'tel' : tel,
			'des' : des
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
	 * 点击单选框设置默认收货地址
	 * 【传入参数】：
	 * 参数名称：【mid】，说明：用户mid
	 */
	
	this.change_defult_address = function(mid,aid,des,succesFun,errFun){
		var ws = new WebService();
		ws.setURL(WebServiceURL);
		ws.setOpName("change_defult_address");
		ws.setParas({
			'mid' : mid,
			'aid' : aid,
			'des' : des
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
	 * 用户获取订单
	 * 【传入参数】：
	 * 参数名称：【mid】，说明：用户mid
	 * 参数名称：【page】，说明：当前页码(默认：1)
	 * 参数名称：【pagesize】，说明：分页数量(默认：10)
	 */
	this.get_user_order = function(mid,page,pagesize,succesFun,errFun){
		var ws = new WebService();
		ws.setURL(WebServiceURL);
		ws.setOpName("get_user_order");
		ws.setParas({
			"mid" : mid,
			"page" : page,
			"pagesize" : pagesize
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
	 * 购买商品
	 * 【传入参数】：
	 * 参数名称：【aid】，说明：商品id
	 * 参数名称：【mid】，说明：用户id
	 * 参数名称：【title】，说明：商品名称
	 * 参数名称：【price】，说明：商品价格
	 * 参数名称：【count】，说明：购买数量
	 */
	
	this.set_order_list = function(aid,mid,title,price,count,succesFun,errFun){
		var ws = new WebService();
		ws.setURL(WebServiceURL);
		ws.setOpName("set_order_list");
		ws.setParas({
			"aid" : aid,
			"mid" : mid,
			"title" : title,
			"price" : price,
			"count" : count
		});
		ws.setCallBack(callback);
		ws.setErrorCallBack(errorCallback);
		ws.LoadData();
		
		function callback(data){
			if(data.code == "2000" || data.code == '4001'){
				succesFun(data.data)
				return;
			}
			errFun();
		}
		
		function errorCallback(e){
			console.log(JSON.stringify(e));
		}
	}
	
	/**
	 * 用户确认收货并修改评论状态
	 * 【传入参数】：
		参数名称：【buyid】，说明：订单号
	 */
	
	this.comment_state = function(buyid,succesFun,errFun){
		var ws = new WebService();
		ws.setURL(WebServiceURL);
		ws.setOpName("comment_state");
		ws.setParas({
			"buyid" : buyid
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
	

	this.getUserInfo = function() {
		var userData = common.myStorage.getItem("userData");
		return userData;
	}

	this.openLogin = function() {
		mui.toast("您是游客身份，请先登陆");
		mui.openWindow({
			url: "../other/login.html",
			id: "login",
			style: {},
			show: {
				aniShow: 'zoom-fade-out',
				duration: 200,
			},
			waiting: {
				autoShow: false
			}
		});
	}

}