/*var t = 1;
var box1 = $(".box1");
var box2 = $(".box2");
var box3 = $(".box3");
$(".icon-prev").click(function(){
  clearInterval(timer);
    switch(t){
        case 4: box1.css("left","-2400px");
                box2.css("left","-2400px");
                box3.css("left","-2400px");
                t--;
                break;
        case 3: box1.css("left","-1200px");
                box2.css("left","-1200px");
                box3.css("left","-1200px");
                t--;
                break;
        case 2: box1.css("left","0px");
                box2.css("left","0px");
                box3.css("left","0px");
                t--;
                break;
        case 1: box1.css("left","-3600px");
                box2.css("left","-3600px");
                box3.css("left","-3600px");
                t=4;
                break;
    }
})
$(".icon-next").click(function(){
  clearInterval(timer);
    switch(t){
        case 1: box1.css("left","-1200px");
                box2.css("left","-1200px");
                box3.css("left","-1200px");
                t++;
                break;
        case 2: box1.css("left","-2400px");
                box2.css("left","-2400px");
                box3.css("left","-2400px");
                t++;
                break;
        case 3: box1.css("left","-3600px");
                box2.css("left","-3600px");
                box3.css("left","-3600px");
                t++;
                break;
        case 4: box1.css("left","0px");
                box2.css("left","0px");
                box3.css("left","0px");
                t=1;
                break;
    }
})
var timer = setInterval(function(){
  switch(t){
    case 1: box1.css("left","-1200px");
            box2.css("left","-1200px");
            box3.css("left","-1200px");
            t++;
            break;
    case 2: box1.css("left","-2400px");
            box2.css("left","-2400px");
            box3.css("left","-2400px");
            t++;
            break;
    case 3: box1.css("left","-3600px");
            box2.css("left","-3600px");
            box3.css("left","-3600px");
            t++;
            break;
    case 4: box1.css("left","0px");
            box2.css("left","0px");
            box3.css("left","0px");
            t=1;
            break;
  }
},3000);*/
var prev = $(".owl-prev");
var next = $(".owl-next");
var i=$(this).attr("data-a")
prev.on("click",function(){
  i++;
  if(i>=8){
      i=7
  }
  move.css("left",-i*width)
  font2.css("top",-i*66)
})
next.on("click",function(){
  i--;
  if(i<=0){
      i=0
  }
  move.css("left",-i*width)
  font2.css("top",-i*66)
})
$(".close").click(function(){
  $(".tab-content").css("height","0");
  $(".tab-content").css("padding-bottom","0");
  $(".tab-content").css("padding-top","0");
  $(".tab-button").css("margin-top","-20px");
})

$(".tab-button>div>a").click(function(){
  var a = $(this);
  $(".tab-content").css("height","254px");
  $(".tab-content").css("padding-bottom","50px");
  $(".tab-content").css("padding-top","50px");
  $(".tab-button").css("margin-top","70px");
})

var width = 880;
var move=$(".tab-box");
var font2=$(".number-box")
var services=$("#services");
services.on("click",".tab-item>a",function(){
    console.log($(this).attr("data-a"))
    i=$(this).attr("data-a")
    move.css("left",-i*width)
    font2.css("top",-i*66)
})

/*canvas*/
particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);


var swiper = new Swiper('.swiper-container', {
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});



/* 下面是ajax请求 */

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


