import { useState, useContext } from 'react'
import './App.css'
import Home from './components/Home'
import Form from './components/Form'
import Todos from './components/Todos'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import {Context} from './context/ContextProvider'

function App() {

  const  {isDarkMode}  = useContext(Context)
// console.log(isDarkMode)
  return (
    <div className={!isDarkMode ? `light` : 'dark'}>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/todos" element={<Todos />} />
      </Routes>

    </div>
  )
}

export default App
