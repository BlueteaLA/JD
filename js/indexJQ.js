$(function(){
	// 头部   箭头
	var $jt=$(".header .jiantou_out");
	// 头部  左侧:送至
	var $hl=$(".hl");
	var $hlh=$(".hl .hidden");
	var $add=$(".hl .hidden a");
	$hl.mouseover(function(){
		$(this).css({borderRightColor:"#ddd",borderLeftColor:"#ddd",backgroundColor:"#fff"});
		$hlh.css({display:"block"})
		$jt.eq(0).removeClass("jiantou_out")
		$jt.eq(0).addClass("jiantou_over")
	}).mouseout(function(){
		$(this).css({borderRightColor:"#f1f1f1",borderLeftColor:"#f1f1f1",backgroundColor:"#f1f1f1"});
		$hlh.css({display:"none"})
		$jt.eq(0).removeClass("jiantou_over")
		$jt.eq(0).addClass("jiantou_out")
	})
	$add.eq(0).css({backgroundColor:"#c81632",color:"#fff"})
	$add.click(function(){
		$(".address>a").html($(this).html())
		$add.css({backgroundColor:"#fff",color:"#666"})
		$(this).css({backgroundColor:"#c81632",color:"#fff"})
	})

	// 头部  右侧:我的京东
	var $myjd=$(".myjd");
	var $myh=$(".myjd .hidden");
	$myjd.mouseover(function(){
		$(this).css({borderRightColor:"#ddd",borderLeftColor:"#ddd",backgroundColor:"#fff"});
		$myh.css({display:"block"});
		$jt.eq(1).removeClass("jiantou_out")
		$jt.eq(1).addClass("jiantou_over")
	}).mouseout(function(){
		$(this).css({borderRightColor:"#f1f1f1",borderLeftColor:"#f1f1f1",backgroundColor:"#f1f1f1"});
		$myh.css({display:"none"})
		$jt.eq(1).removeClass("jiantou_over")
		$jt.eq(1).addClass("jiantou_out")
	})

	// 头部  右侧:手机京东
	var $sjjd=$(".sjjd");
	var $sjh=$(".sjjd .hidden");
	$sjjd.mouseover(function(){
		$(this).css({borderRightColor:"#ddd",borderLeftColor:"#ddd",backgroundColor:"#fff"});
		$sjh.css({display:"block"});
		$jt.eq(2).removeClass("jiantou_out")
		$jt.eq(2).addClass("jiantou_over")
	}).mouseout(function(){
		$(this).css({borderRightColor:"#f1f1f1",borderLeftColor:"#f1f1f1",backgroundColor:"#f1f1f1"});
		$sjh.css({display:"none"})
		$jt.eq(2).removeClass("jiantou_over")
		$jt.eq(2).addClass("jiantou_out")
	})

	// 头部  右侧:关注京东
	var $gzjd=$(".gzjd");
	var $gzh=$(".gzjd .hidden");
	$gzjd.mouseover(function(){
		$(this).css({borderRightColor:"#ddd",borderLeftColor:"#ddd",backgroundColor:"#fff"});
		$gzh.css({display:"block"});
		$jt.eq(3).removeClass("jiantou_out")
		$jt.eq(3).addClass("jiantou_over")
	}).mouseout(function(){
		$(this).css({borderRightColor:"#f1f1f1",borderLeftColor:"#f1f1f1",backgroundColor:"#f1f1f1"});
		$gzh.css({display:"none"})
		$jt.eq(3).removeClass("jiantou_over")
		$jt.eq(3).addClass("jiantou_out")
	})

	// 头部  右侧:客户服务
	var $khfw=$(".khfw");
	var $khh=$(".khfw .hidden");
	$khfw.mouseover(function(){
		$(this).css({borderRightColor:"#ddd",borderLeftColor:"#ddd",backgroundColor:"#fff"});
		$khh.css({display:"block"});
		$jt.eq(4).removeClass("jiantou_out")
		$jt.eq(4).addClass("jiantou_over")
	}).mouseout(function(){
		$(this).css({borderRightColor:"#f1f1f1",borderLeftColor:"#f1f1f1",backgroundColor:"#f1f1f1"});
		$khh.css({display:"none"})
		$jt.eq(4).removeClass("jiantou_over")
		$jt.eq(4).addClass("jiantou_out")
	})

	// 头部  右侧:网站导航
	var $wzdh=$(".wzdh");
	var $wzh=$(".wzdh .hidden");
	$wzdh.mouseover(function(){
		$(this).css({borderRightColor:"#ddd",borderLeftColor:"#ddd",backgroundColor:"#fff"});
		$wzh.css({display:"block"});
		$jt.eq(-1).removeClass("jiantou_out")
		$jt.eq(-1).addClass("jiantou_over")
	}).mouseout(function(){
		$(this).css({borderRightColor:"#f1f1f1",borderLeftColor:"#f1f1f1",backgroundColor:"#f1f1f1"});
		$wzh.css({display:"none"})
		$jt.eq(-1).removeClass("jiantou_over")
		$jt.eq(-1).addClass("jiantou_out")
	})

	// 购物车
	var $shopcart=$(".shopcart");
	var $carh=$(".shopcart .cahidden");
	$shopcart.mouseover(function(){
		$carh.css({display:"block"})
	}).mouseout(function(){
		$carh.css({display:"none"})
	})


	// banner左侧选项卡
	var $bannerList=$(".banleft li");
	var $bandyh=$(".banleft .bandyh");
	var $banhidd=$(".banleft .hidden");
	$bannerList.mouseover(function(){
		var $banIndex=$(this).index()
		var $bannerA=$(".banword",$(this));
		$bannerA.css({color:"#c81632"})
		$bannerList.css({background:"#c81632",borderRightColor:"#c81632"})
		$(this).css({background:"#fff",borderRightColor:"#fff"})
		$bandyh.css({display:"block"}).eq($banIndex).css({display:"none"})
		$banhidd.css({display:"none"}).eq($banIndex).css({display:"block",top:-31*($banIndex)})
	}).mouseout(function(){
		var $banIndex=$(this).index()
		var $bannerA=$(".banword",$(this));
		$bannerA.css({color:"#fff"})
		$(this).css({background:"#c81632",borderRightColor:"#c81632"})
		$bandyh.eq($banIndex).css({display:"block"})
		$banhidd.eq($banIndex).css({display:"none"})
	})


	// 楼层头部选项卡
	// function xxk(obj){}
		// 楼层选项卡
		var $floors=$(".fushi");
		$floors.each(function(i,o){
			var $tright=$(".tright",$(this))
			var $fllis=$(".tit",$tright);
			var $flhidden=$(".hidden",$tright);
			$flhidden.eq(0).css({display:"block"})
			// $fllis.eq(0).css({float:"left",height:33,font-size:12,color:"#c81632",line-height:35,padding:14,border-top:"3px solid #c81632",border-bottom:"1px solid #fff",border-right:"1px solid #c81632",border-left:"1px solid #c81632",cursor:"pointer"})
			$fllis.mouseover(function(){
				var flIndex=$(this).index();
				$flhidden.css({display:"none"}).eq(flIndex).css({display:"block"})
			})
		})

		var $model3=$(".model3");
		$model3.each(function(i,o){
			var $tright=$(".tright",$(this))
			var $fllis=$(".tit",$tright);
			var $flhidden=$(".hidden",$tright);
			$flhidden.eq(0).css({display:"block"})
			// $fllis.eq(0).css({float:"left",height:33,font-size:12,color:"#c81632",line-height:35,padding:14,border-top:"3px solid #c81632",border-bottom:"1px solid #fff",border-right:"1px solid #c81632",border-left:"1px solid #c81632",cursor:"pointer"})
			$fllis.mouseover(function(){
				var flIndex=$(this).index();
				$flhidden.css({display:"none"}).eq(flIndex).css({display:"block"})
			})
		})


	// 楼层跳转
	var cw=document.documentElement.clientHeight;
	var $jumpfloors=$(".floor");
	var floorArr=[];
	$jumpfloors.each(function(i,o){
		floorArr.push($jumpfloors[i].offsetTop);
	})
	var $jump=$(".sidebarleft");
	var $jumps=$("li",$jump);
	var $gotop=$(".gotop");

	var hiddenFlag=true;
	$jumps.mouseover(function(){
		var $mout=$(".mout",$(this));
		var $mover=$(".mover",$(this));
		$mout.css({display:"none"});
		$mover.css({background:"#c81632",color:"#fff"});
	}).mouseout(function(){
		var $mout=$(".mout",$(this));
		var $mover=$(".mover",$(this));
		$mout.css({display:"block"});
		$mover.css({background:"#fff",color:"#c81632"});
	}).click(function(){
		var $floorIndex=$(this).index()
		var obj=document.body.scrollTop?document.body:document.documentElement;
		$(obj).animate({scrollTop:floorArr[$floorIndex]})
	})


	// console.log($jumps)
	window.onscroll=function(){
		// 获取滚动条距离顶层位置
		var obj=document.body.scrollTop?document.body:document.documentElement;
		var scrolltop=obj.scrollTop;
		// 部分功能隐藏
		if(scrolltop>=floorArr[0]){
			if(hiddenFlag){
				hiddenFlag=false;
				$jump.css({display:"block"});
			}
		}else{
			if(!hiddenFlag){
				hiddenFlag=true;
				$jump.css({display:"none"});
			}
		}
		// 返回顶部
		$gotop.click(function(){
			if(obj.scrollTop=0){return}
			var obj=document.body.scrollTop?document.body:document.documentElement;
			$(obj).animate({scrollTop:0})
		})
	}

 //            // 按钮变红
 //            var mout=$(".mout",jumps[i])[0]
 //                for(var j=0;j<jumps.length;j++){
 //                 var allmout=$(".mout",jump)
 //                 allmout[j].style.display="block";
 //                }
 //            mout.style.display="none";
 //        }
 //    }

 //    window.onscroll=function(){
	// 	// // 按需加载
	// 	// for(var i=0;i<floorArr.length;i++){
	// 	// 	if(scrolltop+cw>=floorArr[i]+100){
	// 	// 		var imgs=$("img",floors[i]);
	// 	// 		for(var j=0;j<imgs.length;j++){
	// 	// 			imgs[j].src=imgs[j].getAttribute("imgpath")
	// 	// 		}
	// 	// 	}
	// 	// }


 //                // 开关
 //                // if(flag){return}
 //                // 在谁的楼层谁亮
 //        for(var i=0;i<jumps.length;i++){
 //            if(scrolltop>floorArr[i]){
 //                var mout=$(".mout",jumps[i])[0]
 //                    for(var j=0;j<jumps.length;j++){
 //                    	var allmout=$(".mout",jump)
 //                    	allmout[j].style.display="block";
 //                    }
 //                mout.style.display="none";
 //            }
 //        }


	    
	    
	// 右侧选项卡
	var $sbright=$(".sidebarright");
	var $sbrlis=$("li",$sbright);
	$sbrlis.mouseover(function(){
		var $sbrIndex=$(this).index();
		var $sbrd=$("div",$sbrlis[$sbrIndex]);
		var $sbrdw=$sbrd.width();
		$sbrd.css({display:"block"}).animate({left:-$sbrdw})
	}).mouseout(function(){
		var $sbrIndex=$(this).index();
		var $sbrd=$("div",$sbrlis[$sbrIndex]);
		$sbrd.css({display:"none"}).animate({left:0})
	})


})