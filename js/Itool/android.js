
(function($) {
	if(!$.os.android){return;}	
	
	
	$.androidItool = {
		//直接打电话
		call:function(number){
			 // 导入Activity、Intent类
		    var Intent = plus.android.importClass("android.content.Intent");
		    var Uri = plus.android.importClass("android.net.Uri");
		    // 获取主Activity对象的实例
		    var main = plus.android.runtimeMainActivity();
		    // 创建Intent
		    var uri = Uri.parse("tel:"+number); // 这里可修改电话号码
		    var _call = new Intent("android.intent.action.CALL",uri);
		    // 调用startActivity方法拨打电话
		    main.startActivity( _call );
		},
		//获取设备id
		getUuid:function(){
			var mainActivity = plus.android.runtimeMainActivity();
		    var Settings= plus.android.importClass("android.provider.Settings");
		    return Settings.Secure.getString(mainActivity.getContentResolver(),Settings.Secure.ANDROID_ID);
		},
		//app转至后台运行
		pause:function(){
			var main = plus.android.runtimeMainActivity();
    		main.moveTaskToBack(false);
		},
		/**
		 * 操作剪贴板
		 */
		ctrl:{
			/**
			 * 拷贝 至 剪贴板
			 * @param {String} str 要拷贝的字符串
			 */
			c:function(str){
				var Context = plus.android.importClass("android.content.Context");
			    var main = plus.android.runtimeMainActivity();
			    var clip = main.getSystemService(Context.CLIPBOARD_SERVICE);
			    plus.android.invoke(clip,"app_content",str);//app_content key
				mui.toast("已复制到剪贴板");
			},
			/**
			 * 获取 剪贴板 文本内容
			 * @return {String} value 获取的文本内容
			 */
			v:function(){
				var Context = plus.android.importClass("android.content.Context");
		        var main = plus.android.runtimeMainActivity();
		        var clip = main.getSystemService(Context.CLIPBOARD_SERVICE);
		        return plus.android.invoke(clip,"app_content");
			}
		}
		
		
	};
	
	
	
}(mui));