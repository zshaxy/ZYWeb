/**
 * 一分快三
 */
if(window.plus) {
	plusReady();
} else {
	document.addEventListener("plusready", plusReady, false);
}

function plusReady() {
	mui('#topBar').on('tap', '#backHome', function(e) {
		openWV('../Index/index.html', 'index', 'right', {})
	})
}