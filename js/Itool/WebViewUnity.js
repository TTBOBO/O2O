var Page = function(){
	var that = this;
	//获取全部webView
	this.getAll = function(){
		return plus.webview.all();
	},
	//关闭全部
	this.closeAll = function(){
		var all = that.getAll();
		for(var v in all){
			all[v].close();
		}
	},
	//关闭某个
	//关闭成功  返回    真  
	this.closeWebViewById = function(id){
		var all = that.getAll();
		for(var v in all){
			if(all[v].id == id){
				return true;
			}
		}
		return false;
	},
	//关闭全部  留下一个
	this.closeAllButSaveThis = function(id){
		var all = that.getAll();
		for(var v in all){
			if(all[v].id == id){
			}else{
				all[v].close();
			}
		}
	},
	//是否存在
	this.isSaved = function(id){
		var all = that.getAll();
		for(var v in all){
			if(all[v].id == id)
				return true;
		}
		return false;
	}
	
}


/***
 * 隐藏显示的页面，显示点击的页面
 * @param {Object} ws  父窗体
 * @param {Object} e   点击的元素
 */
function pageShow(ws,e,top,bom,op) {
	var p = plus.webview.getWebviewById(e.id);
	if(!p){
		ws.append(plus.webview.open(e.id,e.id,{top:top,bottom:bom}));
		return;
	}
	var all = ws.children();
	for(var i =0;i<all.length;i++){
		all[i].hide();
	}
	p.show();
}

function subPageShow(ws,op) {
	var p = plus.webview.getWebviewById(op.id);
	if(!p){
		ws.append(mui.openWindow(op));
		return;
	}
	var all = ws.children();
	for(var i =0;i<all.length;i++){
		all[i].hide();
	}
	p.show();
}




