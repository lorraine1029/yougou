
//nav部分
//导航悬停效果
function sliderDown(){
    let $num=$(".sliderDownDd"),maxNum=6;
    // console.log($dd)
    $.each($num,function(){
        $dd=$(this).find("dd")
        if($dd.length>=maxNum){
            $dd.css({'display':'inline-block','width':'60px'})
            $(this).css({'width':'130px'})
        }
    })
}

function navSlider(){
    $("#firstLi").nextAll().each(function(){
        sliderDown()
        $(this).mouseover(function(){
                $(".contineDown").slideDown("slow");
            },
            function(){
                $(".contineDown").slideUp("slow");
            })

    })
}navSlider()


//轮播图
$(function(){
    let s1 = new Slider({
        $box:$("#sliderBox"),
        width:document.body.clientWidth,
        height:550,
        imgs:["img/first.jpg","img/sec.jpg","img/three.jpg","img/forth.jpg"],
        btnColor:"#45400f",
        btnHighColor:'#7d7957',
        btnHeight:30,
        btnWidth:8,
        isCircle:false,
        timeSpace:3000
    });
})




//今日主推大牌
function sliderImg(){
    let arr=["blackL-staccato.png","blackL-bata.png","blackL-belle.png","blackL-hushpuppies.png","blackL-millies.png",
    "blackL-crocs.png","blackL-millies.png","blackL-joypeace.png","blackL-teenmix.png",
    "blackL-tata.png","blackL-puma.png"];
    for(let i=0;i<arr.length;i++){
        let str="<a href='#'>"+"<img src="+'img/'+arr[i]+"></a>"
        $(".slidImg")[0].innerHTML +=str ;
    }
}
sliderImg()

//点击滑动部分

function sliderAround(arrowsLeft,arrowsRight,divWidth,bigDiv,smallDiv,n){
    //向左按钮点击事件
    var index = 0;
    arrowsRight.click(function(){
        index++;
        var num=bigDiv.width()/(n*smallDiv.width())
        if(index >= num){
            bigDiv.stop();
            alert("我是有底限的，在没了！");
        }else{
            if(index == 0){
                bigDiv.animate({left:-index*divWidth},700);
            }else{
                bigDiv.animate({left:-index*divWidth},700);
            }
        }
    });
    //向右按钮点击事件
    arrowsLeft.click(function(){
        if(index <= 0){
            bigDiv.stop();
            alert("我上面再没大哥了，别点了！");
        }else{
            index--;
            if(index == 0){
                bigDiv.animate({left:0},700);
            }else{
                bigDiv.animate({left:-(index)*916},700);
            }
        }
    });8}


$(document).ready(
    //新品推荐部分
    sliderAround($(".jiantouLeft"),$(".jiantouRight"),916,$("#bgDiv"),$(".picContent:first"),4)
    );
//今日主推部分
$(document).ready(
    sliderAround($(".arrowIconLeft"),$(".arrowIconRight"),905,$("#slidImg"),$("#slidImg a:first"),10)
);

$("#firstLi").nextAll().each(function(){
    $(this).click(function(){
        location.href="goodsList.html";
    })
})

