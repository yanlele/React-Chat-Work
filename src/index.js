import {createStore} from 'redux'

//通过reducer建立
//根据老的状态state和action生成新的state
function counter(state = 0, action) {
    switch (action.type) {
        case 'add':
            return state + 1;
        case 'subtract':
            return state - 1;
        default:
            return 10;
    }
}


//1、新建store
const store = createStore(counter);

const init =store.getState();
console.log(init);

//注册一个控制方法
function listener(){
    const current=store.getState();
    console.log(`现在有的机关枪有：${current}把`)
}
//订阅控制方法,每次状态改变都要执行一次listener方法r
store.subscribe(listener)


//派发事件 传递action
store.dispatch({
    type:'add'
});
console.log(store.getState());
store.dispatch({
    type:'add'
});
console.log(store.getState());
store.dispatch({
    type:'subtract'
});
console.log(store.getState());