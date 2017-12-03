const ADD_GUN='add';//加机关枪
const REMOVE_RUN='subtract';//减机关枪
//通过reducer建立
//根据老的状态state和action生成新的state
export function counter(state = 0, action) {
    switch (action.type) {
        case ADD_GUN:
            return state + 1;
        case REMOVE_RUN:
            return state - 1;
        default:
            return 10;
    }
}

//action creator
export function addGun(){
    return {
        type:ADD_GUN
    }
}
export function removeGun(){
    return {
        type:REMOVE_RUN
    }
}

export function addGunAsync(){
    return dispatch=>{
        setTimeout(()=>{
            dispatch(addGun())
        },2000)
    }
}