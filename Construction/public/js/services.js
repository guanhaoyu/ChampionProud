var $services=$("#services");
$.ajax({
    url:"http://127.0.0.1:3030/services/services",
    type:"get",
    success:(res)=>{
        console.log(res)
        var html=""
        for(var i=0;i<8;i++){
            html+=`
            <div class="service" data-a=${i}>
            <img src="${res[i].img_url}">
            <div>
            <p id="t1">0${res[i].uid} /</p>
            <p class="">${res[i].title}</p>
            <p>${res[i].exp}</p>
            </div>
            </div>
            `
        }
        $services.html(html)
    }
})

$services.children().hover(
    function(){
        console.log($(this));
        $(this).css("background-color","#9e9e9e")
    },
    function(){
        $(this).css("background-color","#282828")
    }
)

var advance=$("#close>div:nth-child(1)");
var draw=$("#close>div:nth-child(2)");
var close=$("#close>div:nth-child(3)");
var explain=$("#explain")
var move=$("#banner>div");
var width=740;
var font2=$("#font>span>div")
var i=0;
draw.on("click",function(){
    i++;
    if(i>=8){
        i=7
    }
    move.css("left",-i*width)
    font2.css("top",-i*60)
})
advance.on("click",function(){
    i--;
    if(i<=0){
        i=0
    }
    move.css("left",-i*width)
    font2.css("top",-i*60)
})
close.on("click",function(){
    explain.css({"height":0,"padding":0,"border":0})
})
var services=$("#services");
services.on("click",".service",function(){
    console.log($(this).attr("data-a"))
    i=$(this).attr("data-a")
    move.css("left",-i*width)
    font2.css("top",-i*60)
    explain.css({"height":254,"padding-bottom": 50,"padding-top": 50,"border-top":"1px solid #232323","border-bottom":"1px solid #232323"})
})

