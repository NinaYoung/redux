import React, { Component } from 'react'
import Count from './containers/Count/countPlus'

export default class App extends Component {
  render() {
    return (
      /**给容器组件传递store可以通过Provider给App组件传递给多个容器组件
       * 
       */
     <Count/>
    )
  }
}
