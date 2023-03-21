import React from 'react'
import icons from '../../icons';

const Card = ({data}) => {
    const {title,icon,temp} = data;
  return (
    <div className='flex flex-col items-center justify-center space-y-1 bg-white/70 text-black mx-6 p-2 rounded-md'>
                <p className='font-normal text-xs
                '>{title}</p>
                <div>
                    {icons[icon]}
                </div>
                {temp && <p className='font-normal'>{temp}°C</p>}

            </div>
  )
}

export default Card