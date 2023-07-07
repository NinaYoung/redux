//引入Count的UI组件
import CountUI from '../../components/Count/Count'
import {createIncrementAction,createDecrementAction,createIncrementAsyncAction} from '../../redux/count_action'

//引入connect用于连接ui组件和redux
import {connect} from 'react-redux'

/**
 1，mapStateToProps返回的是一个对象
 2，返回对象中的key就作为传递给UI组件props的key，value就作为传递给UI组件props的value
 3，mapStateToProps用于传递状态
 */
// const mapStateToProps =state=> ({count:state})

/**
 1，mapDispatchToProps返回的是一个对象
 2，返回对象中的key就作为传递给UI组件props的key，value就作为传递给UI组件props的value
 3，mapDispatchToProps用于传递操作状态的方法
 */
// const mapDispatchToProps =dispatch=>({
//         jia:data=>dispatch(createIncrementAction(data)),
//         jian:data=>dispatch(createDecrementAction(data)),
//         jiaAsync:(data,time)=>dispatch(createIncrementAsyncAction(data,time)),
// })

//创建并暴露一个count的容器组件
// const CountContainer = connect()(CountUI)
// export default CountContainer
export default connect(
    state=> ({count:state}),
    // dispatch=>({
    //             jia:data=>dispatch(createIncrementAction(data)),
    //             jian:data=>dispatch(createDecrementAction(data)),
    //             jiaAsync:(data,time)=>dispatch(createIncrementAsyncAction(data,time)),
    //     })
    {
        jia:createIncrementAction,
        jian:createDecrementAction,
        jiaAsync:createIncrementAsyncAction,
    }
)(CountUI)

