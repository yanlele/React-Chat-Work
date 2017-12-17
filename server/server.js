const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const app = express()

//socketio用于express
const server=require('http').Server(app);
const io=require('socket.io')(server);

io.on('connection',function(socket){
	console.log(`user is login`)
});


const userRouter = require('./user')


app.use(cookieParser())
app.use(bodyParser.json())
app.use('/user',userRouter)
server.listen(8082,function(){
	console.log('Node app start at port 8082')
})



