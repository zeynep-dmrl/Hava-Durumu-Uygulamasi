import React, { useEffect, useRef, useState } from 'react'
import Card from './Card'
import ScrollContainer from 'react-indiana-drag-scroll'
import { UilArrowCircleLeft,UilArrowCircleRight  } from '@iconscout/react-unicons'


const Forecast = ({title, forecast}) => {
  const favRef = useRef();
  const [prev, setPrev] = useState(false);
  const [next, setNext] = useState(false);

  useEffect(() => {
    if (favRef.current) {

      const scrollHandle = () => {
        const isEnd = favRef.current.scrollLeft + favRef.current.offsetWidth + 0.20001220703125 === favRef.current.scrollWidth
        // 688+ 1136 === 1824

        const isFirst = favRef.current.scrollLeft === 0

        setPrev(!isFirst)
        setNext(!isEnd)
      }
      scrollHandle()
      favRef.current.addEventListener('scroll', scrollHandle)

      return () => {
        favRef?.current?.removeEventListener('scroll', scrollHandle)
      }

    }
  }, [favRef])

  const scrollForward = () => {
    favRef.current.scrollLeft += favRef.current.offsetWidth - 300
  }

  const scrollBackward = () => {
    favRef.current.scrollLeft -= favRef.current.offsetWidth - 300
  }
  return (
    <div className='w-6/12'>
        <div className='flex items-center justify-start mt-6'>
            <p className='font-medium uppercase'>{title}</p>
        </div>
        <hr className='my-2'/>
        <div>
        <div className='relative'>
          {prev &&
            (
              <button onClick={scrollBackward} className="w-12 h-12 bg-white text-black flex items-center justify-center rounded-full absolute -left-6 z-10 top-1/2 -translate-y-1/2 hover:scale-[1.06]">
                <UilArrowCircleLeft/>
              </button>
            )
          }
          {next &&
            (
              <button onClick={scrollForward} className="w-12 h-12 bg-white text-black flex items-center justify-center rounded-full absolute -right-6 z-10 top-1/2 -translate-y-1/2 hover:scale-[1.06]">
                <UilArrowCircleRight/>
              </button>
            )}
          <ScrollContainer
            innerRef={favRef}
            className="flex overflow-x-auto gap-x-6 scroll-smooth">
            {forecast.map((item,index) => <Card data={item} key={index}/>)}
          </ScrollContainer>
        </div>
        </div>
    </div>
  )
}

export default Forecast