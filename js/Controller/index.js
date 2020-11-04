/*
 * 首页处理
 */
mui.init();
var subpages = ['../Home/home.html', '../Record/record.html', '../User/user.html'];
var subpage_style = {
	top: '45px',
	bottom: '51px'
};
var aniShow = {};

if (window.plus) {
	plusReady();
} else {
	document.addEventListener("plusready", plusReady, false);
}

function plusReady() {
	getPage()
	plus.navigator.setStatusBarStyle("UIStatusBarStyleDefault");
	plus.navigator.setStatusBarBackground("#fff");
	if (plus.webview.getWebviewById('login')) {
		plus.webview.getWebviewById('login').close()
	}
}
/**获取主页面**/
function getPage() {
	var Index = 0;
	var activeTab = subpages[Index];
	title = document.querySelector(".mui-title");
	
	setTimeout(plus.webview.currentWebview().append(plus.webview.create(
		subpages[0],
		subpages[0], {
			top: '45px',
			bottom: '50px'
		}
	)), 1000);
	
	
	setTimeout(function() {
		var self = plus.webview.currentWebview();
		for (var i = 0; i < 3; i++) {
			var temp = {};
			var sub = plus.webview.create(subpages[i], subpages[i], subpage_style);
			if (i > 0) {
				sub.hide();
			} else {
				temp[subpages[i]] = "true";
				mui.extend(aniShow, temp);
			}
		}
	}, 2000);
	
	mui('.mui-bar-tab').on('tap', 'a', function(e) {
			var targetTab = this.getAttribute('href');
			if(targetTab == activeTab) {
				return;
			}
			title.innerHTML = this.getAttribute('title');
			plus.webview.show(targetTab);
			plus.webview.hide(activeTab);
			activeTab = targetTab;
			if(targetTab == '../Record/record.html'){
				var page = plus.webview.getWebviewById(targetTab)
			    mui.fire(page, 'refreshRecord', {
			    })
			}
			if(targetTab == '../User/user.html'){
				var page = plus.webview.getWebviewById(targetTab)
			    mui.fire(page, 'accountDataInfo', {
			    })
			}
		});
}
