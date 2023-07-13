import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
// import store from './redux/store'
import store from './redux/store'
import { Provider } from 'react-redux'

// ReactDOM.createRoot(document.getElementById('root')).render(<App />)
/**
 * 此处需要用Provider包裹App，目的是为了让APP所有的后代容器组件都能接收到store
 */
ReactDOM.render(          
        <Provider store={store}>
                <App />
        </Provider>,
        document.getElementById('root')
)

//监测redux中状态的改变，如果redux中的状态发生了改变，重新渲染App组件
//使用react-redux不用监测，connect会自动监测redux中状态的改变
// store.subscribe(()=>{
//         // ReactDOM.createRoot(document.getElementById('root')).render(<App />)   
//         ReactDOM.render(<App/>,document.getElementById('root')) 
// })