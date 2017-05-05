//是否在改數組內
    var Arrp=Array.prototype;
 Arrp.isHas = function(s) {
	for (var i in this) {
		if (this[i] == s) {
			return true;
		}
	} 
	return false; 
}
 
Array.prototype.IsShouCang=function(e){
	for (var i in this) {
		if (this[i] == e) {
			return true;
		}
	} 
	return false; 
}
