import React from 'react';
import {connect} from 'react-redux'
import {addGun, removeGun, addGunAsync} from "./index.redux";

/*const mapStatetoProps = (state) => {
    return {
        num: state
    }
};
const actionCreators = {addGun, removeGun, addGunAsync};*/

// App=connect(mapStatetoProps,actionCreators)(App);

@connect(
    //你要state什么属性，就把属性放在props里面
    state => {
        return {
            num: state
        }
    }
    //你想要什么方法，就放在props里面，自动dispatch
    , {
        addGun,
        removeGun,
        addGunAsync
    })
class App extends React.Component {
    render() {
        return (
            <div>
                <h1>现有机关枪 {this.props.num} 把</h1>
                <button onClick={this.props.addGun}>申请一把机枪</button>
                <button onClick={this.props.removeGun}>回收武器</button>
                <button onClick={this.props.addGunAsync}>拖两天再给你抢</button>
            </div>
        )
    }
}


export default App;