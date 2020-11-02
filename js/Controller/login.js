/*
 * 登录页面处理
 */

//var new_uri;
if(window.plus) {
	plusReady();
} else {
	document.addEventListener("plusready", plusReady, false);
}
function plusReady() {
	plus.navigator.setStatusBarStyle("UIStatusBarStyleDefault");
	plus.navigator.setStatusBarBackground("#f7f7f7");
	toast('您还没有登录，请先登录')
	if(plus.webview.getWebviewById('index')){
	   plus.webview.getWebviewById('index').close()	
	}
	
	if(username){
		document.getElementById("username").value = username
	}
	
	if(window.localStorage['password']){
		document.getElementById("password").value = window.localStorage['password']
	}
}

mui('#login').on('tap', '#login-btn', function(e) {
	var username = document.getElementById("username").value
	var password = document.getElementById("password").value
	if(username=='' || password==''){
		toast('账号名称和密码不能为空，请重试')
	}else{
		console.log(username)
		console.log(password)
		console.log(sign)
		/*
		 *等待 
		  */
	    mui.ajax(uri+'user/login',{
            dataType:'json',
            data: {'username':username,'password':password,'sign':sign},
            type:'post',
            success:function(data){
            	console.log(JSON.stringify(data))
                switch (data.code){
                	case 0 :
                	  toast('用户名或者密码为空 ')
                	  break;
                	case 2 :
                	  toast('用户名不存在')
                	  break;
                	case 3 :
                	  toast('系统已锁定改账号')
                	  break;
                	case 4 :
                	  toast('密码错误次数超过了最大的重试次数')
                	  break;
                	case 5 :
                	  toast('ip被限制登录')
                	  break;
                	case 6 :
                	  toast('密码错误')
                	  break;
                	case 101 : case 201 :
                	  toast('权限错误')
                	  break;
                	default :
                	  window.localStorage['token'] = data.data.userInfo.token
                      window.localStorage['username'] = data.data.userInfo.username
                      window.localStorage['password'] = data.data.userInfo.password
                      window.localStorage['user_id'] = data.data.userInfo.id
                  	  openWV('../Index/index.html','index','right',JSON.stringify(data.data.userInfo))
                	  break;
                }
            }
        });
   }
});

