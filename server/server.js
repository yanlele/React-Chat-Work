const express=require('express');

//新建一个app
const app=express();

app.get('/',function(req,res,next){
   res.send('<h1>Hello word</h1>');
});

app.listen(8082,function(){
   console.log('Node app start to port 8082')
});