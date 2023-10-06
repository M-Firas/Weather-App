import './WeatherForecast.css'

import React from 'react'


const weekDays = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']

export const WeatherForecast = ({data}) => {
   const dayInWeek = new Date().getDay();
   const forecastDays = weekDays.slice(dayInWeek, weekDays.length).concat(weekDays.slice(0, dayInWeek));


   console.log(forecastDays)
  return (
    <>
    <div className='weatherForecast'>
      <div className='weatherForecast--container' >
         <h2>7-Day Forecast</h2>
         {data?.list.splice(0, 7).map((item, idx) => (
         <div className='forecast--container' key={idx}>
          <div><p>{forecastDays[idx]}</p></div>
          <div><img src={`icons/${item.weather[0].icon}.svg`} alt=""  /><span>{item.weather[0].description}</span></div>
          <div><span>{Math.round(item.main.temp_min)}</span><p>/{Math.round(item.main.temp_max)}</p></div>
         </div>
         ))}
      </div>
    </div>
    </>
  )
}
