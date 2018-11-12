const express = require("express");
const pool = require("../pool");

var router = express.Router();

router.post("/add",(req,res)=>{
    var body = req.body;
    var uname = body.uname;
    var email = body.email;
    var phone = body.phone;
    var content = body.content;
    if(!uname){
        res.send({code:-1,msg:"用户名不能为空"});
        return;
    }
    if(!email){
        res.send({code:-1,msg:"用户名不能为空"});
        return;
    }
    if(!phone){
        res.send({code:-1,msg:"用户名不能为空"});
        return;
    }
    if(!content){
        res.send({code:-1,msg:"用户名不能为空"});
        return;
    }
    var sql = "insert into users values(NULL,?,?,?,?)";
    pool.query(sql,[uname,email,phone,content],(err,result)=>{
        if (err) throw err;
        res.send({code:1,msg:"添加成功"});
    })
})

router.get("/show",(req,res)=>{
    var uname = req.query.uname;
    var content = req.query.content;
    var sql = `select uname as a,content as c from users`;
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.send({code:1,msg:result});
    })
})

module.exports = router;