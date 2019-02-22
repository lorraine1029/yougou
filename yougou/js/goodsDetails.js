
$(function(){
    $(".sizeCode li").each(function(){
        $(this).click(function(){
            $(".sizeCode li").each(function(){
                $(this).attr("id"," ");
                $(this).css({"border":""});
            })
            $(this).attr("id","addEve");
            $("#addEve").css({"border":"1px solid black"})
            // res=$("#addEve").html();
            // console.log(res)
        })
    })
    add()




    //加入购物车
    $(".addToCar").mouseover(function(){
        $(this).css({"cursor":"pointer"});
    })
    $(".addToCar").click(function(){
        $.get("goodsAndShoppingCart/addShoppingCart.php",{
            "vipName":$("#headerFirLi span").html(),
            "goodsId":$(".goodsState span").html(),
            "goodsCount":$("#addNum").val()
        },function(data){
            if(data==1){
                alert("添加成功");
            }else if(data==0){
                alert("添加失败");
            }
        })
    })
})

function add(){
    let numEle=document.getElementById("addNum");
    numEle.onchange=function(){
        if(numEle.value<=1){
            numEle.value=1;
        }
    }

}


$(function(){
//放大镜效果

    $(".glass").mouseover(function(){
        $(".mask").css({"display":"block"})
        $(".show").css({"display":"block"})
    })
    $(".glass").mouseout(function(){
        $(".mask").css({"display":"none"})
        $(".show").css({"display":"none"})
    })
    $(".glass").mousemove(function(event){
        let eve=window.event||event;
        let left1=eve.pageX-$(".glass").offset().left-$(".mask").width()/2;
        let top1=eve.pageY-$(".glass").offset().top-$(".mask").height()/2;
        if(left1<=0){
            left1=0;
        }else if(left1>=255){
            left1=255;
        }
        if(top1<=0){
            top1=0;
        }else if(top1>=255){
            top1=255;
        }
        $(".mask").css({"left":left1})
        $(".mask").css({"top":top1})
        $(".show").css({"background-position-X":-1*left1,"background-position-Y":-1*top1})
    })
})