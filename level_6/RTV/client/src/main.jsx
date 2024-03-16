import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import UserProvider from './context/UserProvider.jsx'
import IssueProvider from './context/IssueProvider.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter><IssueProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </IssueProvider></BrowserRouter>

  </React.StrictMode>,
)
