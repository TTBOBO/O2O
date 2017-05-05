
(function($) {
	if(!$.os.ios){return;}
	
	var UIApplication;
	var sharedApplication;
	$.plusReady(function() {
		//创建状态栏显示网络请求雪花
		UIApplication = plus.ios.import("UIApplication");
		//sharedApplication = UIApplication.sharedApplication();
		//sharedApplication.setNetworkActivityIndicatorVisible(true);
		//plus.ios.deleteObject(sharedApplication);
	});
	
	
	$.iosItool = {
		/**
		 * 显示网络请求雪花
		*/
		showNetWork : function(){
			sharedApplication = UIApplication.sharedApplication();
			sharedApplication.setNetworkActivityIndicatorVisible(true);
			plus.ios.deleteObject(sharedApplication);
		},
		/**
		 *  关闭显示雪花
		 */
		closeNetWork:function(){
			sharedApplication = UIApplication.sharedApplication();
			sharedApplication.setNetworkActivityIndicatorVisible(false);
			plus.ios.deleteObject(sharedApplication);
		},
		/**
		 * 调用提示音
		 * @param {Number} t 时间   单位 (毫秒)
		 */
		playSystemSound:function(t){
			t = t||1000;//默认一秒
			plus.ios.invoke(null,"AudioServicesPlaySystemSound", t);
		},
		/**
		 * 获取设备名称
		 * @return {String} name 设备名称
		 */
		getDeviceName:function(){
			var UIDevice = plus.ios.importClass("UIDevice");
			var currentDevice = UIDevice.currentDevice();
			var name = currentDevice.name();
			plus.ios.deleteObject(currentDevice);
			return name;
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
				var UIPasteboard  = plus.ios.importClass("UIPasteboard");
				var generalPasteboard = UIPasteboard.generalPasteboard();
				generalPasteboard.setValueforPasteboardType(str, "public.utf8-plain-text");
				plus.ios.deleteObject(generalPasteboard);	
				mui.toast("已复制到剪贴板");
			},
			/**
			 * 获取 剪贴板 文本内容
			 * @return {String} value 获取的文本内容
			 */
			v:function(){
				var UIPasteboard  = plus.ios.importClass("UIPasteboard");
				var generalPasteboard = UIPasteboard.generalPasteboard();
				var value = generalPasteboard.valueForPasteboardType("public.utf8-plain-text"); 
				plus.ios.deleteObject(generalPasteboard);	
				return value;
			}
		},
		/**
		 * 打开app系统设置界面
		 */
		openSettings:function(){
			var NSURL = plus.ios.import("NSURL");
			var setting = NSURL.URLWithString("app-settings:");
			var application = UIApplication.sharedApplication();
			application.openURL(setting);
			plus.ios.deleteObject(setting);
			plus.ios.deleteObject(application);
		}
	}
	
}(mui));

