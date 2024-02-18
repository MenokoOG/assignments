import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import UglyThingsContextProvider from './contexts/UglyThingsContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <UglyThingsContextProvider>
    <App />
  </UglyThingsContextProvider>
</React.StrictMode>,
)
