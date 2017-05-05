var WebService = function () {
	
   //地址。
    var url = "";
    this.setURL = function (_url) {
        url = _url;
    }
    //方法名称。
    var opName = "";
    this.setOpName = function (_opName) {
        opName = _opName;
    }
    /**
	*参数
	*hash数组
	*/
    var paras = "";
    this.setParas = function (parasArray) {
	var isFirst=true;
       for(key in parasArray){
	   if(isFirst) {
	    paras+="?"+key+"="+parasArray[key];
	   isFirst=false;
	   }
	   else
	    paras+="&"+key+"="+parasArray[key];
	   }
    }
	
	this.clearParas=function(){
		paras="";
	};


    //成功后数据返回处理函数。
    //带有个参数，参数为返回后的数据。
    //function (result) {  //返回json类型数据   
    //            alert(result.loginmsg);
     //       }
    var callBack = null;
    this.setCallBack = function (_callBack) {
    	
        callBack = function(data){
        	isios&&(mui.iosItool.closeNetWork());
        	_callBack(data);
        };
    }
 

    var errorCallBack = null;
    this.setErrorCallBack = function (_errorCallBack) {
      
        errorCallBack = function(e){
        	isios&&(mui.iosItool.closeNetWork());
        	_errorCallBack(e);
        };
    }
	
	var isios = mui.os.ios;
	
    this.LoadData = function () {
	//isios&&(mui.iosItool.showNetWork());
    	//encode转化
    	paras = encodeURI(paras);
        var webUrl = url + opName + paras; 
        console.log("["+opName+"]:"+webUrl);
        //需要先引用jq
        $.ajax({
            type : "GET",
            url: webUrl, //所请求的webservice服务url地址               
            //contentType: 'application/json; charset=utf-8',
            //contentType:"application/x-www-form-urlencoded; charset=gb2312",
            dataType : "jsonp",
            jsonp: 'callback',
            success: callBack,
            Error: errorCallBack
        });
    }
}