$("#btn").click(function(){
    var uname = $("#uname").val();
    var email = $("#email").val();
    var phone = $("#phone").val();
    var content = $("#content").val();
    /* 发送数据 */
    $.ajax({
        url:"http://127.0.0.1:3030/users/add",
        type:"post",
        data:`uname=${uname}&email=${email}&phone=${phone}&content=${content}`,
        success:function(res){
            layer.msg('提交成功！！', {
                icon: 1,
                time: 2000 //2秒关闭（如果不配置，默认是3秒）
            }, function(){
                window.location.reload();
            });   
        }
    })
})


//   评论列表
$.ajax({
    url:"http://127.0.0.1:3030/users/show",
    type:"get",
    success:function(data){
        var arr = data.msg;    
        for(var i = 0;i<arr.length;i++){
            var html = "";
            html = `<li class="item mytable">
                <p class="named">${arr[i].a}</p>
                <p class="contented">${arr[i].c}</p>
            </li>`
            var ul = $(".canvas ul");
            ul.html(html+ul.html());
        }
    }
})


var d=0;
window.onscroll=function(){
  if(d==0){
    var t = document.documentElement.scrollTop||document.body.scrollTop;
    if(t>=200){
        $("#contactinfo").attr("class","contactinfo fade in");
    }
    if(t<300){
        $("#contactinfo").attr("class","contactinfo fade");
    }
    if(t>=600){
        $("#canvas").attr("class","canvas mytable fade in");
    }
    if(t<600){
        $("#canvas").attr("class","canvas mytable fade");
    }
    if(t>=600){
        $("#canvas1").attr("class","canvas mytable fade in");
    }
    if(t<600){
        $("#canvas1").attr("class","canvas mytable fade");
    }
    if(t>=700){
        $("#contactform").attr("class","contactform fade in");
    }
    if(t<700){
        $("#contactform").attr("class","contactform fade");
    }
    if(t>=1200){
        $("#container").attr("class","fade in");
    }
    if(t<1200){
        $("#container").attr("class","fade");
    }
    if(t>=1200){
        $("#search").attr("class"," search search-fade search-in");
    }
    if(t<1200){
        $("#search").attr("class"," search search-fade");
    }
  }
}

window.onload = function(){
    $("#banner").attr("class","banner fade in");
    $("#container_header").attr("class","container_header fade_header in_header");
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



  