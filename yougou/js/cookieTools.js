//功能：保存cookie
//参数：
//key：键
//value：值
//dayCount：有效期（单位是天）
//返回值：无
function saveCookie(key,value,dayCount){
	var d = new Date();
	d.setDate(d.getDate()+dayCount);
	document.cookie = encodeURIComponent(key+"="+value)+";expires="+d.toGMTString();	
}


//功能：读取cookie（根据键读取对应的值）
//参数：
//key：键
//返回值：值，""：表示没有找到对应的cookie；

//cssfile=red; aauserName=ttt; userName=jzm
function getCookie(key){
    var str=unescape(document.cookie);
    //1、字符串分割成数组
    var arr = str.split("; ");

    //2、遍历数组，查找键
    for(var i in arr){
        if(arr[i].indexOf(key+"=")==0){
            return arr[i].substring((key+"=").length);
        }
    }

    return null;
}

//功能：删除cookie(根据键删除cookie)
//参数：
//key：键；
function removeCookie(key){
	saveCookie(key,"",-1);
}


