import axios from 'axios'
import {getRedirectPath} from "../util/util";

//定义常量
const REGISTER_SUCCESS='REGISTER_SUCCESS';
const ERROR_MEG='ERROR_MEG';
const LOGIN_SUCCESS='LOGIN_SUCCESS';

const initState={
    redirectTo:'',
    isAuth:false,
    msg:'',
    user:'',
    pwd:'',
    type:''
};
//reducer
export function user(state=initState,action){
    switch (action.type){
        case REGISTER_SUCCESS:
            return {...state,msg:'',redirectTo:getRedirectPath(action.payload),isAuth:true,...action.payload};
        case LOGIN_SUCCESS:
            return {...state,msg:'',redirectTo:getRedirectPath(action.payload),isAuth:true,...action.payload};
        case ERROR_MEG:
            return {...state,isAuth:false,msg:action.msg};
        default:
            return state;
    }
}

//action map
function errorMsg(msg){
    return {
        type:ERROR_MEG,
        msg:msg
    }
}

function registerSuccess(data){
    return {type:REGISTER_SUCCESS,payload:data}
}

function loginSuccess(data){
    return {
        type:LOGIN_SUCCESS,
        payload:data
    }
}

//登录功能
export function login({user,pwd}){
    if(!user||!pwd){
        return errorMsg('用户名和密码必须输入')
    }
    //异步的分发事件写法
    return dispatch=>{
        axios.post('/user/login',{user,pwd}).then((res)=>{
            if(res.status===200&&res.data.code===0){
                //请求成功
                dispatch(loginSuccess(res.data.data))
            }else{
                dispatch(errorMsg(res.data.msg))
            }
        })
    }
}

//注册功能
export function register({user,pwd,repeatpwd,type}){
    if(!user||!pwd||!type){
        return errorMsg('用户名密码必须输入')
    }

    if(pwd!==repeatpwd){
        return errorMsg('密码和确认密码不相同');
    }

    //异步的分发事件写法
    return dispatch=>{
        axios.post('/user/register',{user,pwd,type}).then((res)=>{
            if(res.status===200&&res.data.code===0){
                //请求成功
                dispatch(registerSuccess({user,pwd,type}))
            }else{
                dispatch(errorMsg(res.data.msg))
            }
        })
    }
}
