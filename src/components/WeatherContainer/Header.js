import React from 'react'

const Header = ({weatherData}) => {
  const {country,name,dt} = weatherData;
  return (
    <div className=' flex flex-col justify-center items-center space-y-2 text-center'>
        <h1 className='text-white text-3xl uppercase font-bold text-shadow3'>{name} | {country}</h1>
        <div className='font-semibold text-shadow8'>{dt}</div>
    </div>
  )
}

export default Header