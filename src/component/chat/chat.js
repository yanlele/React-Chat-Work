import React from 'react'
import {List, InputItem} from 'antd-mobile'
import io from 'socket.io-client'

//定义一个客户端的socket链接
const socket = io('ws://localhost:8082');


class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: '',message:[]}
    }

    componentDidMount() {
        //接受后端反馈过来的信息
        socket.on('receiveMessage',  (data)=> {
            console.log(data);
            this.setState({
                message:[...this.state.message,data.text]
            })
        });
    }

    handleSubmit() {
        //想后端发送信息
        socket.emit('sendMessage', {text: this.state.text});
        this.setState({
            text: ''
        })
    }


    render() {
        return (
            <div>
                {this.state.message.map(v=>{
                    return <p key={v}>{v}</p>
                })}

                <div className="stick-footer">
                    <List>
                        <InputItem
                            placeholder="请输入"
                            value={this.state.text}
                            onChange={v => {
                                this.setState({text: v})
                            }}
                            extra={<span onClick={() => {
                                this.handleSubmit()
                            }}>发送</span>}
                        >
                        </InputItem>
                    </List>
                </div>
            </div>
        )
    }
}

export default Chat