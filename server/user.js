const express=require('express');
const utils=require('utility');
const router=express.Router();
const model=require('./model');
const User=model.getModel('user');

router.get('/list',function(req,res){
   User.find({},function(err,doc){
       res.json(doc)
   })
});

//注册功能
router.post('/register',function(req,res){
    console.log(req.body);
    const {user,pwd,type}=req.body;
    User.findOne({user:user},function(err,doc){
        if(doc){
            res.json({
                code:1,
                msg:'用户名重复'
            })
        }

        //数据入库
        User.create({user,type,pwd:utils.md5(pwd)},function(e,d){
            if(e){
                res.json({
                    code:1,
                    msg:'系统错误'
                })
            }else{
                res.json({
                    code:0,
                    msg:'注册成功'
                })
            }
        })
    })
});

router.get('/info',function(req,res){
    //用户有没有cookie
    res.json({
        code:1
    })
});

module.exports=router;