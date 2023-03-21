import React from 'react'
import Card from './Card'

const Forecast = ({title, forecast}) => {
  return (
    <div>
        <div className='flex items-center justify-start mt-6'>
            <p className='font-medium uppercase'>{title}</p>
        </div>
        <hr className='my-2'/>

        <div className='flex item-center justify-between'>
            {
                forecast.map((item,index) => <Card data={item} key={index}/>)
            }
        </div>
    </div>
  )
}

export default Forecast