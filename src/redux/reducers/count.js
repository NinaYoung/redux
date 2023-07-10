/*
1,该文件是用于创建一个为count服务的reducer，reducer的本质是一个函数
2,reducer函数会接到两个参数，分别为：之前的状态（preState），对象动作（action）
*/
import {INCREMENT, DECREMENT} from '../constant'
const initState = 0
export default function countReducer(preState=initState, action){
    //preState=initState  形参的默认值
    //从action中获取type和data
    const {type, data} = action
    //根据type决定如何加工数据
    switch (type) {
        case INCREMENT:
            return preState + data
        case DECREMENT:
            return preState - data   
    
        default:
            return preState;
    }
}