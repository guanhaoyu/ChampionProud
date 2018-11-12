const express=require("express");
const router=express.Router();
const pool=require("../pool");

//index/
router.get('/',(req,res)=>{
    var obj={zuixin:[],xinwen:[],gonggao:[],huodong:[],xinshou:[],jinjie:[]};
    (async function(){
        var sql=`select * from jianniang_info order by id desc limit 0,6`;
        await new Promise(function(open){
            pool.query(sql,[],(err,result)=>{
            if(err) console.log(err);
            obj.zuixin=result;
            open();
            });
        });
        var sql=`select * from jianniang_info where category="【新闻】" order by id desc limit 0,6`;
        await new Promise(function(open){
            pool.query(sql,[],(err,result)=>{
                if(err) console.log(err);
                obj.xinwen=result;
                open();
            });
        })
        var sql=`select * from jianniang_info where category="【公告】" order by id desc limit 0,6`;
        await new Promise(function(open){
            pool.query(sql,[],(err,result)=>{
                if(err) console.log(err);
                obj.gonggao=result;
                open();
            });
        })
        var sql=`select * from jianniang_info where category="【活动】" order by id desc limit 0,6`;
        await new Promise(function(open){
            pool.query(sql,[],(err,result)=>{
                if(err) console.log(err);
                obj.huodong=result;
                open();
            });
        })
        var sql=`select * from jianniang_stra where category="【新人指南】" order by id desc limit 0,5`;
        await new Promise(function(open){
            pool.query(sql,[],(err,result)=>{
                if(err) console.log(err);
                obj.xinshou=result;
                open();
            })
        })
        var sql=`select * from jianniang_stra where category="【进阶挑战】" order by id desc limit 0,5`;
        await new Promise(function(open){
            pool.query(sql,[],(err,result)=>{
                if(err) console.log(err);
                obj.jinjie=result;
                open();
            })
        })
        res.send(obj);
    })();
});

module.exports=router;