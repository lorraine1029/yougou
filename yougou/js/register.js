$(function(){
    register()
    $("#logIn").click(function(){
        $(".temp").each(function(i){
            if($(this).val()==false){
                switch(i){
                    case 0:$("#phoneTips").html("请输入手机号");
                    break;
                    case 1:$("#codeTips").html("请输入验证码");
                    break;
                    case 2:$("#passTips").html("请输入密码");
                    break;
                    case 3:$("#conformPass").html("请输入确认密码");
                }
            }
        })
        if($('#checkBox').attr('checked')==undefined){
            $("#read").html("请先阅读条款");
            return;
        }
    })
    $("#gainCode,#logIn").each(function(){
        $(this).css({"cursor":"pointer"})
    })
})

function register(){
    let val=randomCode()
    $("#random").html(val);

    $("#secUser").change(function(){
        let h=$("#secUser option:selected").text();
        if(h=="手机号"){
            $("#inport").attr("placeholder","请输入手机号")
        }else if(h=="邮箱"){
            $("#inport").attr("placeholder","不建议填写gmail、hotmial、qq邮箱")
        }
        let ranVal=randomCode()
        $("#random").html(ranVal);
    })
    $("#random").click(function(){
        let numVal=randomCode()
        $("#random").html(numVal);
    })


    //正则验证
    $("#inport").blur(function(){
        if($("#inport").val()==""){
            $("#phoneTips").html("请输入手机号");
        }
        let reg = /^1[3-9]\d{9}$/i;
        if(reg.test($("#inport").val())){
            $("#sym").html("√");
        }else{
            $("#sym").html("×");
        }

    })
    $("#Code").blur(function(){
        if($("#Code").val()==""){
            $("#codeTips").html("请输入验证码");
        }

    })
    $("#inforCode").blur(function(){
        if($("#inforCode").val()==""){
            $("#inforTips").html("请输入短信验证码");
        }
    })
    $("#regPass").blur(function(){
        if($("#regPass").val()==""){
            $("#passTips").html("请输入密码");
        }
        let reg=/(?=.*[a-z])(?=.*\d)(?=.*[#@!~%^&*])[a-z\d#@!~%^&*]{6,25}/i;
        if(reg.test($("#regPass").val())){
            $("#passReg").html("√");
        }else{
            $("#passReg").html("×");
        }
    })

    $("#conPass").blur(function(){
        if($("#conPass").val()==""){
            $("#conformPass").html("请输入确认密码");
        }
        let res=$("#regPass").val();
        if($("#conPass").val()!=$("#regPass").val()){
            $("#conformPass").html("两次密码输入不一致");
        }else if($("#conPass").val().length<6 || $("#conPass").val().length>25){
            $("#conformPass").html("密码应在6-25位之间");
        }
    })



}

function randomCode(){
    let str="123456890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM";
    let result='';
    for(let i=0;i<4;i++){
        let num=parseInt(Math.random()*(str.length-1))
        result+=str[num];
    }
    return result;
}



$("#logIn").click(function(){
    if($("#inport").val()=="" || $("#regPass").val()==""){
        alert("内容不能为空");
        return;
    }
    let xhr=new XMLHttpRequest();
    xhr.open("post","register.php",true);
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4 && xhr.status==200){
            console.log("结果"+xhr.responseText)
            if(xhr.responseText==0){
                alert("注册成功")
                setTimeout(function(){
                    window.location.href="login.html";
                },1000)
            }else{
                alert("账号被使用");
            }
        }
    }
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    let val="username="+$("#inport").val()+"&userpass="+$("#regPass").val();
    console.log(val)
    xhr.send(val);
})

