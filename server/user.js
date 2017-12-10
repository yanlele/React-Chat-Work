const express=require('express');
const router=express.Router();

router.get('/info',function(req,res){
    //用户有没有cookie
    res.json({
        code:1
    })
});


module.exports=router;