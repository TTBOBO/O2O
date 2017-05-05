var getUserList = function(){
	
	var that = this;
	
	/**
	 * 获取用户发布的动态列表
	 * 传入参数：
	 * 参数名称：mid；说明：栏目id( 默认：0 所有栏目 )
	 * 参数名称：page；说明：当前页码( 默认：1 )
	 * 参数名称：pagesize；说明：分页数量( 默认：10 )
	 */
	this.get_user_list = function( mid, page, pagesize, succesFun, errFun ){
		var ws = new WebService();
		ws.setURL( WebServiceURL );
		ws.setOpName( "get_user_dynamic_list" );
		ws.setParas({
			mid: mid,
			page: page,
			pagesize: pagesize
		});
		ws.setCallBack( callBack );
		ws.setErrorCallBack( errorCallBack );
		ws.LoadData();
		
		function callBack( data ){
			if ( data.code == '2000' || data.code == '4001') {
				succesFun(data.data);
				return;
			}
			errFun();
		}
		
		function errorCallBack(e){
			console.log( JSON.stringify(e) );
		}
	}
	/*
	 * 用户删除发布的动态
	 * 传入参数：
	 * 参数名称：id；说明：动态文章id
	 */
	this.delete_user_dynamic = function(id,succesFun,errFun){
		var ws = new WebService();
		ws.setURL(WebServiceURL);
		ws.setOpName("delete_user_dynamic");
		ws.setParas({
			id:id
		});
		ws.setCallBack(callBack)
		ws.setErrorCallBack(errorCallBack);
		ws.LoadData();
		function callBack( data ){
			if ( data.code == '2000' || data.code == '4001') {
				succesFun(data.data);
				return;
			}
			errFun();
		}
		
		function errorCallBack(e){
			console.log( JSON.stringify(e) );
		}
	}
	
}
