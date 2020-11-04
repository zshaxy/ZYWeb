/*
 * 我的账户处理
 */

mui('#wrapper').on('tap', '#exit', function(e) {
    var btnArray = ['取消', '确认'];
    mui.confirm('您确定要退出当前账户吗？', '', btnArray, function(e) {
    	console.log(e.index)
        if (e.index == 1) {
        	openWV('../Login/login.html','login','bottom','')
        }
    })
});
mui('#wrapper').off('click','.view1 li');
window.addEventListener('accountDataInfo',function(event){
	getUserInfo()
})

window.addEventListener('reportDataInfo',function(event){
	getUserInfo()
})


mui('#userBar').on('tap', 'li a', function(e) {
	var tmp = this.getAttribute('href')
	openWV(tmp,tmp,'right','')
});


function getUserInfo(){
	plus.nativeUI.showWaiting()
	mui.ajax(uri+'user/getUserInfo',{
        dataType:'json',
        data: {'id':user_id,'token':token,'sign':sign},
        type:'post',
        success:function(data){
        	if(data.code == 202){
            	plus.runtime.restart()
            }
            plus.nativeUI.closeWaiting()
            if(data.code == 1){
            	console.log(JSON.stringify(data))
            	window.localStorage['balance'] = data.data.userInfo.balance;
            	document.getElementById("bouns").innerHTML = data.data.userInfo.balance
            	document.getElementById("username").innerHTML = username
            }else{
            	toast('请求失败')
            }
        }
    })       
}