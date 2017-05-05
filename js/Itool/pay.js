var PayFor = function() {
	var that = this;
	var w = null; //提示窗口
	this.checkServices = function(pc) {
		if(!pc.serviceReady) {
			var txt = null;
			switch(pc.id) {
				case "wxpay":
					txt = "检测到系统未安装“微信”，无法完成支付操作，是否立即安装？";
					break;
				case "alipay":
					txt = "检测到系统未安装“支付宝快捷支付服务”，无法完成支付操作，是否立即安装？";
					break;
				default:
					txt = "系统未安装“" + pc.description + "”服务，无法完成支付，是否立即安装？";
					break;
			}
			plus.nativeUI.confirm(txt, function(e) {
				if(e.index == 0) {
					pc.installService();
				}
			}, pc.description);
		}
		return true;
	};

	/**
	 *payinfo :  订单参数  （json）
	 * 	 productID:商品id
	 * 	 count:数量
	 * 	 user_id:用户id
	 *plat :  支付平台    (string)  
	 * alipay  wxpay
	 */
	this.GetPayInfo = function(payInfo, fun) {
		var payChanel = null;
		//		console.log(payInfo.plat);
		plus.payment.getChannels(function(channels) {
			for(var i in channels) {
				payChanel = channels[i];

				if(payChanel.id == payInfo.plat && that.checkServices(payChanel)) {
					console.log(payChanel.id);
					startPay(payChanel, payInfo, fun);

				}
			}
			return false;
		}, function(e) {
			alert("获取支付通道失败：" + e.message);
		});
	}

	function startPay(payChanel, o, fun) {
		//plus.nativeUI.showWaiting("正在处理订单信息");
		plus.payment.request(payChanel, function(result) {
			console.log(result);
			plus.nativeUI.alert("支付成功。", function() {
				fun();

			}, "充值结果");
		}, function(error) {
			w.close();
			mui.alert("支付失败", "错误");
			console.log("支付失败" + error.code);
		});
		//		console.log(o.id);console.log(o.price);console.log(o.mid);console.log(o.cartcount);
		/*new publicDal().GetPayInfo(o.id,o.price,o.mid,o.cartcount,function(data){
//			w.close();
//			w = null;
			console.log(JSON.stringify(data));
			plus.payment.request(payChanel,function(result) {
			console.log(result);
			plus.nativeUI.alert("支付成功。", function() {
				fun();	
			}, "充值结果");
		}, function(error) {
				w.close();
				mui.alert("支付失败","错误");
				console.log("支付失败" + error.code);
		});
		},function(e){
			w.close();
			w = null;
			e&&mui.toast(e.msg); 
		});*/
	}

}