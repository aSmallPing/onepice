


var hiddenProperty = 'hidden' in document ? 'hidden' :
	'webkitHidden' in document ? 'webkitHidden' :
	'mozHidden' in document ? 'mozHidden' :
	null;
var visibilityChangeEvent = hiddenProperty.replace(/hidden/i, 'visibilitychange');
var onVisibilityChange = function() {
	if (!document[hiddenProperty]) {
		document.title = "(๑•́ ω•̀๑)被你抓到了";
		setTimeout(function(){document.title = "Ping's blog";},2000);
	} else {
		document.title = "(≧ω≦)我藏起来了";
	}
}
document.addEventListener(visibilityChangeEvent, onVisibilityChange);

/*
$('#totop').click(function(){
	console.log("totop");
});
$('#switch').click(function(){
	console.log("switch");
});*/