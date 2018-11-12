const express=require("express");
const bodyParser=require("body-parser");
const index=require("./routes/index");

var main=express();
var server=main.listen(2000,()=>{
    console.log("启航！");
});
//使用body-parser中间件
main.use(bodyParser.urlencoded({extended:false}));
main.use(express.static("public"));
/*使用路由器来管理路由*/
main.use("/index",index);