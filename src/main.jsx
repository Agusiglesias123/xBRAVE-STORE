import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import { initFirebase } from './firebase/config'

initFirebase()

ReactDOM.createRoot(document.getElementById('root')).render(
    <App /> 
)
