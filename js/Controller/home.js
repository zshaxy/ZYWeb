/*
 * 彩票大厅
 */
if(window.plus) {
	plusReady();
} else {
	document.addEventListener("plusready", plusReady, false);
}

function plusReady() {
	selectGame();
}

function selectGame() {
	mui('.mui-content').on('tap', 'a', function(e) {
		var gameUrl = this.getAttribute('href');
		var id = this.getAttribute('id');
		openWV(gameUrl, id, 'right', {})
		
	})
}
