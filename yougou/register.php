<?php

    header("Content-type:text/html;charset:utf-8");
        $username=$_POST['username'];
        $userpass=$_POST['userpass'];

        $conn=mysql_connect("localhost","root","root");
        if(!$conn){
             die("连接失败".mysql_error());
        }
            mysql_select_db("yougou",$conn);
            $find="select * from login where username='$username'";
            $res=mysql_query($find,$conn);
            if(mysql_num_rows($res)==0){
                echo "0";
                $str="insert into login values('{$username}','{$userpass}')";
                mysql_query($str,$conn);
            }else{
                echo "1";
            }
            mysql_close($conn);

?>