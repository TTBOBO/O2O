/**
  * 时间戳转化
  */
Date.prototype.toFormatString = function(formatString) {
	var yyyy = this.getFullYear();
	var MM = this.getMonth() + 1;
	MM = MM > 9 ? "" + MM : "0" + MM;
	var dd = this.getDate();
	dd = dd > 9 ? "" + dd : "0" + dd;
	var hh = this.getHours();
	hh = hh > 9 ? "" + hh : "0" + hh;
	var mm = this.getMinutes();
	mm = mm > 9 ? "" + mm : "0" + mm;
	var ss = this.getSeconds();
	ss = ss > 9 ? "" + ss : "0" + ss;
	var result = formatString.replace("yyyy", yyyy);
	result = result.replace("MM", MM);
	result = result.replace("dd", dd);
	result = result.replace("hh", hh);
	result = result.replace("mm", mm);
	result = result.replace("ss", ss);
	return result;

}

/**
 * 显示问题发布时间和回答时间与系统时间的差数
 */
function TimeDifference(lasttime){
	//获取现在的时间
	var datenow= new Date();
//	Array timeday = new Array("31","29","31","30","31","30","31","31","30","31","30","31");
//	if(datenow.getYear()%4==0||datenow.getYear()%400==0){
//		timeday[1] = 29;
//	}
//	else{
//		timeday[1] = 28;
//		console.log(timeday);
//	}
	//获取发布问题或回答问题的时间
	var dateline = lasttime;	
	
	//获取两个时间的月份，天数，小时，分钟，秒
	var datelineMonth = dateline.getMonth();
	var datelineDay = dateline.getDate();
	var datelineHours = dateline.getHours();
	var datelineMinutes = dateline.getMinutes();
	var datelineSeconds = dateline.getSeconds();
	//现在时间
	var datenowMonth = datenow.getMonth();
	var datenowDay = datenow.getDate();
	var datenowHours = datenow.getHours();
	var datenowMinutes = datenow.getMinutes();
	var datenowSeconds = datenow.getSeconds(); 
	//判断时间差
	var result = "";			 	 
	if(datenowMonth-datelineMonth>=1){
		result = lasttime.toFormatString("yyyy-MM-dd");
	}
	else if(datenowDay-datelineDay>=1){
		result = (datenowDay-datelineDay)+"天前";
	}
	else if(datenowHours-datelineHours>=1){
		result = (datenowHours-datelineHours)+"小时前";
	}
	else if(datenowMinutes-datelineMinutes>=1){
		result = (datenowMinutes-datelineMinutes)+"分钟前";
	}
	else if(datenowSeconds-datelineSeconds>=1){
		result = (datenowSeconds-datelineSeconds)+"秒前";
	}
	else{
		result = "1秒前";
	}
	return result;
}

/**
 * 检查是否是手机号码或者邮箱
 */
String.prototype.checkUser = function() {
	var re_tel = /^1\d{10}$/;
	//var re_email = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	
	if (re_tel.test(this)) {
		return true;
	}
//	if(re_email.test(this)){
//		return "email";
//	}
	return false;
}
/**
 * 检查密码是否合理 
 * 长度6-20位
	只能有数字、字母
 */
String.prototype.checkPwd = function(){
	//var r=/^(?=.{6,20}$)(?![0-9]+$)(?!.*(.).*\1)[0-9a-zA-Z@_]+$/;
	var r = /^[a-zA-Z0-9]\w{5,17}$/;
	if(r.test(this)){
		return true;
	}
	return false;
}






/**
 * 检查昵称   3-20字符 可中文
 * 禁止特殊符号
 */
String.prototype.checkNickName = function(){
	var r = /^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z0-9]){3,20}$/;
	if(r.test(this)){
		return true;
	}
	return false;
}
