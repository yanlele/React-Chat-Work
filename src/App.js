import React from 'react'
import {Button, List} from 'antd-mobile'

class App extends React.Component {
    render() {
        const boss = '李云龙';
        return (
            <div>
                <h2>独立团 , 团长{boss}</h2>
                <OneCamp boss="张大喵"/>
                <Cavalry boss="嗷大喵"/>
            </div>
        )
    }
}

function Cavalry(props) {
    return (
        <div>
            <h2>骑兵连连长{props.boss}</h2>
        </div>
    )
}

//创建一个一营组件
class OneCamp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            solders: ['张大彪', '二愣子', '李狗蛋']
        }
    }

    componentWillMount() {
        console.log('组件马上就要加载了')
    }

    componentDidMount() {
        console.log('组件加载完毕')
    }

    addSolder() {
        console.log(1);
        this.setState({
            solders: [...this.state.solders, '新兵蛋子' + Math.random()]
        })
    }

    render() {
        console.log('组件正在加载');
        return (
            <div>
                <h2>一营营长 - {this.props.boss}</h2>
                <Button type="primary" onClick={this.addSolder.bind(this)}>新兵入伍</Button>

                <List
                    renderHeader='士兵列表'
                >
                    {this.state.solders.map(v=>{
                        return (
                            <List.Item
                                key={v}
                            >
                                {v}
                            </List.Item>
                        )
                    })}
                </List>
            </div>
        )
    }
}

export default App;