var page = function() {
	var that = this;
	this.openWebViews = function(path, id, extras) {
		mui.openWindow({
			url: path + id + ".html",
			id: id,
			show: {
				aniShow: "pop-in",
				duration: 300
			},
			waiting: {
				autoShow: false
			},
			extras: extras
		})
	}
}
//返回顶部
function gotop() {
	window.onscroll = function() {
		var t = document.documentElement.scrollTop || document.body.scrollTop;
		var goTop = document.querySelector(".goTop");
		if(t > 500) {
			goTop.style.opacity = 1;
			goTop.setAttribute("class","goTop scale");
		} else {
			goTop.style.opacity = 0;
			goTop.setAttribute("class","goTop scale1")
		}
	}
	$('.goTop').click(function() {
		$('body,html').animate({
			scrollTop: 0
		}, 1000)
	})
}

function openWebViews(path, id, styles, show, extras) {
	if(show == 1) {
		show.aniShow = "pop-in"
	} else if(show == 2) {
		show.aniShow = "slide-in-bottom"
	} else if(show == 3) {
		show.aniShow = "zoom-fade-out"
	} else if(show == 4) {
		show.aniShow = "fade-out"
	}
	mui.openWindow({
		url: path + id + ".html",
		id: id,
		show: {
			aniShow: show.aniShow,
			duration: 200
		},
		styles: styles,
		waiting: {
			autoShow: false
		},
		extras: extras
	})
}