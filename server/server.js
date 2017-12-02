const express=require('express');
const mongoose =require('mongoose');

//链接mongodb 并且使用002_reactMall数据库
const DB_URL='mongodb://127.0.0.1:27017/002_reactMall';
mongoose.connect(DB_URL);
mongoose.connection.on('connected',function(){
   console.log('mongodb connect success!')
});

//创建类似于mysql的表 mongo里面有文档和字段的概念
const User =mongoose.model('user',new mongoose.Schema({
    user:{
        type:String,
        require:true
    },
    age:{
        type:Number,
        require:true
    }
}));

/*
User.create({
    user:'yanle',
    age:25
},function(err,doc){
    if(!err){
        console.log(doc)
    }else{
        console.log(err)
    }
});
*/

//新建一个app
const app=express();

app.get('/',function(req,res,next){
    User.find({},function(err,doc){
        res.json(doc)
    })
   // res.send('<h1>Hello word</h1>');
});

app.get('/data',function(req,res){
    res.json({
        name:'yanle for react app',
        type:'json'
    })
});

app.listen(8082,function(){
   console.log('Node app start to port 8082')
});