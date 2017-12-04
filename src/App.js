import React from 'react';
import {connect} from 'react-redux'
import {addGun,removeGun,addGunAsync} from "./index.redux";


class App extends React.Component{
/*    constructor(props){
        super(props);
    }*/

    render(){
        return(
            <div>
                <h1>现有机关枪 {this.props.num} 把</h1>
                <button onClick={this.props.addGun}>申请一把机枪</button>
                <button onClick={this.props.removeGun}>回收武器</button>
                <button onClick={this.props.addGunAsync}>拖两天再给你抢</button>
            </div>
        )
    }
}

const mapStatetoProps=(state)=>{
    return{
        num:state
    }
};
const actionCreators={addGun,removeGun,addGunAsync};

App=connect(mapStatetoProps,actionCreators)(App);

export default App;