const express = require('express');
const userRouter = require('./user');

//新建一个app
const app = express();
app.use('/user', userRouter);

app.listen(8082, function () {
    console.log('Node app start to port 8082')
});