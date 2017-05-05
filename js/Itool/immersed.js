(function(w){

document.addEventListener('plusready',function(){
	console.log("Immersed-UserAgent: "+navigator.userAgent);
},false);


var immersed = 0;
var ms=(/Html5Plus\/.+\s\(.*(Immersed\/(\d+\.?\d*).*)\)/gi).exec(navigator.userAgent);
if(ms&&ms.length>=3){   /*当前环境是沉浸栏模式*/
	immersed=parseFloat(ms[2]);//获取状态栏的高度
//	mui.toast(immersed);
}
w.immersed=immersed;

if(!immersed){
	return;
}
var t=document.getElementById('header');
t&&(t.style.height=t.offsetHeight+immersed+'px',t.style.paddingTop=immersed+'px',t.style.background='-webkit-linear-gradient(top,rgba(215,75,40,1),rgba(215,75,40,1))',t.style.color='#FFF');
t=document.querySelector('.mui-contents');
t&&(t.style.marginTop=immersed+'px');

t=document.querySelector('.mui-page');
t&&(t.style.marginTop=immersed+'px');

t=document.getElementById('map');
t&&(t.style.marginTop=immersed+'px');

})(window);