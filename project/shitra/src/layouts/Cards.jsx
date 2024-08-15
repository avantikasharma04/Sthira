import React from 'react'

import Button from './Button'
import anxiety from '../assets/img/disorders/anxiety.png'

const Cards = (props) => {
  return (
    <div className='w-full lg:w-1/4 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg bg-backgroundColor'>
      <img className='rounded-xl' src={anxiety} alt='img'/>
      <div className='space-y-4'>
        <h3 className='font-semibold text-center text-xl pt-6'>{props.title}</h3>
        
        <div className='flex flex-row items-center justify-center gap-4'>
            <h3 className='font-semibold text-lg'>{props.price}</h3>
            <Button title='Learn more'/>
        </div>
      </div>
     
    </div>
    
  )
}

export default Cards
