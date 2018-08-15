<?php
	// 得到数据
	$usr = @$_REQUEST["usr"];
	$pwd = @$_REQUEST["pwd"];
	
	// 判断有没有密码 或 用户名
	if(!$usr || !$pwd){
		die("用户名或密码不能为空");
	}
	
	//操作数据  放进数据库
	// 密码加密
	$pwd = md5($pwd) ;
	$host = "localhost";
	$username = "root" ;
	$password = "985289" ;
	$database = "project" ;
	
	// 创建数据库
	$conn = new mysqli($host,$username,$password,$database);
	if($conn->connect_error){
		die(connect_error);
	}
?>