const express=require('express');
const utils=require('utility');
const router=express.Router();
const model=require('./model');
const User=model.getModel('user');

//定义统一的查询条件，过滤掉我们不需要的数据
const _filter={
    pwd:0,
    __v:0
};

//给后端调试用的一个接口
router.get('/list',function(req,res){
    // User.remove({});
   User.find({},function(err,doc){
       res.json(doc)
   })
});

//登录功能
router.post('/login',function(req,res){
    const {user,pwd}=req.body;
    User.findOne({user,pwd:md5Pwd(pwd)},_filter,function(err,doc){
        if(!doc){
            res.status(500).json({
                code:1,
                msg:'用户名或者密码错误'
            })
        }

        res.cookie('userid',doc._id);

        res.status(200).json({
            code:0,
            data:doc
        })
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
        User.create({user,type,pwd:md5Pwd(pwd)},function(e,d){
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

//验证用户是否登录
router.get('/info',function(req,res){
    const {userid}=req.cookies;
    if(!userid){
        //用户有没有cookie
        res.json({
            code:1
        })
    }

    User.findOne({_id:userid},_filter,function(err,doc){
        if(err){
            res.status(500).json({
                code:1,
                msg:'系统错误'
            })
        }
        if(doc){
            res.status(200).json({
                code:0,
                data:doc
            })
        }
    })

});

function md5Pwd(pwd){
    const salt='yanle_is_good_19920106!@#$';
    return utils.md5(utils.md5(pwd+salt));
}

module.exports=router;