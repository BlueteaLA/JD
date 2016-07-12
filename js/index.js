$(function(){
	// 头部
	// 左侧
	var hl=$(".hl")[0];// 左侧ul
	var hlh=$(".hidden",hl)[0]// 隐藏部分
	var jt=$(".jiantou_out")[0];// 箭头
	var aas=$("a",hlh);

	// 初始状态
	aas[0].style.backgroundColor="#c81632";
	aas[0].style.color="#fff";

	hl.onmouseover=function(){
		hl.style.borderRightColor="#ddd";
		hl.style.borderLeftColor="#ddd";
		hl.style.backgroundColor="#fff";
		hlh.style.display="block";
		jt.className="jiantou_over";
	}
	hl.onmouseout=function(){
		hl.style.borderRightColor="#f1f1f1";
		hl.style.borderLeftColor="#f1f1f1";
		hl.style.backgroundColor="#f1f1f1";
		hlh.style.display="none";
		jt.className="jiantou_out";
	}
	for(var i=0;i<aas.length;i++){
		aas[i].index=i
		aas[i].onclick=function(){
			for(var j=0;j<aas.length;j++){
				aas[j].style.backgroundColor="#fff";
				aas[j].style.color="#666";
			}
			aas[this.index].style.backgroundColor="#c81632";
			aas[this.index].style.color="#fff";

		}
	}
	// 右侧
	// 我的京东
	var myjd=$(".myjd")[0];
	var myh=$(".hidden",myjd)[0];
	var mjt=$(".jiantou_out",myjd)[0];
	myjd.onmouseover=function(){
		myjd.style.borderRightColor="#ddd";
		myjd.style.borderLeftColor="#ddd";
		myjd.style.backgroundColor="#fff";
		myh.style.display="block";
		mjt.className="jiantou_over";
	}
	myjd.onmouseout=function(){
		myjd.style.borderRightColor="#f1f1f1";
		myjd.style.borderLeftColor="#f1f1f1";
		myjd.style.backgroundColor="#f1f1f1";
		myh.style.display="none";
		mjt.className="jiantou_out";
	}
	
	// 手机京东
	var sjjd=$(".sjjd")[0];
	var sjh=$(".hidden",sjjd)[0];
	var sjjt=$(".jiantou_out",sjjd)[0];
	sjjd.onmouseover=function(){
		sjjd.style.borderRightColor="#ddd";
		sjjd.style.borderLeftColor="#ddd";
		sjjd.style.backgroundColor="#fff";
		sjh.style.display="block";
		sjjt.className="jiantou_over";
	}
	sjjd.onmouseout=function(){
		sjjd.style.borderRightColor="#f1f1f1";
		sjjd.style.borderLeftColor="#f1f1f1";
		sjjd.style.backgroundColor="#f1f1f1";
		sjh.style.display="none";
		sjjt.className="jiantou_out";
	}

	// 关注京东
	var gzjd=$(".gzjd")[0];
	var gzh=$(".hidden",gzjd)[0];
	var gzjt=$(".jiantou_out",gzjd)[0];
	gzjd.onmouseover=function(){
		gzjd.style.borderRightColor="#ddd";
		gzjd.style.borderLeftColor="#ddd";
		gzjd.style.backgroundColor="#fff";
		gzh.style.display="block";
		gzjt.className="jiantou_over";
	}
	gzjd.onmouseout=function(){
		gzjd.style.borderRightColor="#f1f1f1";
		gzjd.style.borderLeftColor="#f1f1f1";
		gzjd.style.backgroundColor="#f1f1f1";
		gzh.style.display="none";
		gzjt.className="jiantou_out";
	}

	// 客户服务
	var khfw=$(".khfw")[0];
	var khh=$(".hidden",khfw)[0];
	var khjt=$(".jiantou_out",khfw)[0];
	khfw.onmouseover=function(){
		khfw.style.borderRightColor="#ddd";
		khfw.style.borderLeftColor="#ddd";
		khfw.style.backgroundColor="#fff";
		khh.style.display="block";
		khjt.className="jiantou_over";
	}
	khfw.onmouseout=function(){
		khfw.style.borderRightColor="#f1f1f1";
		khfw.style.borderLeftColor="#f1f1f1";
		khfw.style.backgroundColor="#f1f1f1";
		khh.style.display="none";
		khjt.className="jiantou_out";
	}

	// 网站导航
	var wzdh=$(".wzdh")[0];
	var wzh=$(".hidden",wzdh)[0];
	var wzjt=$(".jiantou_out",wzdh)[0];
	wzdh.onmouseover=function(){
		wzdh.style.borderRightColor="#ddd";
		wzdh.style.borderLeftColor="#ddd";
		wzdh.style.backgroundColor="#fff";
		wzh.style.display="block";
		wzjt.className="jiantou_over";
	}
	wzdh.onmouseout=function(){
		wzdh.style.borderRightColor="#f1f1f1";
		wzdh.style.borderLeftColor="#f1f1f1";
		wzdh.style.backgroundColor="#f1f1f1";
		wzh.style.display="none";
		wzjt.className="jiantou_out";
	}


	// 购物车
	var shopcart=$(".shopcart")[0];
	var carh=$(".cahidden",shopcart)[0]
	shopcart.onmouseover=function(){
		carh.style.display="block";
	}
	shopcart.onmouseout=function(){
		carh.style.display="none";
	}



	// banner左侧选项卡
	var banleft=$(".banleft")[0];
	var banllis=$("li",banleft);
	var bandyh=$(".bandyh",banleft);
	var banhidd=$(".hidden",banleft);
	console.log(banllis);
	for(var i=0;i<banllis.length;i++){
		banllis[i].index=i;
		banllis[i].onmouseover=function(){
			var blws=$("a",banllis[this.index]);
			for(var j=0;j<blws.length;j++){
				blws[j].style.color="#c81632";
			}
			banllis[this.index].style.backgroundColor="#fff";
			banllis[this.index].style.borderRightColor="#fff";
			bandyh[this.index].style.display="none";
			banhidd[this.index].style.display="block";
			banhidd[this.index].style.top=-(this.index)*31+"px";
		}
		banllis[i].onmouseout=function(){
			var blws=$("a",banllis[this.index]);
			for(var j=0;j<blws.length;j++){
				blws[j].style.color="#fff";
			}
			banllis[this.index].style.backgroundColor="#c81632";
			banllis[this.index].style.borderRightColor="#c81632";
			bandyh[this.index].style.display="block";
			banhidd[this.index].style.display="none";
		}
	}



	// banner轮播
    // 通过调节透明度实现动画
    // 获取元素
    var img=$("a",$(".banphoto")[0]);
    var lis=$("li",$(".diandian")[0]);
    var ban=$(".banmiddle")[0];
    var next=$("li",$(".next")[0]);
    // 开关
    var flag=true;
    // 设置初始状态
    var num=0;
    img[0].style.zIndex=1;
    lis[0].style.background="#b61b1f";
    // 自动轮播
    var t=setInterval(moveR,2000)
    // 移上去停止
    ban.onmouseover=function(){
    	clearInterval(t);
    }
    // 移走后再次轮播
    ban.onmouseout=function(){
    	t=setInterval(moveR,2000)
    }
    // 点击小点点时选型卡模式
    for(var i=0;i<lis.length;i++){
    	lis[i].index=i;
    	lis[i].onmouseover=function(){
    		if(flag){
    			flag=false;
	    		// 我自己写的时候少了清除这一步循环
	    		for(var j=0;j<lis.length;j++){
	    			// img[j].style.zIndex=0;
	                animate(img[j],{opacity:0});
	    			lis[j].style.background="#3e3e3e";
	    		}
	    		// img[this.index].style.zIndex=1;
	            animate(img[this.index],{opacity:1},function(){
	                flag=true;
	            });
	    	    lis[this.index].style.background="#b61b1f";
	    	    // 我自己写的时候忘记的部分
	    	    num=this.index;
    		}
    		
    	}
    }
    // 箭头的左右轮播
    next[0].onclick=function(){
        if(flag){
            flag=false;
            moveL();
        }
    }
    next[1].onclick=function(){
        if(flag){
            flag=false;
            moveR();
        }
    }
    // 向右轮播
    function moveR(){
    	num++;
    	if(num==img.length){
    		num=0;
    	}
    	for(var i=0;i<img.length;i++){
            animate(img[i],{opacity:0});
    		lis[i].style.background="#3e3e3e";
    	}
        animate(img[num],{opacity:1},function(){
                flag=true;
            });
    	lis[num].style.background="#b61b1f";
    }
    // 向左轮播
    function moveL(){
    	num--;
    	if(num<0){
    		num=img.length-1;
    	}
    	for(var i=0;i<img.length;i++){
    		// img[i].style.zIndex=0;
            animate(img[i],{opacity:0});
    		lis[i].style.background="#3e3e3e";
    	}
    	// img[num].style.zIndex=1;
        animate(img[num],{opacity:1},function(){
                flag=true;
            });
    	lis[num].style.background="#b61b1f";
    }


	// // banner下节点轮播
	// var tuijian=$(".tuijian",$("active1")[0])[0];
	// tuijjianul=$("ul",tuijian)[0];
	// var tuijjianimgs=$("li",rmul);
	// var tuijjianimgsW=tuijjianimgs[0].offsetWidth;

	// var tuijjiant=setInterval(tuijjianmoveUp,2000);
	// function tuijjianmoveUp(){
	// 	var first=tuijjianul.firstElementChild;
	// 	animate(tuijjianul,{left:-tuijjianimgsW},function(){
	// 		tuijjianul.appendChild(first)
	// 		tuijjianul.style.left="0";
	// 	});
	// }
	// function tuijjianmoveDown(){
	// 	var last=tuijjianul.lastElementChild;
	// 	var first=tuijjianul.firstElementChild;
	// 	tuijjianul.style.left=-tuijjianimgsW+"px";
	// 	tuijjianul.insertBefore(last,first)
	// 		animate(tuijjianul,{left:0},function(){
	// 	})
	// }






    var floors=$(".fushi");
    for(var i=0;i<floors.length;i++){
    	xxk(floors[i]);
    	lunbo(floors[i])
    }

    // model3(3、4、5、11)动效
    // var zcyp=$(".zcyp")[0];
    // xxk(zcyp);
    // lunbo(zcyp);
    var model3=$(".model3");
    for(var i=0;i<model3.length;i++){
    	xxk(model3[i]);
    	lunbo(model3[i])
    }



    // 12楼动效
    var shfw=$(".shfw")[0];
    var shfwCon=$(".con",shfw);
    for(var i=0;i<shfwCon.length;i++){
    	lunbo(shfwCon[i])
    }
    // lunbo(shfw);


    // 楼层头部选项卡
    function xxk(obj){
		// 楼层选项卡
	    var tright=$(".tright",obj)[0]
	    var fllis=$(".tit",tright);
	    var flhidden=$(".hidden",tright);
	    // 初始化
	    flhidden[0].style.display="block";
	    fllis[0].style.cssText="float: left;height: 33px;font-size: 12px;color: #c81632;line-height: 35px;padding: 0 14px;border-top: 3px solid #c81632;border-bottom: 1px solid #fff;border-right: 1px solid #c81632;border-left: 1px solid #c81632;cursor: pointer;";
	    for(var i=0;i<fllis.length;i++){
	    	fllis[i].index=i;
	    	fllis[i].onmouseover=function(){
	    		for(var j=0;j<flhidden.length;j++){
	    			flhidden[j].style.display="none";
	    			fllis[j].style.cssText="height: 35px;font-size: 12px;color: #666;line-height: 35px;padding: 0 14px;border-top: 1px solid #ededed;border-bottom: 1px solid #c81632;border-right: 1px solid transparent;border-left: 1px solid transparent;cursor: pointer;";
	    		}
	    		flhidden[this.index].style.display="block";
	    		fllis[this.index].style.cssText="float: left;height: 33px;font-size: 12px;color: #c81632;line-height: 35px;padding: 0 14px;border-top: 3px solid #c81632;border-bottom: 1px solid #fff;border-right: 1px solid #c81632;border-left: 1px solid #c81632;cursor: pointer;";
	    	}
	    	// fllis[i].onmouseout=function(){
	    	// 	if(this.index==0){
	    	// 		fllis[this.index].style.cssText="height: 35px;font-size: 12px;color: #666;line-height: 35px;padding: 0 14px;border-top: 1px solid #ededed;border-bottom: 1px solid #c81632;border-right: 1px solid transparent;border-left: 1px solid #ededed;cursor: pointer;";
	    	// 	}
	    	// 	if(this.index==fllis.length-1){
	    	// 		fllis[this.index].style.cssText="height: 35px;font-size: 12px;color: #666;line-height: 35px;padding: 0 14px;border-top: 1px solid #ededed;border-bottom: 1px solid #c81632;border-right: 1px solid #ededed;border-left: 1px solid transparent;cursor: pointer;";
	    	// 	}
	    	// 	fllis[this.index].style.cssText="height: 35px;font-size: 12px;color: #666;line-height: 35px;padding: 0 14px;border-top: 1px solid #ededed;border-bottom: 1px solid #c81632;border-right: 1px solid transparent;border-left: 1px solid transparent;cursor: pointer;";
	    	// }
	    }
    }
    
	// 楼层中的轮播
    function lunbo(obj){
	    // 双下标左右平移
	    // 获取元素
	    var lbban=$(".lunbo",obj)[0];
	    var lbpho=$(".lbpho",lbban)[0];
	    var lbimg=$("li",lbpho);
	    var lbdian=$(".lbdian",lbban)[0];
	    var lblist=$("li",lbdian);
	    var lbmor=$(".lbmore",lbban)[0];
	    var lbmore=$("li",lbmor);
	    // 获取banner的宽度
	    // 忘记parseInt
	    var width=parseInt(getStyle(lbban,"width"));
	    var flag=true;
	    // 设置初始状态
	    var index=0;
	    var next=0;
	    for(i=0;i<lbimg.length;i++){
	        if(i==0){
	            continue;
	        }
	        lbimg[i].style.left=width+"px";
	    }
	    lblist[0].style.background="#b61b1f";
	    // 自动轮播
	    var lbt=setInterval(lbmoveR,2000)
	    // 鼠标移上去停止轮播
	    lbban.onmouseover=function(){
	        clearInterval(lbt);
	    }
	    // 鼠标挪出去继续轮播
	    lbban.onmouseout=function(){
	        lbt=setInterval(lbmoveR,2000)
	    }
	    // 点击点点换图片
	    for(var i=0;i<lblist.length;i++){
	        lblist[i].index=i;
	        lblist[i].onclick=function(){
	            if(this.index==index){
	                return;
	            }
	            if(this.index>index){
	                // 就位
	                lbimg[this.index].style.left=width+"px";
	                // 动画
	                animate(lbimg[index],{left:-width});
	                animate(lbimg[this.index],{left:0});
	                // 点点颜色变化
	                for(var j=0;j<lblist.length;j++){
	                    lblist[j].style.background="#3e3e3e";
	                }
	                lblist[this.index].style.background="#b61b1f";
	                // 更新下标
	                next=this.index;
	                index=this.index;
	            }else if(this.index<index){
	                // 就位
	                lbimg[this.index].style.left=-width+"px";
	                // 动画
	                animate(lbimg[index],{left:width});
	                animate(lbimg[this.index],{left:0});
	                // 点点颜色变化
	                for(var j=0;j<lblist.length;j++){
	                    lblist[j].style.background="#3e3e3e";
	                }
	                lblist[this.index].style.background="#b61b1f";
	                // 更新下标
	                next=this.index;
	                index=this.index;
	            }
	        }
	    }
	    // 点左箭头左移
	    lbmore[0].onclick=function(){
	        if(flag){
	            flag=false;
	            lbmoveL();
	        }   
	    }
	    // 点右箭头右移
	    lbmore[1].onclick=function(){
	        if(flag){
	            flag=false;
	            lbmoveR();
	        }
	    }
	    // 向右的函数
	    function lbmoveR(){
	        // 更新next
	        next++;
	        // 判断是否越界
	        if(next==lbimg.length){
	            next=0;
	        }
	        // 就位
	        lbimg[next].style.left=width+"px";
	        // 动画
	        animate(lbimg[index],{left:-width});
	        animate(lbimg[next],{left:0},function(){
	            flag=true;
	        });
	        // 更新index时用的方法错误（index++）
	        index=next;
	        // 随时更新点点颜色
	        for(var i=0;i<lbimg.length;i++){
	            lblist[i].style.background="#3e3e3e";
	        }
	        lblist[next].style.background="#b61b1f";
	    }
	    // 向左的函数
	    function lbmoveL(){
	        // 更新next
	        next--;
	        // 判断是否越界
	        if(next==-1){
	            next=lbimg.length-1;
	        }
	        // 就位
	        lbimg[next].style.left=-width+"px";
	        // 动画
	        animate(lbimg[index],{left:width});
	        animate(lbimg[next],{left:0},function(){
	            flag=true;
	        });
	        // 更新index时用的方法错误（index++）
	        index=next;
	        // 随时更新点点颜色
	        for(var i=0;i<lbimg.length;i++){
	            lblist[i].style.background="#3e3e3e";
	        }
	        lblist[next].style.background="#b61b1f";
	    }
    	
    }





    // 天天特价
    var ttimgs=$(".img",$(".tttj")[0]);
    for(var i=0;i<ttimgs.length;i++){
    	ttimgs[i].index=i;
    	if(i==0){
    		ttimgs[i].onmouseover=function(){
	    		ttimgs[this.index].style.margin="10px 0";
	    	}
	    	ttimgs[i].onmouseout=function(){
	    		ttimgs[this.index].style.margin="10px auto";
	    	}
    	}else{
	    	ttimgs[i].onmouseover=function(){
	    		ttimgs[this.index].style.marginLeft=-10+"px";
	    	}
	    	ttimgs[i].onmouseout=function(){
	    		ttimgs[this.index].style.marginLeft=0;
	    	}    		
    	}

    }



    // 热门晒单
    var rmul=$("ul",$(".rmphoto")[0])[0];
    var rmimgs=$("li",rmul);
	var rmimgsH=rmimgs[0].offsetHeight;

	var t=setInterval(rmmoveDown,2000);
	function rmmoveUp(){
		var first=rmul.firstElementChild;
		// console.log(first)
		animate(rmul,{top:-rmimgsH},function(){
			rmul.appendChild(first)
			// appendAfter(first,rmul)SS
			rmul.style.top="0";
		});
	}
	function rmmoveDown(){
		var last=rmul.lastElementChild;
		var first=rmul.firstElementChild;
		rmul.style.top=-rmimgsH+"px";
		rmul.insertBefore(last,first)
			animate(rmul,{top:0},function(){
		})
	}


	// 右侧选项卡
	var sbright=$(".sidebarright")[0];
	sbrlis=$("li",sbright);
	for(var i=0;i<sbrlis.length;i++){
		sbrlis[i].index=i;
		sbrlis[i].onmouseover=function(){
			var sbrd=$("div",sbrlis[this.index])[0];
			var sbrdw=parseInt(getStyle(sbrd,"width"));
			sbrd.style.display="block";
			animate(sbrd,{left:-sbrdw})
		}
		sbrlis[i].onmouseout=function(){
			var sbrd=$("div",sbrlis[this.index])[0];
			animate(sbrd,{left:0},function(){
				sbrd.style.display="none";
			})
		}
	}
	


	// 楼层跳转
	var cw=document.documentElement.clientHeight;
	var jumpfloors=$(".floor");
	var floorArr=[];
	for(var i=0;i<jumpfloors.length;i++){
        floorArr.push(jumpfloors[i].offsetTop);
    }
    var jump=$(".sidebarleft")[0];
    var jumps=$("li",jump);
    var gotop=$(".gotop")[0];
    // var gotoph=$(".hidd",gotop)[0];

    var hiddenFlag=true;
    for(var i=0;i<jumps.length;i++){
    	jumps[i].index=i;
    	jumps[i].onmouseover=function(){
    		var mout=$(".mout",jumps[this.index])[0];
    		var mover=$(".mover",jumps[this.index])[0];
    		mout.style.display="none";
    		mover.style.backgroundColor="#c81632";
    		mover.style.color="#fff";
    	}
    	jumps[i].onmouseout=function(){
    		var mout=$(".mout",jumps[this.index])[0];
    		var mover=$(".mover",jumps[this.index])[0];
    		mout.style.display="block";
    		mover.style.backgroundColor="#fff";
    		mover.style.color="#c81632";
    	}

    	// 楼层跳转
    	jumps[i].onclick=function(){
            // 楼层跳转
            var obj=document.body.scrollTop?document.body:document.documentElement ;
            animate(obj,{scrollTop:floorArr[this.index]}/*,function(){flag=true;}*/);
            // obj.scrollTop=floorArr[this.index];

            // 按钮变红
            var mout=$(".mout",jumps[i])[0]
                for(var j=0;j<jumps.length;j++){
                 var allmout=$(".mout",jump)
                 allmout[j].style.display="block";
                }
            mout.style.display="none";
        }
    }

    window.onscroll=function(){
        // 获取滚动条距离顶层位置
        var obj=document.body.scrollTop?document.body:document.documentElement
        var scrolltop=obj.scrollTop;
		// // 按需加载
		// for(var i=0;i<floorArr.length;i++){
		// 	if(scrolltop+cw>=floorArr[i]+100){
		// 		var imgs=$("img",floors[i]);
		// 		for(var j=0;j<imgs.length;j++){
		// 			imgs[j].src=imgs[j].getAttribute("imgpath")
		// 		}
		// 	}
		// }


                // 开关
                // if(flag){return}
                // 在谁的楼层谁亮
        for(var i=0;i<jumps.length;i++){
            if(scrolltop>floorArr[i]){
                var mout=$(".mout",jumps[i])[0]
                    for(var j=0;j<jumps.length;j++){
                    	var allmout=$(".mout",jump)
                    	allmout[j].style.display="block";
                    }
                mout.style.display="none";
            }
        }


        // 返回顶部
        gotop.onclick=function(){
            var obj=document.body.scrollTop?document.body:document.documentElement
            animate(obj,{scrollTop:0});
        }

                // // 返回顶部
                // gotoph.onclick=function(){
                //     var obj=document.body.scrollTop?document.body:document.documentElement
                //     animate(obj,{scrollTop:0});
                // }


        // 部分功能隐藏
        if(scrolltop>=floorArr[0]){
            if(hiddenFlag){
                hiddenFlag=false;
                jump.style.display="block";
            }
        }else{
            if(!hiddenFlag){
                hiddenFlag=true;
                jump.style.display="none";
            }
        }
    }
})