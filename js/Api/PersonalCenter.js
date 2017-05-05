var PersonalCenter = function() {

		//	方 法 名：get_user_detail_by_mid
	//	方法作用：通过mid获取用户的信息
	//	通信方法：GET
	//	格式说明：callbackName"msg":"success","code":"2000","data":{"result":"success"

	this.get_user_detail_by_mid = function(mid, succesFun, errFun) {
		var ws = new WebService();
		ws.setURL(WebServiceURL);
		ws.setOpName("get_user_detail_by_mid");
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
	//	方 法 名：set_user_detail_save
	//	方法作用：保存用户数据
	//	通信方法：GET
	//	格式说明：callbackName"msg":"success","code":"2000","data":{"result":"success"

	this.set_user_detail_save = function(mid, uname, sex, qq, email, shouji, succesFun, errFun) {
		var ws = new WebService();
		ws.setURL(WebServiceURL);
		ws.setOpName("set_user_detail_save");
		ws.setParas({
			mid: mid,
			uname: uname,
			sex: sex,
			qq: qq,
			email: email,
			shouji: shouji
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
	 * 获取用户关注的咨询师列表详细数据
	 * 传入参数：
		参数名称：mid；说明：用户id(不允许为空！！！必须是数字！！！)
	 */
	this.get_zxs_follow_list = function(mid, succesFun, errFun) {
		var ws = new WebService();
		ws.setURL(WebServiceURL);
		ws.setOpName("get_zxs_follow_list");
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
	 * 获取用户预约数据列表
	 * 传入参数：
		参数名称：mid；说明：用户id(不允许为空！！！必须是数字！！！)
	 */
	this.get_zxs_appointment_list = function(mid, succesFun, errFun) {
		var ws = new WebService();
		ws.setURL(WebServiceURL);
		ws.setOpName("get_zxs_appointment_list");
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
	 *	取消用户对咨询师的关注
	 *	传入参数：
	 *	参数名称：mid；说明：用户id(不允许为空！！！必须是数字！！！)
	 *	参数名称：zxsid；说明：用户id(不允许为空！！！必须是数字！！
	 * */
	this.set_zxs_follow_cancle = function(mid, zxsid, succesFun, errFun) {
		var ws = new WebService();
		ws.setURL(WebServiceURL);
		ws.setOpName("set_zxs_follow_cancle");
		ws.setParas({
			mid: mid,
			zxsid: zxsid
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
	 * 取消用户对咨询师的预约
	 * 传入参数：
		参数名称：id；说明：预约记录id(不允许为空！！！必须是数字！！！)
	 */
	this.set_zxs_appointment_cancle = function(id, succesFun, errFun) {
		var ws = new WebService();
		ws.setURL(WebServiceURL);
		ws.setOpName("set_zxs_appointment_cancle");
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
	 * //获取收藏课程列表列表
	 * 【传入参数】：
		参数名称：【mid】，说明：用户id() 
		参数名称：【page】，说明：当前页码(默认：1)
		参数名称：【pagesize】，说明：分页数量(默认：10)
	 */

	this.get_user_fav_lessons_list = function(mid, page, pagesize, succesFun, errFun) {
			var ws = new WebService();
			ws.setURL(WebServiceURL);
			ws.setOpName("get_user_fav_lessons_list");
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
		}
		/**
		 * //删除课程活动
		 * 【传出参数】：
		 *	参数名称：【id】，说明：收藏记录id() 
		 */
	this.set_lessons_fav_cancle = function(id, succesFun, errFun) {
			var ws = new WebService();
			ws.setURL(WebServiceURL);
			ws.setOpName("set_lessons_fav_cancle");
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

		}
		/*
		 * 获取咨询师认证状态
		 * 传入参数：
			参数名称：mid；说明：咨询师用户id(不允许为空！！！必须是数字！！！)
		 */
	this.get_zxs_status = function(mid, succesFun, errFun) {
			var ws = new WebService();
			ws.setURL(WebServiceURL);
			ws.setOpName("get_zxs_status");
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

		}
		/*
		 * 保存咨询师认证数据
		 * 传入参数：
		参数名称：mid；说明：用户id(不允许为空！！！必须是数字！！！)
		参数名称：xm；说明：姓名(不允许为空！！！必须urlencode处理！！！)
		参数名称：sfzh；说明：身份证(不允许为空！！！18位数字！！！)
		参数名称：lxfs；说明：联系方式(不允许为空！！！11位手机号！！！)
		参数名称：dq；说明：所在地区(不允许为空！！！必须urlencode处理！！！)
		参数名称：zwjs；说明：自我介绍(不允许为空！！！必须urlencode处理！！！)
		 */
	this.set_zxs_info_save = function(mid, xm, sfzh, lxfs, dq, zwjs, succesFun, errFun) {
		var ws = new WebService();
		ws.setURL(WebServiceURL);
		ws.setOpName("set_zxs_info_save");
		ws.setParas({
			mid: mid,
			xm: xm,
			sfzh: sfzh,
			lxfs: lxfs,
			dq: dq,
			zwjx: zwjs
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
}