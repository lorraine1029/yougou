$(document).ready(function(){commodity_mark()});function commodity_addYgPrice(a){$.ajax({type:"POST",url:"/commodity/getPrices.sc",dataType:"json",data:"cNos="+a,success:function(f){var c=0;for(var b=0;b<f.length;b++){c=f[b];var e=c.active?c.active:c.sellPrice;$(".price_no"+c.no+" i").html(e).parent().siblings(".ico_discount").find("i").html(c.discount);var g=c.discount;g=g==10?10+" ":g;$(".discount_no"+c.no).html(g)}}})}function commodity_mark(h){var e=[];var g=false;var i=false;var b=false,d=false,f=false,c=false;if(h){strProductNos=h.split(",");e=strProductNos;g=true}else{$("sup.salepic2").each(function(){var j=$(this).attr("no");if(j&&j!=""){e.push(j);i=true}});$("sup.salepic").each(function(){var j=$(this).attr("no");if(j&&j!=""){e.push(j);g=true}});$(".cmdtyPrice").each(function(){var j=$(this).attr("no");if(j&&j!=""){e.push(j);b=true}})}if($("#newtopicbd")[0]){d=true;if($(".tpc_lst_module3,.tpc_lst_module2").length>0){c=true}}var a=e.join(";");if(e.length>0){if(d){commodity_addYgPrice(a)}$.post("/api/mark_new.jhtml",{cNos:a},function(o){if(o!=null&&o.length>0){var n=function(J){var B=o[J],u=B.no,t=B.activePrice,r=B.discount;if(t&&!d){var D=$(".price_no"+u);D.find("i").html(t);D.siblings(".ico_discount").find("i").html(r)}if(d&&c){r=r==10?10+" ":r;$("i.discount_no"+u).html(r)}if(!i&&!g){return}var I=B.marks;var N=B.ruleType;if(I!=null&&I!=""&&I.length>0){for(var F=0;F<I.length;F++){var s=I[F].annMarkText;var C=I[F].annMarkName;var K=I[F].markpcImg;var H=I[F].isAnnMark;if(s!=null){var P="";var p="<div no='"+u+"' class='mark_big_ann_"+u+" annMark'>"+P+"</div>";var O="<div no='"+u+"' class='mark_small_ann_"+u+" annMark'>"+P+"</div>";if(H!=null&&H=="true"&&K!=null){if(K!=""&&s!=""){P="￥<em  class='markAnn'>"+s+"</em>"}p="<div no='"+u+"' class='mark_big_ann_"+u+" annMark' style='background:url("+K+")'>"+P+"</div>";O="<div no='"+u+"' class='mark_small_ann_"+u+" annMark' style='background:url("+K+")'>"+P+"</div>"}if(i){if($("div.mark_big_ann_"+u).size()==0){$("sup.mark_big_"+u).before(p)}}if(g){if($("div.mark_small_ann_"+u).size()==0){$("sup.mark_small_"+u).before(O)}}continue}if(B.memberPrice){continue}var x=I[F];var v=x.mark;var A=x.value;var M=x.lessSize;if(v==null&&v==""){continue}if(v=="sys"){if(A=="out"){if(i){$("sup.mark_big_"+u).html('<em class="markSoldOut"></em>').addClass("markSoldOut_sup")}if(g){$("sup.mark_small_"+u).html('<em class="markSoldOut"></em>').addClass("markSoldOut_sup")}}if(A=="less"){if(g){if(M&&M!=undefined){M="尺码："+M;$("sup.mark_small_"+u).html('<em class="markLess saleActiveRemark" >'+M+"</em>")}else{$("sup.mark_small_"+u).html('<em class="markLess saleActiveRemark"></em>')}}}}else{if(v=="promotion"&&g&&typeof(activeTopic)!="boolean"){var G=x.type;var q="";if(x.uLevel){q=x.uLevel+" "}if(G==1){if(x.loopLimit!=null&&x.loopLimit==0){$("sup.mark_small_"+u).html("<em class='saleActiveRemark mj'>"+q+"每满"+x.full+"<strong>减"+A+"</strong></em>")}else{$("sup.mark_small_"+u).html("<em class='saleActiveRemark mj'>"+q+"满"+x.full+"<strong>减"+A+"</strong></em>")}}else{if(G==2){$("sup.mark_small_"+u).html("<em class='saleActiveRemark xsq'>"+q+"限时抢<strong>&yen;"+A+"</strong></em>")}else{if(G==8){$("sup.mark_small_"+u).html("<em class='saleActiveRemark xsq'>"+q+"加价购</em>")}else{if(G==9){$("sup.mark_small_"+u).html("<em class='saleActiveRemark xsq'>"+q+"下单立减<strong>&yen;"+A+"</strong></em>")}else{if(G==10||G==11){var E=[];var z="折";var y=x.specMark;if(G==11){z="元"}if(y){if(N&&N==3){$.each(y,function(R,Q){E.push("买"+Q.number+"免"+Q.value)})}else{$.each(y,function(R,Q){E.push(Q.number+"件"+Q.value+z)})}}$("sup.mark_small_"+u).html("<em class='saleActiveRemark mj'>"+q+E.join("，")+"</em>")}else{if(G==13){$("sup.mark_small_"+u).html("<em class='saleActiveRemark mzk'>"+q+"满"+x.full+"<strong>享"+A+"折</strong></em>")}else{if(G==14||G==15){$("sup.mark_small_"+u).html("<em class='saleActiveRemark xsq'>"+q+"送赠品</em>")}else{if(G==17){$("sup.mark_small_"+u).html("<em class='saleActiveRemark mj'>"+q+x.full+"件套装"+x.value+"元</em>")}else{if(G==18){$("sup.mark_small_"+u).html("<em class='saleActiveRemark xsq'>预约购买</em>")}else{if(G==19){var w=x.number;$("sup.mark_small_"+u).html("<em class='saleActiveRemark xsq'>限量抢购"+w+"件</em>")}else{if(G==21){$("sup.mark_small_"+u).html("<em class='saleActiveRemark xsq'>"+q+"秒杀<strong>&yen;"+A+"</strong></em>")}else{if(G==22){$("sup.mark_small_"+u).html("<em class='saleActiveRemark xsq'>"+q+"闪团<strong>&yen;"+A+"</strong></em>")}}}}}}}}}}}}}else{if(v=="ordinary"){var L='<em class="markNew saleActiveRemark"></em>';if(x.small.indexOf("seoul")>0){L='<em class="saleBigActiveRemarkred">up to 50%off</em>'}if(i){$("sup.mark_big_"+u).html(L)}if(g){$("sup.mark_small_"+u).html(L)}}}}}}};var l=30,k=0,j=o.length;var m=function(){k++;for(var p=(k-1)*l;p<l*k&&p<j;p++){n(p)}if(p<j){setTimeout(m,3000)}};m(k)}},"json")}};