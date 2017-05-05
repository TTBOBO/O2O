var consultation = function() {
	/*
	 * 获取当前地区咨询师列表数据
	 * 传入参数：
		参数名称：page；说明：当前页码(默认：1)
		参数名称：pagesize；说明：分页数量(默认：10)
	 */
	this.get_zxs_list_local = function(page, pagesize, succesFun, errFun) {
		var ws = new WebService();
		ws.setURL(WebServiceURL);
		ws.setOpName("get_zxs_list_local");
		ws.setParas({
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
	/*
	 * 获取推荐咨询师列表数据
	 * 传入参数：
		参数名称：page；说明：当前页码(默认：1)
		参数名称：pagesize；说明：分页数量(默认：10)
	 */
	this.get_zxs_list_recommand = function(page, pagesize, succesFun, errFun) {
		var ws = new WebService();
		ws.setURL(WebServiceURL);
		ws.setOpName("get_zxs_list_recommand");
		ws.setParas({
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
	/*
	 * 获取咨询师列表数据
	 * 传入参数：
		参数名称：page；说明：当前页码(默认：1)
		参数名称：pagesize；说明：分页数量(默认：10)
	 */
	this.get_zxs_list = function(page, pagesize, succesFun, errFun) {
		var ws = new WebService();
		ws.setURL(WebServiceURL);
		ws.setOpName("get_zxs_list");
		ws.setParas({
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
	/*
	 * 获取咨询师详细数据
	 * 传入参数：
		参数名称：mid；说明：咨询师的用户id(不允许为空！！！必须是数字！！！)
	 */
	this.get_zxs_details = function(mid, succesFun, errFun) {
		var ws = new WebService();
		ws.setURL(WebServiceURL);
		ws.setOpName("get_zxs_details");
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
	 * 保存关注咨询师数据
	 * 传入参数：
		参数名称：mid；说明：用户id(不允许为空！！！必须是数字！！！)
		参数名称：zxsid；说明：用户id(不允许为空！！！必须是数字！！！)
	 */
	this.set_zxs_follow_save = function(mid, zxsid, succesFun, errFun) {
		var ws = new WebService();
		ws.setURL(WebServiceURL);
		ws.setOpName("set_zxs_follow_save");
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
	 * 给咨询师点赞操作
	 * 传入参数：
		参数名称：mid；说明：咨询师id(不允许为空！！！必须是数字！！！)
	 */
	this.set_zxs_isgood = function(mid, succesFun, errFun) {
		var ws = new WebService();
		ws.setURL(WebServiceURL);
		ws.setOpName("set_zxs_isgood");
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
	 * 保存预约咨询师数据
	 * 传入参数：
		参数名称：mid；说明：用户id(不允许为空！！！必须是数字！！！)
		参数名称：zxsid；说明：用户id(不允许为空！！！必须是数字！！！)
		参数名称：nickname；说明：称呼(默认：匿名！！！必须urlencode处理！！！)
		参数名称：age；说明：年龄(默认：0，必须是数字！！！)
		参数名称：gender；说明：性别(默认：保密，可以为：男|女|保密！！！必须urlencode处理！！！)
		参数名称：phone；说明：联系方式(默认：0，必须是数字！！！)
		参数名称：content；说明：预约咨询描述(不允许为空！！！必须urlencode处理！！！)
	 */
	this.set_zxs_appointment_save = function(mid, zxsid, nickname, age, gender, phone, content, succesFun, errFun) {
		var ws = new WebService();
		ws.setURL(WebServiceURL);
		ws.setOpName("set_zxs_appointment_save");
		ws.setParas({
			mid: mid,
			zxsid: zxsid,
			nickname: nickname,
			age: age,
			gender: gender,
			phone: phone,
			content: content
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