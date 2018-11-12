//header导航栏中的li
(function(){
    document.querySelector("ul.nav>:first-child").className="active";
    var lis=document.querySelectorAll("ul.nav>li")
    for(var li of lis){
        li.onclick=function(e){
            e.preventDefault();
            for(var li of lis){
                li.className="";
            }
            this.className="active";
        }
    }
})();