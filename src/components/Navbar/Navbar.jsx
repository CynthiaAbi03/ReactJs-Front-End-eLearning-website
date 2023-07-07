import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='main-nav-container'>
        <span className='app-name'>BIDIMA</span>
        <nav>
            <NavLink to='/connection' className='signup-btn'>INSCRIPTION</NavLink>
            <NavLink to='/connection' className='connection-btn'>CONNEXION</NavLink>
        </nav>
    </div>
  )
}

export default Navbar