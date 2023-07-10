import React, { Component } from 'react'
//引入Count的UI组件
import {createIncrementAction,createDecrementAction,createIncrementAsyncAction} from '../../redux/actions/count'
//引入connect用于连接ui组件和redux
import {connect} from 'react-redux'

class Count extends Component {
    
    increment = ()=>{
        const {value} = this.selectNumber
        this.props.jia(value*1)
    }

    decrement = ()=>{
        const {value} = this.selectNumber
        this.props.jian(value*1)
    }

    incrementIfOdd = ()=>{
        const {value} = this.selectNumber
        if(this.props.count % 2 !== 0){
            this.props.jia(value*1)
        }
    }

    incrementAsync = ()=>{
        const {value} = this.selectNumber
        this.props.jiaAsync(value*1, 1000)
    }

  render() {
    return (
      <div>
        <h1>当前的和是{this.props.count},下方组件的总人数为：{this.props.renshu}</h1>
        <select ref={c=>this.selectNumber=c}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
        </select>&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>奇数加</button>&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>&nbsp;
      </div>
    )
  }
}


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
    state=> ({
        count:state.count,
        renshu:state.persons.length
    }),
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
)(Count)

