import React from 'react'
import logo from '../Images/logo.jpg'

export default function Navbar() {
  return (
    <div>
      <nav>
      <div className="navbar-section-1">
        <img src={logo} alt="logo" className="navbar-logo" />
        <p className="navbar-company-name">Mindy's Cart</p>
      </div>
      <div className="navbar-section-2">
        <ul className="navbar-ul">
          <li className="navbar-li"><a href="/" className="navbar-a">Home</a></li>
          </ul>
          </div>
      <div className="navbar-section-3">
      <button className="rate">Rate</button>
      </div>
      </nav>

      <div className='small-navbar'>
        <ul className='ul-small-navbar'>
          <li className='li-small-navbar li-1'><a className='a-small-navbar' href='/dashboard'>Dashboard</a></li>
          <li className='li-small-navbar li-2'><a className='a-small-navbar' href='/cart'>Cart</a></li>
        </ul>
      </div>

    </div>
  )
}

      // <li className="navbar-li"><a href="/cart" className="navbar-a">Cart</a></li>
          // <li className="navbar-li"><a href="/" className="navbar-a">About</a></li>
          // <li className="navbar-li"><a href="/" className="navbar-a">Profile</a></li>