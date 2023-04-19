import React from 'react'

import img1 from '../Images/oil.jfif'
import img2 from '../Images/masala.jfif'
import img3 from '../Images/atta.jfif'
import img4 from '../Images/rice.jpeg'
import img5 from '../Images/sugar.jpeg'
import img6 from '../Images/dals.jpeg'
// import { Link } from 'react-router-dom'

export default function Dashboard() {
  return (
    <div>
      <div className='dashboard-grid'>
        <div className=''>
            <p className='center-button'>
              <a href='/sugar'>
                <img className='icons-dashboard' src={img5} alt='' />
              </a>
            </p>
            <p className='heading-dashboard'>Salt, Sugar & Jaggery</p>
        </div>
        <div className=''>
          <p className='center-button'>
            <a href='/oil'>
              <img className='icons-dashboard' src={img1} alt='' />
            </a>
          </p>
          <p className='heading-dashboard'>Edible Oil</p>
        </div>
        <div className=''>
          <p className='center-button'>
            <a href='/atta'>
              <img className='icons-dashboard' src={img3} alt='' />
            </a>
          </p>
          <p className='heading-dashboard'>Atta, Flours & Sooji</p>
        </div>
        <div className=''>
          <p className='center-button'>
            <a href='/mirch'>
              <img className='icons-dashboard' src={img2} alt='' />
            </a>
          </p>
          <p className='heading-dashboard'>Masala & Spices</p>
        </div>
        <div className=''>
          <p className='center-button'>
          <a href='/peanuts'>
            <img className='icons-dashboard' src={img6} alt='' />
          </a>
          </p>
          <p className='heading-dashboard'>Dals & Others</p>
        </div>
        <div className=''>
          <p className='center-button'>
            <a href='/rice'>
              <img className='icons-dashboard' src={img4} alt='' />
            </a>
          </p>
          <p className='heading-dashboard'>Rice & Rice Products</p>
        </div>
      </div>
    </div>
  )
}
