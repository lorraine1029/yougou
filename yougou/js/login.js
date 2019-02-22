$(function(){
    //选择登陆方式
    $(".loginFir p:nth-child(1)").click(function(){
        $(".phone").css({"display":"none"});
        $(".accountNum").css({"display":"block"});
        $(this).css({"background":"#333333","color":"white"});
        $(".loginFir p:nth-child(2)").css({"background":"#f3f3f3","color":"#333333"})
    })

    $(".loginFir p:nth-child(2)").click(function(){
        $(".accountNum").css({"display":"none"});
        $(".phone").css({"display":"block"});
        $(this).css({"background":"#333333","color":"white"});
        $(".loginFir p:nth-child(1)").css({"background":"#f3f3f3","color":"#333333"})
    })

    //正则验证
    $("#username").blur(function(){
        if($("#username").val()==""){
            $("#userSpan").html("请输入账号");
        }
    })

    $("#userpass").blur(function(){
        if($("#userpass").val()==""){
            $("#passSpan").html("请输入密码");
        }
    })

    //手机号登陆
    $("#phoneNum").blur(function(){
        if($("#phoneNum").val()==""){
            $("#userPhone").html("请输入手机号");
        }
    })
    $("#SmsCode").blur(function(){
        if($("#SmsCode").val()==""){
            $("#SMS").html("请输入短信验证码");
        }
    })

    $("#username").focus(function(){
        $("#userSpan").html("");
    })
    $("#userpass").focus(function(){
        $("#passSpan").html("");
    })
    $("#phoneNum").focus(function(){
        $("#userPhone").html("");
    })
    $("#SmsCode").focus(function(){
        $("#SMS").html("");
    })

    $(".loginFir p,#logIn").hover().each(function(){
        $(this).css({"cursor":"pointer"});
    })
})


