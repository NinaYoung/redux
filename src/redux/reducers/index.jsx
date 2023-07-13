/**
 * 该文件用于汇总所有的reducer为一个总的reducer
 */

//引入combineReducers用于汇总reducers
import {combineReducers} from 'redux'
//引入为count服务的reducer
import countReducer from './count'
//引入为person服务的reducer
import personReducer from './person'

//汇总所有的reducer
const allReducer = combineReducers({
    count: countReducer,
    persons: personReducer
})

export default allReducer