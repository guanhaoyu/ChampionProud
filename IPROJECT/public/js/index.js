//header导航栏中的li
(function(){
    document.querySelector("ul.nav>:first-child").className="active";
    var lis=document.querySelectorAll("ul.nav>li")
    for(var li of lis){
        li.onclick=function(){
            for(var li of lis){
                li.className="";
            }
            this.className="active";
        }
    }
})();
/*大轮播*/
(function(){
    var imgsUl=document.getElementById("F0_wrapper").getElementsByTagName("ul")[0];
    var imgs=imgsUl.getElementsByTagName("li");
    var animated=false;
    var timer;
    var img_i=1;
    var turnFade=false;
    var index=1;
    var btns=document.getElementById("F0_buttons").getElementsByTagName("a");
    imgs[0].className="fade";
    function fade(){
        for(var i=1;i<imgs.length-1;i++){
            if(i==img_i){
                imgs[i].className="";
            }else{
                imgs[i].className="fade";
            }
        }
        if(img_i<5){
            img_i++;
        }else{
            img_i=0;
        }
    }
    function delay(time){
        var start=new Date().getTime();
        do{
            var end=new Date().getTime();
        }while(end-start<1000);
    }
    //按钮切换
    for(var i=0;i<btns.length;i++){
        btns[i].onclick=function(){
            if(animated || this.className=="active"){
                return false;
            }
            clearInterval(timer);
            var newIndex=parseInt(this.getAttribute("index"));
            if(newIndex>index){
                var offset=(index-newIndex)*1150; 
            }else{
                var offset=false;
            }
            index=newIndex;
            showButton();
            animate(offset);
            timer=setInterval(function(){
                if(!animated){
                    if(index<4){
                        index++;
                    }else{
                        index=1;
                    }
                    showButton();
                    animate(-1150);
                }
            },5000);
        }
    }
    //按钮高亮
    function showButton(){
        for(var i=0;i<btns.length;i++){
            if(btns[i].className=="active"){
                btns[i].className="";
                break;
            }
        }
        btns[index-1].className="active";
        img_i=index;
    }
    function animate(offset){
        if(!offset){
            imgsUl.style.left="0px";
            offset=-index*1150;
        }
        var newLeft=parseInt(imgsUl.style.left)+offset;
        var time=200;
        var interval=10;
        var speed=offset/(time/interval);
        function go(){
            if(turnFade){
                fade();
                turnFade=false;
                setTimeout(go,300);
            }else if(speed>0&&parseInt(imgsUl.style.left)<newLeft-speed || speed<0&&parseInt(imgsUl.style.left)>newLeft-speed){
                imgsUl.style.left=parseInt(imgsUl.style.left)+speed+"px";
                setTimeout(go, interval);
            }else{
                imgsUl.style.left=newLeft+"px";
                if(newLeft>-1150){
                    imgsUl.style.left=-1150*4+"px";
                    img_i=4;
                }
                if(newLeft<-1150*4){
                    imgsUl.style.left=-1150+"px";
                    img_i=1;
                }
                animated=false;
            }
        }
        animated=true;
        turnFade=true;
        go();
    }
    function autoPlay(){
        setTimeout(() => {
            animate(-1150);
            img_i=1;
        }, 100);
        timer=setInterval(function(){
            if(!animated){
                if(index<4){
                    index++;
                }else{
                    index=1;
                }
                showButton();
                animate(-1150);
            }
        },5000)
    }
    autoPlay();
})();
/*1楼轮播*/
(function(){
    var imgs=document.getElementById("F1_list").getElementsByTagName("ul")[0];
    var btns=document.getElementById("F1_buttons").getElementsByTagName("a");
    var animated=false;
    var timer;
    var index=1; 
    //按钮切换
    for(var i=0;i<btns.length;i++){
        btns[i].onclick=function(){
            if(animated||this.className=="on"){
                return false;
            }
            clearInterval(timer);
            var newIndex=parseInt(this.getAttribute("index"));
            var offset=-542*(newIndex-index);
            animate(offset);
            index=newIndex;
            showButton();
            timer=setInterval(function(){
                if(!animated){
                    if(index<3){
                        index++;
                        showButton();
                    }else{
                        index=1;
                        showButton();
                    }
                    animate(-542);
                }
            },5000);
        }
    }
    function showButton(){
        for(var i=0;i<btns.length;i++){
            if(btns[i].className=="on"){
                btns[i].className="";
                break;
            }
        }
        btns[index-1].className="on";
    }
    function animate(offset){
        var newLeft=parseInt(imgs.style.left)+offset;
        var time=100;
        var interval=10;
        var speed=offset/(time/interval);
        animated=true;
        function go(){
            if(speed>0&&parseInt(imgs.style.left)<newLeft-15 || speed<0&&parseInt(imgs.style.left)>newLeft+15){
                imgs.style.left=parseInt(imgs.style.left)+speed+"px";
                setTimeout(go, interval);
            }else{
                imgs.style.left=newLeft+"px";
                
                if(newLeft>-542){
                    imgs.style.left=-542*3+"px";
                }
                if(newLeft<-542*3){
                    imgs.style.left=-542+"px";
                }
                animated=false
            }
        }
        go();
    }
    function autoPlay(){
        timer=setInterval(function(){
            if(!animated){
                if(index<3){
                    index++;
                    showButton();
                }else{
                    index=1;
                    showButton();
                }
                animate(-542);
            }
        },5000);
    }
    autoPlay();
})();


