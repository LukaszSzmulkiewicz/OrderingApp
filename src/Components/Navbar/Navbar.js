import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul  className='nav-links'>
        <Link to="/" className="main">
          <li>Main</li>
        </Link>
        <Link to="/" className="orders">
          <li>Orders</li>
        </Link>

      </ul>
    
    </nav>
  )
}

export default Navbar