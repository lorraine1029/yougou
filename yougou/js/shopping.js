$(function(){
    $(".back").hover(function(){
        $(this).css({"cursor":"pointer"})
    })
    $(".back").click(function(){
        location.href="index.html";
    })
    $(".goOn").mouseover(function(){
        $(this).css({"cursor":"pointer"})
    })
    $(".goOn").click(function(){
        location.href="goodsList.html";
    })



})
//全选

$(function(){
    let val=$("#headerFirLi span").html();
    if(val.length>=10){
        val=val.substring(0,10);
    }
    $.get("goodsAndShoppingCart/getShoppingCart.php",{"vipName":val},function(data){
        let arr = JSON.parse(data);
        if(arr!=null){
            $(".car").css({"display":"none"});
            for(let i=0;i<arr.length;i++){
                var html='<tr>' +
                    '<td class="tds"><input type="checkbox"><img class="goodsPic" src="goods/'+arr[i].goodsImg+'"></img></td>' +
                    '                <td class="goodsExplain"><p >'+arr[i].beiyong1+arr[i].goodsDesc+arr[i].goodsId+'</p>' +
                    '                </td><td>' +
                    '                    <p class="color">颜色：'+arr[i].beiyong3+'</p><p class="size">尺码：'+arr[i].beiyong2+'</p>' +
                    '                </td><td><p class="price">'+arr[i].goodsPrice+'</p>' +
                    '                </td><td class="addNum">' +
                    '                    <div class="shumu"><p class="jians">-</p>' +
                    '                        <p class="sum">'+arr[i].goodsCount+'</p><p class="jia">+</p>' +
                    '                    </div>' +
                    '                </td>' +
                    '                <td><p class="subtota">'+arr[i].goodsPrice+'</p></td>' +
                    '                <td><p class="fav">移入收藏夹</p><p class="deletes">删除</p>' +
                    '                </td>' +
                    '            </tr>';

                $("#trTh").before(html);
            }
            // 全选按钮的jQuery对象.函数名(所有被控制的复选框jQuery对象，反选的按钮对象)
            $("#chkAll").bindCheckAll($(":checkbox").not("#chkAll"),$("#unchk"));
        }

            money()
            $(".jians").each(function(){
                $(this).mouseover(function(){
                    $(this).css({"cursor":"pointer"});
                })
                $(this).click(function(){
                    let totalNum=parseInt($(this).next(".sum").html())-1;
                    if(totalNum<=1){
                        totalNum=1;
                    }
                    $(this).next(".sum").html(totalNum);
                })
            })
        $(".jia").each(function(){
            $(this).mouseover(function(){
                $(this).css({"cursor":"pointer"});
            })
            $(this).click(function(){
                let total=parseInt($(this).prev(".sum").html())+1;
                $(this).prev(".sum").html(total);

            })
        })

        $(".shumu").each(function(i){
            $(this).click(function(){
                let shuliang = $(".sum").eq(i).html();
                let jiage = $(".price").eq(i).html();
                let zong  = parseInt(shuliang) * parseInt(jiage);
                $(".subtota").eq(i).html(zong);
                money()
            })
        })
    })
})

function money(){
    var moneyTotal=0;
    $(".subtota").each(function(){
        moneyTotal+=parseInt($(this).html());
    })
    $(".money").html(moneyTotal);
}