//鼠标滚轮事件
var d = 0;
window.onscroll=function(){
  if(d == 0){
    var t = document.documentElement.scrollTop||document.body.scrollTop;
    //服务部分
    var elem = $("#service");
    if(t == 0){
      $("#up").attr("class","up fade");
    }
    if(t>0){
      $("#up").attr("class","up fade in");
      elem.attr("class","service fade in");
    }
    if(t<=0){
      elem.attr("class","service fade");
    }
    if(t>=200){
      $("#service_header").attr("class","service_header fade_header in_header");
    }
    if(t<200){
      $("#service_header").attr("class","service_header fade_header");
    }
    if(t>=600){
      $("#service_container").attr("class","service_container fade in");
    }
    if(t<600){
      $("#service_container").attr("class","service_container fade");
    }
    if(t>=900){
      $("#project_header").attr("class","container_header fade_header in_header");
    }
    if(t<900){
      $("#project_header").attr("class","container_header fade_header");
    }
    if(t>=1050){
      $("#pro_container_list").attr("class","pro_container_list fade in");
    }
    if(t<1050){
      $("#pro_container_list").attr("class","pro_container_list fade");
    }
    if(t>=1200){
      $("#project_content").attr("class","container_content fade in");
    }
    if(t<1200){
      $("#project_content").attr("class","container_content fade");
    }
    if(t>=1700){
      $("#about").attr("class","about fade in");
    }
    if(t<1700){
      $("#about").attr("class","about fade");
    }
    if(t>=1800){
      $("#text-wrapper").attr("class","text-wrapper fade_right in_right");
    }
    if(t<1800){
      $("#text-wrapper").attr("class","text-wrapper fade_right");
    }
    if(t>=1800){
      $("#mediabody").attr("class","mediabody fade_left in_left");
    }
    if(t<1800){
      $("#mediabody").attr("class","mediabody fade_left");
    }
    if(t>=2300){
      $("#module").attr("class","module fade in");
    }
    if(t<2300){
      $("#module").attr("class","module fade");
    }
    // if(t>=2400){
    //   $("#team").attr("class","team fade in");
    // }
    // if(t<2400){
    //   $("#team").attr("class","team fade");
    // }
    // if(t>=2500){
    //   $("#team_header").attr("class","team_header fade_header in_header");
    // }
    // if(t<2500){
    //   $("#team_header").attr("class","team_header fade_header");
    // }
    // if(t>=2800){
    //   $("#swiper-container").attr("class","swiper-container fade in")
    // }
    // if(t<2800){
    //   $("#swiper-container").attr("class","swiper-container fade")
    // }
    if(t>=2600){
      $("#news_header").attr("class","container_header fade_header in_header");
    }
    if(t<2600){
      $("#news_header").attr("class","container_header fade_header");
    }
    if(t>=2800){
      $("#container_list").attr("class","container_list fade in");
    }
    if(t<2800){
      $("#container_list").attr("class","container_list fade");
    }
    if(t>=3000){
      $("#first").attr("class","first fade in");
    }
    if(t<3000){
      $("#first").attr("class","first fade");
    }
    if(t>=3200){
      $("#two").attr("class","two fade in");
    }
    if(t<3200){
      $("#two").attr("class","two fade");
    }
    if(t>=3500){
      $("#partner_header").attr("class","container_header fade_header in_header");
    }
    if(t<3500){
      $("#partner_header").attr("class","container_header fade_header");
    }
    if(t>=3700){
      $("#partner_content").attr("class","partner_content fade in");
    }
    if(t<3700){
      $("#partner_content").attr("class","partner_content fade");
    }
    if(t>=4200){
      $("#contact_header").attr("class","container_header fade_header in_header")
    }
    if(t<4200){
      $("#contact_header").attr("class","container_header fade_header")
    }
    if(t>=4200){
      $("#contactinfo").attr("class","contactinfo fade_left in_left")
    }
    if(t<4200){
      $("#contactinfo").attr("class","contactinfo fade_left")
    }
    if(t>=4200){
      $("#contactform").attr("class","contactform fade_right in_right")
    }
    if(t<4200){
      $("#contactform").attr("class","contactform fade_right");
    }
  }
}

//
  $(".container_category a").hover(//给目标元素绑定hover事件
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
      }       
  }

//项目遮罩层
$(".project_item").hover(//给目标元素绑定hover事件
    function(e){
        movede.call(this,e,true)//移入
    },
    function(e){
        movede.call(this,e,false)//移出
    }
);
function movede(e,bool){
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
                $(this).find(".item_wrapper").css({
                    left:0,
                    top:-300
                }).stop().animate({top:0},300);
            }else{
                $(this).find(".item_wrapper").stop().animate({top:-300},300);
            }
            break;
        case sB:
            if(bool){
                $(this).find(".item_wrapper").css({
                    left:0,
                    top:300
                }).stop().animate({top:0},300);
            }else{
                $(this).find(".item_wrapper").stop().animate({top:300},300);
            }
            break;
        case sL:
            if(bool){
                $(this).find(".item_wrapper").css({
                    left:-300,
                    top:0
                }).stop().animate({left:0},300);
            }else{
                $(this).find(".item_wrapper").stop().animate({left:-300},300);
            }
            break;
        case sR:
            if(bool){
                $(this).find(".item_wrapper").css({
                    left:300,
                    top:0
                }).stop().animate({left:0},300);
            }else{
                $(this).find(".item_wrapper ").stop().animate({left:300},300);
            }
            break;
    }       
}



$(".partner_list .item-partner a").hover(//给目标元素绑定hover事件
  function(e){
      moved.call(this,e,true)//移入
  },
  function(e){
      moved.call(this,e,false)//移出
  }
);
function moved(e,bool){
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
              $(this).find(".partner_mask").css({
                  left:0,
                  top:-200,
                  opacity:1
              }).stop().animate({top:0},300);
          }else{
              $(this).find(".partner_mask").stop().animate({top:-300},300);
          }
          break;
      case sB:
          if(bool){
              $(this).find(".partner_mask").css({
                  left:0,
                  top:200,
                  opacity:1
              }).stop().animate({top:0},300);
          }else{
              $(this).find(".partner_mask").stop().animate({top:300},300);
          }
          break;
      case sL:
          if(bool){
              $(this).find(".partner_mask").css({
                  left:-200,
                  top:0,opacity:1
              }).stop().animate({left:0},300);
          }else{
              $(this).find(".partner_mask").stop().animate({left:-300},300);
          }
          break;
      case sR:
          if(bool){
              $(this).find(".partner_mask").css({
                  left:200,
                  top:0,opacity:1
              }).stop().animate({left:0},300);
          }else{
              $(this).find(".partner_mask").stop().animate({left:300},300);
          }
          break;
  }       
}


window.onload = function(){
  $("#lunbo").attr("class","lunbo fade in");message();
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

$("#lianjie").click(function(){
  $("#about_zh").css("z-index","999999");
  $("#about_zh").css("opacity","1");
  unScroll();
})
$("#about_zh").click(function(){
  $("#about_zh").css("z-index","-1");
  $("#about_zh").css("opacity","0");
  removeUnScroll();
})

function Top(){
  $('body,html').animate({'scrollTop':0},300)
}
$("#up").click(function(){
  Top();
})