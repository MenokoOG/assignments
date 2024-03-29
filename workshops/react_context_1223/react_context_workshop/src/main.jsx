import React from 'react'
import ReactDOM from 'react-dom/client'
import { ContextProvider } from "./context/Context";
import { BrowserRouter as Router } from "react-router-dom";
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <ContextProvider>
        <App />
      </ContextProvider>
    </Router>
  </React.StrictMode>,
)
