// header部分
function header(){
    let lastLi=$(".header_right")[0].lastElementChild;
    let notice=$(".notice")[0];
    lastLi.onmouseover=function(){
        notice.style.display="block";
    }
    lastLi.onmouseout=function(){
        notice.style.display="none";
    }
}
header();

//导航悬停定位
function navHover(){
    let distance=parseInt($(".header").height())+parseInt($(".logo").height());
    $(document).scroll(function(){
        if($(document).scrollTop()>=distance){
            $(".logoFir").css({"position":"fixed",
                "left":0,"top":"0",
                "z-index":1,
                "border-bottom":"4px solid black"
            });
            $("#liLogo").css({"display":"block"})
        }else{
            $(".logoFir").css({"position":"relative",
                "left":0,"top":0,
                "z-index":1,
                "border-bottom":"none"
            });
            $("#liLogo").css({"display":"none"})
        }
    })
}
navHover()



$(function(){headerFirLi
    let res=getCookie("user");
    if(res!=null){
        $("#headerFirLi").html("欢迎您<span>"+res+"</span> <a href='#'>退出</a>");
        $("#headerFirLi").css({"color":"#fff","font-size":"12px"})
    }else{
        $("#headerFirLi").html('<a href="login.html">登录 </a>/<a href="register.html"> 注册</a>');
    }

})