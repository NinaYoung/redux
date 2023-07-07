/*
该文件专门为count创建一个action对象
*/

import {INCREMENT,DECREMENT} from './constant'

//异步action就是指action的返回值是Object类型的一般对象
export const createIncrementAction = (data) =>({type:INCREMENT,data})


export const createDecrementAction = (data) =>{
    return {type:DECREMENT,data}
}

//异步action就是指action的返回值是函数，
//异步action中一般都会调用同步action,异步action不是必须要用的
export const createIncrementAsyncAction = (data, time)=>{
    return (dispatch)=>{
        setTimeout(()=>{
            dispatch(createIncrementAction(data))
        }, time)
    }
}

