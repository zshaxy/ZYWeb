/*
 * 入口处理
 */
if(window.plus) {
	plusReady();
} else {
	document.addEventListener("plusready", plusReady, false);
}

function plusReady(){
	//openWV('View/Login/login.html','login','bottom','')
	// 获取本地应用资源版本号
	openWV('View/Index/index.html','index','bottom','')
}