import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar">
          <ul className="nav-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/create-post">+</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>
    </div>
  )
}

export default Home
