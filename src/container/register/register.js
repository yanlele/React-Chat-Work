import React from 'react'
import Logo from '../../component/logo/logo'
import {List,InputItem,Radio,WingBlank,WhiteSpace,Button} from 'antd-mobile'


class Register extends React.Component{
    constructor(props){
        super(props);
        this.state={
            user:'',
            pwd:'',
            repeatpwd:'',
            type:'genius',
        }
    }

    handleChange(key, val){
        this.setState({
            [key]:val
        })
    }

    handleRegister(){
        console.log(this.state)
    }

    render(){
        const RadioItem=Radio.RadioItem;
        return(
            <div>
                <Logo/>
                <h2>注册页</h2>
                <List>
                    <InputItem
                        onChange={v=>this.handleChange('user',v)}
                    >用户</InputItem>
                    <InputItem
                        type='password'
                        onChange={v=>this.handleChange('pwd',v)}
                    >密码</InputItem>
                    <InputItem
                        type='password'
                        onChange={v=>this.handleChange('repeatpwd',v)}
                    >确认密码</InputItem>
                    <WhiteSpace/>
                    <RadioItem
                        checked={this.state.type==='genius'}
                        onChange={()=>this.handleChange('type','genius')}
                    >
                        牛人
                    </RadioItem>
                    <RadioItem
                        onChange={()=>this.handleChange('type','boss')}
                        checked={this.state.type==='boss'}
                    >
                        Boss
                    </RadioItem>
                    <WhiteSpace/>
                    <Button
                        type="primary"
                        onClick={this.handleRegister.bind(this)}
                    >提交</Button>
                </List>
            </div>
        )
    }
}

export default Register;