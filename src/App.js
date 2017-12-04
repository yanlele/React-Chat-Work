import React from 'react';
import {connect} from 'react-redux'
import {addGun,removeGun,addGunAsync} from "./index.redux";


class App extends React.Component{
/*    constructor(props){
        super(props);
    }*/

    render(){
        const num=this.props.num
        const addGun=this.props.addGun;
        const removeGun=this.props.removeGun;
        const addGunAsync=this.props.addGunAsync;
        return(
            <div>
                <h1>现有机关枪 {num} 把</h1>
                <button onClick={addGun}>申请一把机枪</button>
                <button onClick={removeGun}>回收武器</button>
                <button onClick={addGunAsync}>拖两天再给你抢</button>
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