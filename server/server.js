const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const app = express()

//socketio用于express
const server=require('http').Server(app);
const io=require('socket.io')(server);

io.on('connection',function(socket){
	// console.log(`user is login`);

    //接受前端反馈过来的信息信息
	socket.on('sendMessage',function(data){
		console.log(data);

		//把接受的信息广播到全局
        io.emit('receiveMessage',data);
	})
});


const userRouter = require('./user')


app.use(cookieParser())
app.use(bodyParser.json())
app.use('/user',userRouter)
server.listen(8082,function(){
	console.log('Node app start at port 8082')
})



