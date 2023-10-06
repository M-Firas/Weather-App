import './CurrentWeather.css'

import React from 'react'

export const CurrentWeather = ({data}) => {
  return (
    <div className='currentWeather'>
        <div className='currentWeather--container'>
       <div className='info'>
         <p className='city'>{data.city}</p>
         <p className='temp'>{Math.round(data.main.temp)}°C</p>
       </div> 

       <div className='icon'>
         <img src={`icons/${data.weather[0].icon}.svg`} alt=""  />
         <p>{data.weather[0].description}</p>
       </div>
    </div>
    </div>
  )
}
