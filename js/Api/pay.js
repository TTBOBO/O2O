var Pay = function() {
	var c = this;
	var a = null;
	var d = null;
	this.checkServices = function(f) {
		if (!f.serviceReady) {
			var e = null;
			switch (f.id) {
				case "alipay":
					e = "检测到系统未安装“支付宝快捷支付服务”，无法完成支付操作，是否立即安装？";
					break;
				case "wxpay":
					e = "检测到系统未安装“微信”，无法完成支付操作，是否立即安装？";
					break;
				default:
					e = "系统未安装“" + f.description + "”服务，无法完成支付，是否立即安装？";
					break
			}
			plus.nativeUI.confirm(e, function(g) {
				if (g.index == 0) {
					f.installService()
				}
			}, f.description);
			return false
		}
		return true
	};
	this.pay = function(plat, uri, e) {
		var f = null;
		plus.payment.getChannels(function(h) {
			for (var j in h) {
				f = h[j];
				if (f.id == plat && c.checkServices(f)) {
					b(f, uri, e);
				}
			}
			return false
		}, function(h) {
			alert("获取支付通道失败：" + h.message)
		})
	};

	function b(h, i, e) {
		if (a) {
			return
		}
		a = plus.nativeUI.showWaiting("正在处理订单信息");
		//var i = "notify_url=\"http%3A%2F%2Flocalhost%3A8088%2F\"&service=\"mobile.securitypay.pay\"&partner=\"2088121526428742\"&_input_charset=\"UTF-8\"&out_trade_no=\"20160523203331312486\"&subject=\"如何从小对孩子进行情商教育？\"&payment_type=\"1\"&seller_id=\"hckx_chenyi@126.com\"&total_fee=\"0.01\"&body=\"购买【如何从小对孩子进行情商教育？】课程，消费【0.01】元购买\"&it_b_pay=\"1d\"&sign=\"bG8M%2Bf8%2FmE94NnjR8yquojZF9QFQkqlm25sseKX4vb2qKYd3am8uEUT1mWQyuUdUcPpkspbT4UF7QwppncvYbb6h4%2Fh02BLNWtdAH2%2FAuKKYn2AiSNoUgMiTAQZTdN7MmZukEo8vgbJp1OPopf9VniA5gGIwLeth6%2B86ucSh%2BSw%3D\"&sign_type=\"RSA\"";
		plus.payment.request(h, i, function(j) {
			plus.nativeUI.alert("支付成功。", function() {
				a.close();
				a = null;
				e();
			}, "充值结果")
		}, function(j) {
			a.close();
			a = null;
			mui.alert("支付失败", "错误");
			console.log("支付失败" + j.code)
		});

	}
	
	
	//原始支付接口
	this.getPayInfo = function(plat,id,mid,price,cartcount,successFun,errFun){
		var ws = new WebService();
		ws.setURL(WebServiceURL); 
		ws.setOpName("pay");
//		ws.setOpName("payInfo");
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
				console.log(JSON.stringify(data));
				c.pay(plat,data.data.url,successFun);
				return;
			}
			errFun();
		}
		function errorCallback(e) {
			console.log(JSON.stringify(e));
		}
	};
	
	this.payfor = function(payMode,aid,mid,price,cartcount,successFun,errFun){
		var ws = new WebService();
		ws.setURL(WebServiceURL);
		ws.setOpName("payfor");
		ws.setParas({
			"payMode":payMode,
			"aid":aid,
			"mid":mid,
			"price":price,
			"cartcount":cartcount
		});
		ws.setCallBack(callback);
		ws.setErrorCallBack(errorCallback);
		ws.LoadData();

		function callback(data) {
			if(data.code=='2000'||data.code=='4001'){
				console.log(JSON.stringify(data));
				//c.pay(plat,data.data.url,successFun);
				return;
			}
			errFun();
		}
		function errorCallback(e) {
			console.log(JSON.stringify(e));
		}
	}
	
	this.set_member_address = function(mid,consignee,address,tel,succesFun,errFun){
		var ws = new WebService();
		ws.setURL(WebServiceURL);
		ws.setOpName("set_member_address");
		ws.setParas({
			"mid":mid,
			"consignee":consignee,
			"address":address,
			"tel":tel
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
	}
	
	this.get_member_address = function(mid,succesFun,errFun){
		var ws = new WebService();
		ws.setURL(WebServiceURL);
		ws.setOpName("get_member_address");
		ws.setParas({
			"mid":mid
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
	}
};