import React from 'react'
import {connect} from 'react-redux'
import {NavBar} from 'antd-mobile'
import {Switch, Route} from 'react-router-dom'
import NavLinkBar from '../navlink/navlink'

function Boss(){
    return <div>Boss首页</div>
}

function Genius(){
    return <div>Genius首页</div>
}

function Msg(){
    return <div>消息首页</div>
}

function User(){
    return <div>User个人中心首页</div>
}


@connect(
    state=>state
)
class Dashboard extends React.Component {

    render() {
        const user=this.props.user;
        const {pathname}=this.props.location;
        console.log(pathname);
        const navList = [
            {
                path:'/boss',
                text:'牛人',
                icon:'boss',
                title:'牛人列表',
                component:Boss,
                hide:user.type==='genius'
            },
            {
                path:'/genius',
                text:'boss',
                icon:'job',
                title:'BOSS列表',
                component:Genius,
                hide:user.type==='boss'
            },
            {
                path:'/msg',
                text:'消息',
                icon:'msg',
                title:'消息列表',
                component:Msg
            },
            {
                path:'/me',
                text:'我',
                icon:'user',
                title:'个人中心',
                component:User
            }
        ];

        return (
            <div>
                <NavBar
                    mode="dard"
                    className="fixd-header"
                >
                    {navList.find(v=>v.path===pathname).title}
                </NavBar>

                <div style={{marginTop:45}}>
                    <Switch>
                        {navList.map((value)=>(
                            <Route key={value.path} path={value.path} component={value.component}/>
                        ))}
                    </Switch>
                </div>

                <NavLinkBar data={navList}/>
            </div>
        )
    }
}

export default Dashboard;