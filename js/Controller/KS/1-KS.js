/**
 * 一分快三
 */

var runSaiZi = [
	'../../../images/saizi/run-1.png',
	'../../../images/saizi/run-2.png',
	'../../../images/saizi/run-3.png',
	'../../../images/saizi/run-4.png'
]

var preSaiZi = []

var currentSaiZi = []

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

function randomSaizi() {
	var saiziList = mui('#saizi img');
	setInterval(function() {
		var index = Math.floor(Math.random() * runSaiZi.length);
		for (var i = 0; i < saiziList.length; i++) {
			saiziList[i].src = runSaiZi[index]
		}
	}, 100)
}