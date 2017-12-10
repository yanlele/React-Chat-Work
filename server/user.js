const express=require('express');
const router=express.Router();
const model=require('./model');
const User=model.getModel('user');

router.get('/list',function(req,res){
   User.find({},function(err,doc){
       res.json(doc)
   })
});

router.get('/info',function(req,res){
    //用户有没有cookie
    res.json({
        code:1
    })
});


module.exports=router;