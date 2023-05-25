import React, { useEffect, useState } from "react"

export default function Sugar() {
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

  let percentage, name, lastWeight, weight;

  data.map( item =>{
    if(item.name === 'kashmiri lal mirch'){
      percentage = (item.weight / item.prevweight) * 100;
      name = item.name;
      lastWeight = item.prevweight;
      weight = item.weight;
    }
  })
  
  return (
    <div className='center-sugar-div'>
      <div className='sugar-status-div'>
        <div className='data-section-sugar-status'>
        <p className='sugar-name'>{name}</p>
        <p className='sugar-weight'>Current Quantity : <span>{weight}</span> Kg</p>
        <p className='sugar-weight-2'>Capacity of Container: <span>{lastWeight}</span> Kg</p>
      </div>
      <div className='percentage-section-sugar-status'>
        <p className='percentage'>{(lastWeight >= weight ? percentage.toFixed(2) : percentage = 100)} %</p>
      </div>
      </div>
    </div>
  )
}
