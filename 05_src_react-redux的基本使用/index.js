import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/store'

// ReactDOM.createRoot(document.getElementById('root')).render(<App />)

ReactDOM.render(<App/>,document.getElementById('root'))

//监测redux中状态的改变，如果redux中的状态发生了改变，重新渲染App组件
store.subscribe(()=>{
        // ReactDOM.createRoot(document.getElementById('root')).render(<App />)   
        ReactDOM.render(<App/>,document.getElementById('root')) 
})