import React from 'react'
import {List,InputItem} from 'antd-mobile'
import io from 'socket.io-client'

class Chat extends React.Component{
    constructor(props){
        super(props);
        this.state={text:''}
    }

    componentDidMount(){
        const socket=io('ws://localhost:8082');
    }

    handleSubmit(){
        console.log(this.state);
    }


    render(){
        console.log(this.props)

        return (
            <div className="stick-footer">
                <List>
                    <InputItem
                        placeholder="请输入"
                        value={this.state.text}
                        onChange={v=>{
                            this.setState({text:v})
                        }}
                        extra={<span onClick={()=>{this.handleSubmit()}}>发送</span>}
                    >
                        信息
                    </InputItem>
                </List>
            </div>
        )
    }
}

export default Chat