import React, { Component } from 'react'
//引入store,用于获取redux中保存的状态
import store from '../../redux/store'
import {createIncrementAction,createDecrementAction} from '../../redux/count_action'

export default class Count extends Component {
    
    // componentDidMount(){
    //     //监测store中的状态变化，只要变化就调用render
    //     store.subscribe(()=>{
    //         this.setState({})
    //     })
    // }

    increment = ()=>{
        const {value} = this.selectNumber
        store.dispatch(createIncrementAction(value*1))
    }

    decrement = ()=>{
        const {value} = this.selectNumber
        store.dispatch(createDecrementAction(value*1))
    }

    incrementIfOdd = ()=>{
        const {value} = this.selectNumber
        const count = store.getState()
        if(count %2 !==0){
            store.dispatch(createIncrementAction(value*1))
        }
    }

    incrementAsync = ()=>{
        const {value} = this.selectNumber
        setTimeout(()=>{
            store.dispatch(createIncrementAction(value*1))
        },1000)
    }

  render() {
    return (
      <div>
        <h1>当前的和是{store.getState()}</h1>
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
