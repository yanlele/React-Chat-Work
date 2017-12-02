import React from 'react'

class App extends React.Component {
    render() {
        const boss='李云龙';
        return (
            <div>
                <h2>独立团, 团长{boss}</h2>
                <OneCampsite boss="嗷大喵"></OneCampsite>
                <Cavalry boss="奶萌兔"></Cavalry>
            </div>
        )
    }
}

class OneCampsite extends React.Component{
    constructor(props){
        super(props);
        this.state={
            solders:['虎子','大王','李狗蛋']
        }

        // this.addSolder=this.addSolder.bind(this);
    }

    addSolder(){
        console.log('hell add solder');
        this.setState({
            solders:[...this.state.solders,'新兵蛋子'+Math.random()]
        })
    }

    render(){
        // const boss='张大彪';
        return(
            <div>
                <h2>一营营长，{this.props.boss}</h2>
                <button onClick={()=>this.addSolder()}>新兵入伍</button>
                <ul>
                    {this.state.solders.map((value)=>{
                        return <li key={value}>{value}</li>
                    })}
                </ul>
            </div>
        )
    }
}

//如果只有一个render方法的calss 可以直接写成一个function，父子通信可以通过参数的形式来实现，但是首字母一定要大写
function Cavalry(props){

    return (
        <h2>骑兵连连长 {props.boss} , 冲锋！</h2>
    )
}

export  default App;