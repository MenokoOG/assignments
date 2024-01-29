import React from 'react'
import ReactDOM from 'react-dom/client'
import Main from './Main.jsx'
import Navbar from './Navbar.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <Navbar />
    <Main />
  </div>,
)
