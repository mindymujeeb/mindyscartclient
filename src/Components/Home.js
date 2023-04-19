import React from 'react'
import dashboardLogo from "../Images/dashboard-home.png"
import cartLogo from "../Images/cart-home.png"
import  {Link} from 'react-router-dom'

const user = `Mindy`


export default function Home() {
  return (
    <div>
      <div className='intro-name-home-page'>
        <p className=''>Welcome, {user}</p>
      </div>
      <div className='home-dashboard-cart'>
        <div className='select-dashboard'>
        <p className='center-button'>
          <img className='icons-home' src={dashboardLogo} alt='' />
        </p>
          <p className='heading-select-home'>Have a Look at your Dashboard</p>
          <p className='center-button'>
          <Link to='/dashboard'><button className='button-home'>Dashboard</button></Link>
          </p>
          </div>
          <div className='select-cart'>
          <p className='center-button'>
          <img className='icons-home' src={cartLogo} alt='' />
          </p>
          <p className='heading-select-home'>Have a look at Your cart</p>
          <p className='center-button'>
          <Link to='/cart'><button className='button-home'>Cart</button></Link>
          </p>
        </div>
      </div>
    </div>
  )
}
