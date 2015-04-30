window.onscroll = function () {
	var navbarEle = document.getElementById("navbar");
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
};