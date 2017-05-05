var Evaluation = function() {
	/*
	 * 获取测评试卷列表
	 * 传入参数：
		参数名称：page；说明：当前页码(默认：1)
		参数名称：pagesize；说明：分页数量(默认：10)
	 */
	this.get_papers_list = function(page, pagesize, succesFun, errFun) {
		var ws = new WebService();
		ws.setURL(WebServiceURL);
		ws.setOpName("get_papers_list");
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
	 * 获取测评试卷内容
	 * 传入参数：
		参数名称：papercode；说明：试题编码（不允许为空！！！）
	 */
	this.get_paper_contents = function(papercode, succesFun, errFun) {
		var ws = new WebService();
		ws.setURL(WebServiceURL);
		ws.setOpName("get_paper_contents");
		ws.setParas({
			papercode: papercode
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
	 * 获取用户测评结果
	 * 传入参数：
		参数名称：mid；说明：用户id(不允许为空！！！必须是数字！！！)
	 */
	this.get_paper_result_by_mid = function(mid, succesFun, errFun) {
		var ws = new WebService();
		ws.setURL(WebServiceURL);
		ws.setOpName("get_paper_result_by_mid");
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
	 方 法 名：set_paper_result_save
	success表示保存成功，failed表示保存失败，isHad表示已经存在的记录） prId是为保存后的测评记录id	
	参数名称：mid；说明：测评用户id(不允许为空！！！必须是数字！！！)
	参数名称：papercode；说明：试题编码（不允许为空！！！）
	参数名称：resultmatrix；说明：测评结果矩阵(不允许为空！！！)
	参数名称：score；说明：测评结果评分(不允许为空！！！)
	 
	 
	 * 
	 * */
	this.set_paper_result_save = function(mid,papercode,resultmatrix,score,succesFun, errFun) {
		var ws = new WebService();
		ws.setURL(WebServiceURL);
		ws.setOpName("set_paper_result_save");
		ws.setParas({
			mid:mid,
			papercode:papercode,
			resultmatrix:resultmatrix,
			score:score
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