(function($){
	var old_back = $.back;
	var backButtonPress = 0;
	$.back = function(event) {
		backButtonPress++;
		if (backButtonPress > 1) {
			//退出
			//plus.runtime.quit();
			//后台
			var main = plus.android.runtimeMainActivity();
    		main.moveTaskToBack(false);
		} else {
			plus.nativeUI.toast('再按一次返回桌面');
		}
		setTimeout(function() {
			backButtonPress = 0;
		}, 2000);
		return false;
	};
}(mui));
