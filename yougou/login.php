<?php

    header("Content-type:text/html;charset:utf-8");
            $username=$_POST['username'];
            $userpass=$_POST['userpass'];

            $link=mysql_connect("localhost","root","root");
               if(!$link){
                   die("连接失败".mysql_error());
               }else{
                   mysql_select_db("yougou",$link);
                   $str="select * from login where username='$username' and userpass='$userpass'";

                   $num=mysql_query($str,$link);
                   mysql_close($link);
                   $res=mysql_num_rows($num);
                   if($res==0){
                       echo "0";
                   }else{
                       echo "1";
                   }
               }
?>