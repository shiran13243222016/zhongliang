//根据给定的id查找页面元素
function $id(id){
	return document.getElementById(id);
	
}
//获取任意区间值
function rand(min,max){
    return  Math.round( Math.random()*(max-min) + min )
}

//定义一个函数 功能获取一个随机的颜色值
function getColor(){
	var str = "0123456789abcdef";// 0--15
	//从str中随机获取六位 拼成一个颜色
	var color = "#";
	for( var i = 0 ; i < 6 ; i++ ){
		//德大str中 0--15随机下标
		var index = rand(0,15);
		color += str.charAt(index);
	}
	return color;
}

//函数功能 ：显示自定义的日期时间格式
function dateToString(now){
	var str1 = now.getFullYear()+"-"+(now.getMonth()+1)+"-"+now.getDate();
	var h = toTwo( now.getHours() );
	var m = toTwo( now.getMinutes() );
	var s = toTwo( now.getSeconds() );
	
	var str2 =h +":"+m+":"+s;
	
	return str1 + " " + str2;
}
//函数功能 ：  判断传递的参数是否小于10  如果小于10 就在数字前面拼接 0
function toTwo(num){
	//返回一个两位数
	return num<10 ? "0"+num : num;
}

//函数功能 ： 将字符串转成日期时间格式
function stringToDate(str){
	return new Date(str);
}
//时间差 函数
function diff(start,end){
	//返回时间差 单位 秒
	return Math.abs(start.getTime()-end.getTime()) /1000;
}

//创建一个元素
function create(ele){
	return document.createElement(ele);
}
//
	function pz(d1,d2){
		var L1 = d1.offsetLeft;
		var R1 = d1.offsetWidth + d1.offsetLeft;
		var T1 = d1.offsetTop;
		var B1 = d1.offsetHeight + d1.offsetTop;
		
		var L2 = d2.offsetLeft;
		var R2 = d2.offsetWidth + d2.offsetLeft;
		var T2 = d2.offsetTop;
		var B2 = d2.offsetHeight + d2.offsetTop;
		
		//碰不上的条件
		if( R1<L2||L1>R2||B1<T2||T1>B2 ){
			return false;
		}else{
			return true;
		}
	}