var publicDal = function(){
	
	//发起支付请求
	this.GetPayInfo = function(id,price,mid,cartcount,successFun,faildHandler){
		var ws = new WebService(mui);
		ws.setUrl(WebServiceURL);
		ws.setOpName("alipay");
		ws.setParas({
			id:id,
			mid:mid,
			price:price,
			cartcount:cartcount
		});
		ws.setCallBack(callback);
		ws.setErrorCall(errorCallback);
		ws.LoadData();
		function callback(data) {
			
			data = eval(data);
			data = data.d;
			successFun(data);
		}
		//失败的回调
		function errorCallback(e) {
			console.log(JSON.stringify(e));
		}
	}
	
}
