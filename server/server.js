const express=require('express');
const mongoose =require('mongoose');

//链接mongodb
const DB_URL='mongodb://127.0.0.1:27017/002_reactMall';
mongoose.connect(DB_URL);
mongoose.connection.on('connected',function(){
   console.log('mongodb connect success!')
});

//新建一个app
const app=express();

app.get('/',function(req,res,next){
   res.send('<h1>Hello word</h1>');
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