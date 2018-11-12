var lb=document.getElementById("icon-prev");
var rb=document.getElementById("icon-next");
var ul=document.querySelectorAll(".wrapper_container ul");
var ul1=document.querySelectorAll(".wrapper_container ul")[0];
var ul2=document.querySelectorAll(".wrapper_container ul")[1];
var ul3=document.querySelectorAll(".wrapper_container ul")[2];
var probar=document.getElementById("probar");
var animated=false;
var timer=null;
var pro=0;
var progress=null;

function animate(offset){
    var newLeft=[];
	for(var i=0;i<ul.length;i++){
		newLeft[i]=parseInt(ul[i].style.left)+offset;
	}
    var time=500;
    var interval=10;
    var speed=offset/(time/interval);
    function go(){
        if(speed<0 && parseInt(ul2.style.left)>newLeft[1]-speed || speed>0 && parseInt(ul2.style.left)<newLeft[1]-speed){
			for(var i=0;i<ul.length;i++){
				ul[i].style.left=parseInt(ul[i].style.left)+speed+"px";
			}
			if(speed<0) speed+=0.23;
			else speed-=0.23;
            setTimeout(go, interval);
        }else{
			for(var i=0;i<ul.length;i++){
				ul[i].style.left=newLeft[i]+"px";
			}
			if(newLeft[1]<-1200*4){
				for(var i=0;i<ul.length;i++){
					if(i>=1) ul[i].style.left=-1200+"px";
					else ul[i].style.left=-2315+"px";
				}
			}
			if(newLeft[1]>-1200){
				for(var i=0;i<ul.length;i++){
					if(i>=1) ul[i].style.left=-4800+"px";
					else ul[i].style.left=-5915+"px";
				}
			}
			animated=false;
		}
	}
	animated=true;
	go();
}

rb.onclick=function(){
	if(!animated){
		clearInterval(progress);
		animate(-1200);
		pro=0;
		probar.style.width=0;
		autoplay();
	}
}
lb.onclick=function(){
	if(!animated){
		clearInterval(progress);
		animate(1200);
		pro=0;
		probar.style.width=0;
		autoplay();
	}
}

function autoplay(){
	progress=setInterval(function(){
		pro++;
		probar.style.width=pro+"%";
		if(pro>100){
			rb.onclick();
		}
	},50);
}
autoplay();