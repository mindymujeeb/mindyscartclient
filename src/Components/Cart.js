import React, { useEffect, useState } from 'react'

export default function Cart({item}) {
  const [data, setData] = useState([]);

  const fetchUserData = () => {
    fetch("https://mindyscartserver-production-92ec.up.railway.app/database")
      .then(response => {
        return response.json()
      })
      .then(Data => {
        setData(Data)
      })

  }

  useEffect(() => {
    fetchUserData()
  }, [])


  return (
    <div className='cart-complete'>
      <p className='cart-heading'>CART</p>
      {
        data.map( item => {
        let  percentage = (item.weight / item.prevweight) * 100;
        if(percentage <= 20){
          return(
            <div className='cart-item' key= {item._id}>
              <p className='cart-item-name'>{item.name}</p>
              <p className='cart-item-perc'>{percentage.toFixed(2)} %</p>
            </div>
          )
        }
        })
      }
    </div>
  )
}