//1楼多标签页
(function(){
    document.getElementById("content1").className="show";
    document.querySelector(".F1>:last-child>ul>li:first-child").className="active";
    document.querySelector(".F1>:last-child>ul>li:first-child>a").className="active";
    var tabs=document.querySelectorAll("[data-toggle=tab]");
    for(var tab of tabs){
        tab.onclick=function(e){
            e.preventDefault();
            var tab=this;
            for(var t of tabs){
                t.className="";
            }
            this.className="active";
            var lis=document.querySelectorAll(".F1>:last-child>ul>li")
            for(var li of lis){
                li.className="";
            }
            this.parentNode.className="active";
            var divs=document.querySelectorAll("#container>div");
            for(var div of divs){
                div.className="";
            }
            var id=tab.getAttribute("data-target");
            document.querySelector(id).className="show";
        }
    }
})();
//1楼多标签页中的文字
//content1
(async function(){
    var res=await ajax({
        url:"http://127.0.0.1:2000/index/",
        type:"get",
        dataType:"json"
    });
    var zuixin=res['zuixin'];
    var html="";
    for(var i=0;i<=5;i++){
        html+=`<li>
        <a href="#">
            <span class="category">${zuixin[i]['category']}</span>
            <span class="title">${zuixin[i]['title']}</span>
            <span class="time">${zuixin[i]['jianniang_info_time']}</span>
        </a>
    </li>`;
    }
    var parent=document.querySelector("#content1>ul");
    parent.innerHTML=html;
})();
//content2
(async function(){
    var res=await ajax({
        url:"http://127.0.0.1:2000/index/",
        type:"get",
        dataType:"json"
    });
    var xinwen=res['xinwen'];
    var html="";
    for(var xw of xinwen){
        html+=`<li>
        <a href="#">
            <span class="category">${xw['category']}</span>
            <span class="title">${xw['title']}</span>
            <span class="time">${xw['jianniang_info_time']}</span>
        </a>
    </li>`;
    }
    var parent=document.querySelector("#content2>ul");
    parent.innerHTML=html;
})();
//content3
(async function(){
    var res=await ajax({
        url:"http://127.0.0.1:2000/index/",
        type:"get",
        dataType:"json"
    });
    var gonggao=res['gonggao'];
    var html="";
    for(var gg of gonggao){
        html+=`<li>
        <a href="#">
            <span class="category">${gg['category']}</span>
            <span class="title">${gg['title']}</span>
            <span class="time">${gg['jianniang_info_time']}</span>
        </a>
    </li>`;
    }
    var parent=document.querySelector("#content3>ul");
    parent.innerHTML=html;
})();
//content4
(async function(){
    var res=await ajax({
        url:"http://127.0.0.1:2000/index/",
        type:"get",
        dataType:"json"
    });
    var huodong=res['huodong'];
    var html="";
    for(var hd of huodong){
        html+=`<li>
        <a href="#">
            <span class="category">${hd['category']}</span>
            <span class="title">${hd['title']}</span>
            <span class="time">${hd['jianniang_info_time']}</span>
        </a>
    </li>`;
    }
    var parent=document.querySelector("#content4>ul");
    parent.innerHTML=html;
})();

