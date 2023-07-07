import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/store'

// ReactDOM.createRoot(document.getElementById('root')).render(<App />)

ReactDOM.render(<App/>,document.getElementById('root'))

store.subscribe(()=>{
        // ReactDOM.createRoot(document.getElementById('root')).render(<App />)   
        ReactDOM.render(<App/>,document.getElementById('root')) 
})