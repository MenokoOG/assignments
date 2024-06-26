import { useState } from 'react'
import Navbar from './Navbar'
import About from './About'
import Body from './Body'
import ContactUs from './ContactUs'
import Services from "./Services"
import {Route, Routes} from "react-router-dom"
import Home from './Home'


function App() {

    

  return (
    <div id="app">
      <Navbar />
      <Routes>
      <Route path = "/" element = {<Home />} />
      <Route path = "/about" element = {<About />} />
      <Route path = "/services" element = {<Services />} />
      <Route path = "/contact" element = {<ContactUs />} />
      </Routes>
    </div>
  )
}

export default App
