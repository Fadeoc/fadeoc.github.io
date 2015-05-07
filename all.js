addLoadEvent(toTopSpan);

window.onscroll = function () {
	var navbarEle = document.getElementById("navbar");
	var toTopEle = document.getElementById("toTop");
	var navbarOffset = navbarEle.offsetTop;
	var parentOffset = navbarEle.offsetParent;
	if (parentOffset !== null) {
		navbarOffset += parentOffset.offsetTop;
		parentOffset = parentOffset.offsetParent;
	}
	var navbarScroll = (document.documentElement.scrollTop) ? document.documentElement.scrollTop : document.body.scrollTop;
	if (navbarScroll - navbarOffset > 30) {
		navbarEle.className = "fixed";
	} else {
		navbarEle.className = "";
	}
	if(navbarScroll > 1000){
		toTopEle.style.visibility = "visible";
		toTopEle.style.pointerEvents = "auto";
	}else{
		toTopEle.style.visibility = "hidden";
		toTopEle.style.pointerEvents = "none";
	}
};

function toTopSpan(){
	var toTopF = document.getElementById("toTop");
	toTopF.onclick = function(){
		window.scrollTo(0,0);
	};
}

function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != "function") {
		window.onload = func;
	}
	else {
		window.onload = function () {
			oldonload();
			func();
		};
	}
}