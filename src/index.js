import React from 'react'
import ReactDom from 'react-dom'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {
    BrowserRouter,
    Route,
    Redirect,
    Switch
} from 'react-router-dom'

import AuthRoute from './component/authroute/authroute'
import reducers from './reducer'
import 'antd-mobile/dist/antd-mobile.css';
import './config'

/*导入留有*/
import Login from './container/login/login'
import Register from './container/register/register'

const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));


ReactDom.render(
    (<Provider store={store}>
        <BrowserRouter>
            <div>
                <AuthRoute></AuthRoute>
                <Route path="/login" exact component={Login}/>
                <Route path="/register" exact component={Register}/>
            </div>
        </BrowserRouter>
    </Provider>),
    document.getElementById('root')
)
