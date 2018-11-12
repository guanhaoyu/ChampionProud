//鼠标滚轮事件
var d=0;
window.onscroll=function(){
  if(d==0){
    var t = document.documentElement.scrollTop||document.body.scrollTop;
    if(t==0){
        $("#up").attr("class","up fade");
    }
    if(t>0){
        $("#up").attr("class","up fade in");
    }
    if(t>=300){
        $("#one").attr("class","fade in");
    }
    if(t>=300){
        $("#two").attr("class","fade in");
    }
    if(t>=400){
        $("#three").attr("class","little fade in");
    }
    if(t>=400){
        $("#four").attr("class","sublittle fade in");
    }
    if(t>=400){
        $("#five").attr("class","fade in");
    }
    if(t>=500){
        $("#six").attr("class","little fade in");
    }
    if(t>=500){
        $("#seven").attr("class","sublittle fade in");
    }
    if(t>=600){
        $("#eight").attr("class","fade in");
    }

    if(t<300){
        $("#one").attr("class","fade");
    }
    if(t<300){
        $("#two").attr("class","fade");
    }
    if(t<400){
        $("#three").attr("class","little fade");
    }
    if(t<400){
        $("#four").attr("class","sublittle fade");
    }
    if(t<400){
        $("#five").attr("class","fade");
    }
    if(t<500){
        $("#six").attr("class","little fade");
    }
    if(t<500){
        $("#seven").attr("class","sublittle fade");
    }
    if(t<600){
        $("#eight").attr("class","fade");
    }
  }
}

window.onload = function(){
    $("#banner").attr("class","bannerpart fade in");
    $("#container_header").attr("class","container_header fade in");
    $("#img").attr("class","img fade in");
    $("#table_text").attr("class","table_text fade in");
}

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