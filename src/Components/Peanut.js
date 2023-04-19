import React, { useEffect, useState } from "react"

export default function Peanut() {
  const [data, setData] = useState([]);

  const fetchUserData = () => {
    fetch("https://mindyscartserver-production.up.railway.app/database")
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

  let percentage, name, lastWeight;

  data.map( item =>{
    if(item.name === 'peanuts'){
      percentage = (item.weight / item.prevweight) * 100;
      name = item.name;
      lastWeight = item.prevweight;
    }
  })

  return (
    <div className='center-sugar-div'>
      <div className='sugar-status-div'>
        <div className='percentage-section-sugar-status'>
          <p className='percentage'>{percentage} %</p>
        </div>
        <div className='data-section-sugar-status'>
          <p className='sugar-name'>{name}</p>
          <p className='sugar-weight'>Capacity : {lastWeight} Kg</p>
        </div>
      </div>
    </div>
  )
}
