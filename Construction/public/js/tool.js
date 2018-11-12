var $job=$("#advertiseFor>.job");

$job.on("click",function(){
    if(parseInt($(this).next().css("height"))==0){
        $(this).next().css("height",550)
        console.log($(this).children().last().children())
        $(this).children().last().children().css({"transform":"rotate(225deg)"})
    }else{
        $(this).next().css("height",0)
        $(this).children().last().children().css({"transform":"rotate(45deg)"})
    }
})

$job.hover(
    function(){
        $(this).css("background-color","#282828")
       $(this).children().first().css("color","#fff")
    },
    function(){
        $(this).css("background-color","")
        $(this).children().first().css("color","#9e9e9e")
    }
)


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

  var d = 0;
  window.onscroll=function(){
    if(d == 0){
      var t = document.documentElement.scrollTop||document.body.scrollTop;
      if(t == 0){
          $("#up").attr("class","up fade");
      }
      if(t>0){
          $("#up").attr("class","up fade in");
      }
    }
  }