import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

localStorage.setItem("last", "simbol");
localStorage.setItem("open", 0);
localStorage.setItem("zero", false);
localStorage.setItem("asterisk", 2);
localStorage.setItem("pointer", true)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
