const express = require('express');
const bodyParser=require('body-parser');
const cookieParser=require('cookie-parser');

const userRouter = require('./user');

//新建一个app
const app = express();
app.use(cookieParser());
app.use(bodyParser.json());

app.use('/user', userRouter);

app.listen(8082, function () {
    console.log('Node app start to port 8082')
});