import React from 'react';
import ReactDom from 'react-dom';
import thunk from 'redux-thunk'//这个可以让我们的redux拥有处理异步的能力
import {Provider} from 'react-redux'
import App from './App'
import {BrowserRouter, Route, Link} from 'react-router-dom'

import {createStore, applyMiddleware, compose} from 'redux'
import {counter} from './index.redux'

const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : () => {
};
const store = createStore(counter, compose(
    applyMiddleware(thunk),
    reduxDevtools
));

function Erying() {
    return <h2>二营</h2>
}

function Cavalry(){
    return <h2>骑兵连</h2>
}

ReactDom.render(
    ( <Provider store={store}>
        <BrowserRouter>
            <div>
                <ul>
                    <li>
                        <Link to='/'>一营</Link>
                    </li>
                    <li>
                        <Link to='/erying'>二营</Link>
                    </li>
                    <li>
                        <Link to='/cavalry'>骑兵连</Link>
                    </li>
                </ul>
                {/*exact可以让我们的路由完全匹配*/}
                <Route path='/' exact component={App}/>
                <Route path='/erying' component={Erying}/>
                <Route path='/cavalry' component={Cavalry}/>
            </div>
        </BrowserRouter>
    </Provider> ),
    document.getElementById('root')
)

