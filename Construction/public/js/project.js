(function(){
    $.ajax({
        url:"http://127.0.0.1:3030/project",
        type:"get",
        dataType:"json",
        success: function(res) {
            var html="";
            for(var i=0;i<12;i++){
                html+=`<div class="item_block">
                <a href="#" class="fade">
                    <img src="${res[i].img_url}" alt="">
                    <div class="wrapper_mask"></div>                        
                    <div class="cross">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                        <p>${res[i].title}</p>
                        <p>${res[i].details}</p>                        
                </a></div>`;
            }
            var parent=document.querySelector(".content_wrapper");
            parent.innerHTML=html;
            setTimeout(load, 100);
            console.log("调用数据完成");

            $(".content .container_content .content_wrapper .item_block a").hover(
                function(e){
                    move.call(this,e,true)
                },
                function(e){
                    move.call(this,e,false)
                }
            );
            function move(e,bool){
                var top=$(this).offset().top;
                var left=$(this).offset().left;
                var bottom=top+$(this).height();
                var right=left+$(this).width();
        
                var x=e.pageX;
                var y=e.pageY;
        
                var sT=Math.abs(y-top);
                var sB=Math.abs(bottom-y);
                var sL=Math.abs(x-left);
                var sR=Math.abs(right-x);
        
                var min=Math.min(sT,sB,sL,sR);
                switch(min){
                    case sT:
                        if(bool){
                            $(this).find(".wrapper_mask").css("display","block");
                            $(this).find(".cross").css("opacity","1");
                            $(this).find("p:nth-child(4)").css({
                                left:20,
                                top:80,
                                opacity:0
                            }).stop().animate({top:100,opacity:1},100);
                            $(this).find("p:last-child").css({
                                left:20,
                                top:113,
                                opacity:0
                            }).stop().animate({top:133,opacity:1},100);
                        }else{
                            $(this).find(".wrapper_mask").css("display","none");
                            $(this).find(".cross").css("opacity","0");
                            $(this).find("p:nth-child(4)").stop().animate({top:80,opacity:0},100);
                            $(this).find("p:last-child").stop().animate({top:113,opacity:0},100);
                        }
                        break;
                    case sB:
                        if(bool){
                            $(this).find(".wrapper_mask").css("display","block");
                            $(this).find(".cross").css("opacity","1");
                            $(this).find("p:nth-child(4)").css({
                                left:20,
                                top:120,
                                opacity:0
                            }).stop().animate({top:100,opacity:1},100);
                            $(this).find("p:last-child").css({
                                left:20,
                                top:153,
                                opacity:0
                            }).stop().animate({top:133,opacity:1},100);
                        }else{
                            $(this).find(".wrapper_mask").css("display","none");
                            $(this).find(".cross").css("opacity","0");
                            $(this).find("p:nth-child(4)").stop().animate({top:120,opacity:0},100);
                            $(this).find("p:last-child").stop().animate({top:153,opacity:0},100);
                        }
                        break;
                    case sL:
                        if(bool){
                            $(this).find(".wrapper_mask").css("display","block");
                            $(this).find(".cross").css("opacity","1");
                            $(this).find("p:nth-child(4)").css({
                                left:0,
                                top:100,
                                opacity:0
                            }).stop().animate({left:20,opacity:1},100);
                            $(this).find("p:last-child").css({
                                left:0,
                                top:133,
                                opacity:0
                            }).stop().animate({left:20,opacity:1},100);
                        }else{
                            $(this).find(".wrapper_mask").css("display","none");
                            $(this).find(".cross").css("opacity","0");
                            $(this).find("p:nth-child(4)").stop().animate({left:0,opacity:0},100);
                            $(this).find("p:last-child").stop().animate({left:0,opacity:0},100);
                        }
                        break;
                    case sR:
                        if(bool){
                            $(this).find(".wrapper_mask").css("display","block");
                            $(this).find(".cross").css("opacity","1");
                            $(this).find("p:nth-child(4)").css({
                                left:40,
                                top:100,
                                opacity:0
                            }).stop().animate({left:20,opacity:1},100);
                            $(this).find("p:last-child").css({
                                left:40,
                                top:133,
                                opacity:0
                            }).stop().animate({left:20,opacity:1},100);
                        }else{
                            $(this).find(".wrapper_mask").css("display","none");
                            $(this).find(".cross").css("opacity","0");
                            $(this).find("p:nth-child(4)").stop().animate({left:40,opacity:0},100);
                            $(this).find("p:last-child").stop().animate({left:40,opacity:0},100);
                        }
                        break;
                }       
            }

            function load(){
                $(".item_block:first-child a").attr("class","fade in");
                $(".item_block:nth-child(2) a").attr("class","fade in");
                $(".item_block:nth-child(3) a").attr("class","fade in");
                $(".item_block:nth-child(4) a").attr("class","fade in");
                $(".item_block:nth-child(5) a").attr("class","fade in");
                $(".item_block:nth-child(6) a").attr("class","fade in");
            }
        }
    });
})();
/*移入移出*/
(function(){
    $(".content .container_category a").hover(//给目标元素绑定hover事件
        function(e){
            move.call(this,e,true)//移入
        },
        function(e){
            move.call(this,e,false)//移出
        }
    );
    function move(e,bool){
        var top=$(this).offset().top;
        var left=$(this).offset().left;
        var bottom=top+$(this).height();
        var right=left+$(this).width();

        var x=e.pageX;
        var y=e.pageY;

        var sT=Math.abs(y-top);
        var sB=Math.abs(bottom-y);
        var sL=Math.abs(x-left);
        var sR=Math.abs(right-x);

        var min=Math.min(sT,sB,sL,sR);
        switch(min){
            case sL:
                if(bool){
                    $(this).find("span.category_text").css("display","inline-block");
                    $(this).find("div.category_mask").css({
                        left:-100,
                        top:0
                    }).stop().animate({left:0},100);
                }else{
                    $(this).find("span.category_text").css("display","none");
                    $(this).find("div.category_mask").stop().animate({left:-100},100);
                }
                break;
            case sR:
                if(bool){
                    $(this).find("span.category_text").css("display","inline-block");
                    $(this).find("div.category_mask").css({
                        left:104,
                        top:0
                    }).stop().animate({left:0},100);
                }else{
                    $(this).find("span.category_text").css("display","none");
                    $(this).find("div.category_mask").stop().animate({left:104},100);
                }
                break;
            case sT:
                if(bool){
                    $(this).find("span.category_text").css("display","inline-block");
                    $(this).find("div.category_mask").css({
                        left:0,
                        top:-32
                    }).stop().animate({top:0},100);
                }else{
                    $(this).find("span.category_text").css("display","none");
                    $(this).find("div.category_mask").stop().animate({top:-32},100);
                }
                break;
            case sB:
                if(bool){
                    $(this).find("span.category_text").css("display","inline-block");
                    $(this).find("div.category_mask").css({
                        left:0,
                        top:64
                    }).stop().animate({top:0},100);
                }else{
                    $(this).find("span.category_text").css("display","none");
                    $(this).find("div.category_mask").stop().animate({top:64},100);
                }
                break;
        }       
    }
})();
/*加载移入*/
(function(){
    window.onload=function(){
        console.log("window加载完成");
        $(".container_target").attr("class","container_target fade in");
        $(".container_category").attr("class","container_category fade in");
    };
    window.onscroll=function(){
        var t=document.body.scrollTop||document.documentElement.scrollTop;
        if(t>450){
            $(".item_block:nth-child(7) a").attr("class","fade in");
            $(".item_block:nth-child(8) a").attr("class","fade in");
            $(".item_block:nth-child(9) a").attr("class","fade in");
        }
        if(t>700){
            $(".item_block:nth-child(10) a").attr("class","fade in");
            $(".item_block:nth-child(11) a").attr("class","fade in");
            $(".item_block:nth-child(12) a").attr("class","fade in");
        }
    }
})(); 
/*按钮高亮*/
(function(){
    var category=document.querySelectorAll(".container_category a");
    for(var i=0;i<category.length;i++){
        category[i].onclick=function(){
            for(var j=0;j<category.length;j++){
                category[j].className="";
            }
            this.className="active";
        }
    }
    var page=document.querySelectorAll("#pages a");
    for(var i=0;i<page.length-1;i++){
        page[i].onclick=function(){
            for(var j=0;j<page.length-1;j++){
                page[j].className="page_item";
            }
            this.className="page_item active";
        }
    }
})();

