import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

localStorage.setItem("last", "number");
localStorage.setItem("open", 0);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
