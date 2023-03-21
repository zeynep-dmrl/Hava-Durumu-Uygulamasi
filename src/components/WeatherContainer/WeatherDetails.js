import React from 'react'
import icons from '../../icons';
import { UilTemperatureHalf, UilWindsock, UilTear, UilSunset, UilSun, UilTemperaturePlus, UilTemperatureEmpty } from '@iconscout/react-unicons'

const WeatherDetails = ({ weatherData }) => {

    const { icon, main, temp, feels_like, speed, humidity, sunrise, sunset, temp_max, temp_min } = weatherData;

    return (
        <div className='flex flex-col items-center justify-center space-y-3'>

            <div className='flex flex-row justify-center items-center space-x-10'>

                <div className='flex flex-col items-center justify-center text-2xl text-shadow8'>
                    {icons[icon]}
                    {main}
                </div>

                <h1 className='font-semibold text-3xl text-shadow8'>{temp}°C</h1>

                <div className='flex flex-col items-start justify-center space-y-2'>
                    <div className='flex text-shadow8 space-x-1'><UilTemperatureHalf/> {feels_like}°C</div>
                    <div className='flex space-x-1 text-shadow8'><UilWindsock />{speed}m/s N </div>
                    <div className='flex text-shadow8'><UilTear /> {humidity}%</div>
                </div>
            </div>
            <div className='flex flex-row justify-center items-center space-x-5'>
                <div className='text-shadow8 flex flex-col justify-center items-center'>
                    <UilSunset /> {sunset}

                </div>
                <div className='text-shadow8 flex flex-col justify-center items-center'>
                    <UilSun />  {sunrise}
                </div>
                <div className='text-shadow8 flex flex-col justify-center items-center'><UilTemperaturePlus />  {temp_max}°C</div>
                <div className=' flex flex-col justify-center items-center text-shadow8'><UilTemperatureEmpty />{temp_min}°C</div>

            </div>
        </div>
    )
}

export default WeatherDetails