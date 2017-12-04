import React from 'react';
import ReactDom from 'react-dom';
import thunk from 'redux-thunk'//这个可以让我们的redux拥有处理异步的能力
import App from './App'
import {createStore,applyMiddleware,compose} from 'redux'
import {counter,addGun,removeGun ,addGunAsync} from './index.redux'

const reduxDevtools=window.devToolsExtension?window.devToolsExtension():()=>{};
const store=createStore(counter,compose(
    applyMiddleware(thunk),
    reduxDevtools
));

function render(){
    ReactDom.render(
        <App store={store} addGun={addGun} removeGun={removeGun} addGunAsync={addGunAsync}/>,document.getElementById('root')
    )
}
render();
store.subscribe(render);
