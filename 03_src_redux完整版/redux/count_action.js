/*
该文件专门为count创建一个action对象
*/

import {INCREMENT,DECREMENT} from './constant'

export const createIncrementAction = (data) =>({type:INCREMENT,data})
    

export const createDecrementAction = (data) =>{
    return {type:DECREMENT,data}
}