//3楼多标签页
(function(){
    document.getElementById("F3_content1").className="show";
    document.querySelector("#F3_tab>li:first-child>a").className="active";
    var tabs = document.querySelectorAll("[data-toggle=F3_tab]");
    for(var tab of tabs){
        tab.onclick=function(e){
            e.preventDefault();
            var tab=this;
            for(var t of tabs){
                t.className="";
            }
            tab.className="active";
            var divs=document.querySelectorAll("#F3_container>div");
            for(var div of divs){
                div.className="";
            }
            var id=tab.getAttribute("data-target");
            document.querySelector(id).className="show";
        }
    }
})();
//3楼多标签页文字
(async function(){
    var res=await ajax({
        url:"http://127.0.0.1:2000/index/",
        type:"get",
        dataType:"json"
    });
    var xinshou=res["xinshou"];
    var html="";
    for(var xs of xinshou){
        html+=`<li><a href="#"><span class="category">${xs["category"]}</span><span class="title">${xs["title"]}</span><span class="time">${xs["jianniang_stra_time"]}</span></a></li>`;
    }
    document.querySelector("#F3_content1>ul").innerHTML=html;
})();
(async function(){
    var res=await ajax({
        url:"http://127.0.0.1:2000/index/",
        type:"get",
        dataType:"json"
    });
    var jinjie=res["jinjie"];
    var html="";
    for(var jj of jinjie){
        html+=`<li><a href="#"><span class="category">${jj["category"]}</span><span class="title">${jj["title"]}</span><span class="time">${jj["jianniang_stra_time"]}</span></a></li>`;
    }
    document.querySelector("#F3_content2>ul").innerHTML=html;
})();
(async function(){
    var res=await ajax({
        url:"http://127.0.0.1:2000/index/",
        type:"get",
        dataType:"json"
    });
    var huodong=res['huodong'];
    var html="";
    for(var hd of huodong.slice(0,5)){
        html+=`<li>
        <a href="#">
            <span class="category">${hd['category']}</span>
            <span class="title">${hd['title']}</span>
            <span class="time">${hd['jianniang_info_time']}</span>
        </a>
    </li>`;
    }
    document.querySelector("#F3_content3>ul").innerHTML=html;
})();
//3楼轮播
(function(){
    var imgs=document.getElementById("F3_wrapper").getElementsByTagName("ul")[0];
    var btns=document.getElementById("F3_buttons").getElementsByTagName("a");
    var animated=false;
    var timer;
    var index=1;
    /*按钮切换*/
    for(var i=0;i<btns.length;i++){
        btns[i].onclick=function(){
            if(animated||this.className==`on${index}`){
                return false;
            }
            clearInterval(timer);
            var newIndex=parseInt(this.getAttribute("index"));
            var offset=-624*(newIndex-index);
            animate(offset);
            index=newIndex;
            showButton();
            timer=setInterval(function(){
                if(!animated){
                    if(index<4){
                        index++;
                        showButton();
                    }else{
                        index=1;
                        showButton();
                    }
                    animate(-624);
                }
            },3000);
        }
    }
    function showButton(){
        for(var i=0;i<btns.length;i++){
            if(btns[i].className==`on${i+1}`){
                btns[i].className="";
                break;
            }
        }
        btns[index-1].className=`on${index}`;
    }

    function animate(offset){
        var newLeft=parseInt(imgs.style.left)+offset;
        var time=100;
        var interval=10;
        var speed=offset/(time/interval);
        function go(){
            if(speed>0&&parseInt(imgs.style.left)<newLeft-speed || speed<0&&parseInt(imgs.style.left)>newLeft-speed){
                imgs.style.left=parseInt(imgs.style.left)+speed+"px";
                setTimeout(go,interval);                        
            }else{
                imgs.style.left=newLeft+"px";
                if(newLeft<-624*4){
                    imgs.style.left=-624+"px";
                }
                if(newLeft>-624){
                    imgs.style.left=-624*4+"px";
                }
                animated=false;
            }
        }
        animated=true;
        go(); 
    }
    function autoPlay(){
        timer=setInterval(function(){
            if(!animated){
                if(index<4){
                    index++;
                    showButton();
                }else{
                    index=1;
                    showButton();
                }
                animate(-624);
            }
        },3000);
    }
    autoPlay();
})();

//4楼标签页
(function(){
    document.getElementById("F4_content1").className="show";
    document.querySelector("#F4_tab>li:first-child>a").className="active";
    var tabs=document.querySelectorAll("[data-toggle=F4_tab]");
    for(var tab of tabs){
        tab.onclick=function(e){
            e.preventDefault();
            var tab=this;
            for(var t of tabs){
                t.className="";
            }
            tab.className="active";
            var divs=document.querySelectorAll("#F4_container>div");
            for(var div of divs){
                div.className="";
            }
            var id=tab.getAttribute("data-target");
            document.querySelector(id).className="show";
        }
    }
})();
//5楼
(function(){
    var ul=document.querySelector('.F5>ul');
    function F5_move(){
        if(ul.style.marginLeft=="0px"){
            ul.style.marginLeft="-1130px";
        }else{
            ul.style.marginLeft=0;
        } 
    }
    F5_move();
    setInterval(F5_move,5000);
})()