//隐藏小的信息，显示大的信息
function message(){
    $("#message").css("right","-50px");
    $("#message_big").css("right","10px");
    unScroll()
  }
  //屏蔽滚动条
  function unScroll() {
    var top = $(document).scrollTop();
    $(document).on('scroll.unable',function (e) {
        $(document).scrollTop(top);
    })
  }
  //去除屏蔽滚动条
  function removeUnScroll() {
    $(document).unbind("scroll.unable");
  }
  
  
  $("#message").click(function(){
    message();
  })
  
  //隐藏大的信息，显示小的信息
  function removeMessage(){
    $("#message").css("right","0");
    $("#message_big").css("right","-200px");
    removeUnScroll();
  }
  
  $("#close").click(function(){
    removeMessage();
    setTimeout(function(){
      message();
    },30000);
  })
  
  
  
  $("#weixin").click(function(){
    $("#zh_weixin").css("z-index","999999");
    $("#zh_weixin").css("opacity","1");
    unScroll();
  })
  $("#zh_weixin").click(function(){
    $("#zh_weixin").css("z-index","-1");
    $("#zh_weixin").css("opacity","0");
    removeUnScroll();
  })
  
  function Top(){
    $('body,html').animate({'scrollTop':0},300)
  }
  $("#up").click(function(){
    Top();
  })