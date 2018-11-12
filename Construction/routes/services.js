const express=require("express");
const router=express.Router();
var pool=require("../pool.js");

router.get("/services",(req,res)=>{
    var sql="select * from services";
    pool.query(sql,(err,result)=>{
        if(err){throw err}
        res.send(result)
    })
})

module.exports=router