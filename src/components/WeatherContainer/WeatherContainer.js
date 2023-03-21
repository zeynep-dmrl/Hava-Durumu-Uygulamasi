import React from 'react'
import Header from './Header'
import WeatherDetails from './WeatherDetails'

const WeatherContainer = ({weatherData}) => {
  return (
    <div className='flex flex-col justify-center items-center space-y-4 mt-5 bg-gray-300/70 rounded-md p-6'>
        <Header weatherData={weatherData}/>
        <WeatherDetails weatherData= {weatherData}/>
    </div>
  )
}

export default WeatherContainer