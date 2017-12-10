const mongoose =require('mongoose');

//链接mongodb 并且使用002_reactMall数据库
const DB_URL='mongodb://127.0.0.1:27017/002_reactMall';
mongoose.connect(DB_URL);
mongoose.connection.on('connected',function(){
    console.log('mongodb connect success!')
});
