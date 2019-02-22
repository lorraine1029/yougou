function navHover(){
    let distance=parseInt($(".header").height())+parseInt($(".logo").height())+parseInt($(".bigBox").offset().top);

    let top1=$("#logoBox").height()+20;
    $(document).scroll(function(){
        if($(document).scrollTop()>=distance){
            $(".screen").css({"position":"fixed",
                "left":20,"top":top1,
                // "z-index":1
            });

        }else{
            $(".screen").css({"position":"absolute",
                "left":20,"top":95,
                // "z-index":1
            });
        }
    })
}
navHover()


//
function over(){
    let lis=document.getElementsByClassName("productUl")[0].children;
    for(let i=0;i<lis.length;i++){
        lis[i].onmouseover=function(){
            this.children[0].style.cssText="border-bottom:1px solid #333;font-weight:bolder;";
        }
        lis[i].onmouseout=function(){
            this.children[0].style.cssText="";
        }
    }
}
over()

function clickOn(){
    $(".clickP").click(function(){
        if($(this).next().css("display")!="none"){
            $(this).next().slideUp(1000);
        }else{
            $(this).next().slideDown(1000);
        }
    })
}
clickOn()

    $.get("goodsAndShoppingCart/getGoodsList.php",function(data) {
        let arr = JSON.parse(data);
        for (let i = 0; i < arr.length; i++) {
            $(".details").append('<div class="picContent">' +
                '<img class="goodImg" src="goods/' + arr[i].goodsImg + '" alt="">' +
                '<p></p>' +
                '<p>' + arr[i].beiyong1 + arr[i].goodsDesc + arr[i].goodsId + '</p>' +
                '<p><em> ￥' + arr[i].goodsPrice + '</em> <del> ￥'+arr[i].beiyong6+'</del></p>' +
                '<span><i class="iconfont icon-xin"></i></span>' +
                '</div>');
        }
        hbs()
    })


function hbs(){
    let sh=$(".picContent").length;
    $(".picContent").each(function(){
        $(this).click(function(){
            location.href="goodsDetails.html";
        })
    })
}

