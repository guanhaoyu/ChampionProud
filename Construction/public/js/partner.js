window.onload=function(){
    $(".container_target").attr("class","container_target fade in");
    $(".item_block").attr("class","item_block fade in");
    $(".item_block:nth-child(2)").attr("class","item_block fade1 in");
    $(".item_block:nth-child(3)").attr("class","item_block fade2 in");
    $(".item_block:nth-child(4)").attr("class","item_block fade3 in");
    $(".item_block:nth-child(5)").attr("class","item_block fade4 in");
    $(".item_block:nth-child(6)").attr("class","item_block fade5 in");
    $(".item_block:nth-child(7)").attr("class","item_block fade in");
    $(".item_block:nth-child(8)").attr("class","item_block fade1 in");
    $(".item_block:nth-child(9)").attr("class","item_block fade2 in");
    $(".item_block:nth-child(10)").attr("class","item_block fade3 in");
    $(".item_block:nth-child(11)").attr("class","item_block fade4 in");
    $(".item_block:nth-child(12)").attr("class","item_block fade5 in");
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