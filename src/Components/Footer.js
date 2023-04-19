import React from 'react'

import linkedin from '../Images/LinkedIn.png'
import twitter from '../Images/twitter.png'
import instagram from '../Images/instagram.png'
import github from '../Images/github.png'

export default function Footer() {
  return (
    <div>
      <div className='footer'>
        <div className='section-1'>
          <a href='/' className='a-footer-links footer-links' >Home</a>
          <a href='/' className='a-footer-links footer-links' >About</a>
          <a href='/cart' className='a-footer-links footer-links'>Cart</a>
          <a href='/dashboard' className='a-footer-links footer-links'>Dashboard</a>
          <a href='/dashboard' className='a-footer-links footer-links'>Contact Us</a>
        </div>
        <div className='section-2'>
          <p className='footer-section-2-description'>Designed and Developed by Team Mindy,<br /> Mindy's Recipe</p>
          <div className='social-icons-footer'>
            <a target='blank' href='https://www.instagram.com/_mindy_810/'><img className='icons-footer icons-footer-1' src={instagram} alt=''/></a>
            <a target='blank' href='https://twitter.com/mindymujeeb'><img className='icons-footer' src={twitter} alt=''/></a>
            <a target='blank' href='https://www.github.com/mindymujeeb/'><img className='icons-footer' src={github} alt=''/></a>
            <a target='blank' href='https://www.aedin.com/in/mohd-mujeeb-93686522b/'><img className='icons-footer' src={linkedin} alt=''/></a>
          </div>
        </div>
        <div className='section-3'>
          <p className='footer-section-3-description'>For Any Feedback regarding the Web Application kindly Mail Me at info.mindyscart@gmail.com</p>
          <p className='footer-section-3-description'>© 2022 Mindys Cart. All rights reserved. Privacy Policy Terms of Use</p>
        </div>
      </div>
    </div>
    )
  }

  // <div className=''>
  //   <section className='section-1'>
      // <a href='/' className='' >Home</a><br />
      // <a href='/' className='' >BreakFast</a><br />
      // <a href='/' className='' >Lunch</a><br />
      // <a href='/' className=''>Snacks</a><br />
      // <a href='/' className=''>Dessert</a><br />
      // <a href='/' className=''>Demo</a>
  //   </section>
  // </div>