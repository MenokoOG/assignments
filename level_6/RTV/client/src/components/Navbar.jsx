import React from 'react'
import { Link } from 'react-router-dom'

function Navbar(props) {
  const { logout } = props
  return (
    <div className="nav-container">

      <Link to="/profile" className="nav-link">Profile</Link>
      <Link to="/issues" className="nav-link">Issues</Link>

      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Navbar