import React from 'react'
import { UilSearch } from '@iconscout/react-unicons'

const Form = ({ cityName, setCityName, handleSubmit }) => {
    const handleChange = (e) => {
        console.log(e.target.value)
        setCityName(e.target.value);
    };

    return (
        <div className='flex justify-center items-center mt-4'>
            <div className='bg-orange-500/70 rounded-lg px-4 py-2 space-x-2'>
                <input className='rounded p-1 focus:outline-none capitalize text-black' type={'text'} name='cityName' placeholder='Search...' value={cityName} onChange={handleChange}/>
                <button className=' text-white cursor-pointer drop-shadow-lg transition ease-out hover:scale-125' onClick={handleSubmit}><UilSearch size={16} /></button>
            </div>
        </div>
    )
}

export default Form