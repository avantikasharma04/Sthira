import React from 'react'
import Cards from '../layouts/Cards'
import C1 from '../layouts/C1'
import C2 from '../layouts/C2'
import C3 from '../layouts/C3'
import C4 from '../layouts/C4'
import C5 from '../layouts/C5'

import anxiety from '../assets/img/disorders/anxiety.png';
import bipolar from '../assets/img/disorders/bipolar.png';
import depression from '../assets/img/disorders/depression.png';
import dysmorphia from '../assets/img/disorders/dysmorphia.png';
import obeseophobia from '../assets/img/disorders/obeseophobia.png';
import panic from '../assets/img/disorders/panic.png';

const Disorders = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center lg:px-32 px-5 bg-white'>
      <h1 className='text-4xl font-semibold text-center pt-10 pb-40 text-backgroundColor2'>AI Assistance</h1>
      <div className='flex flex-wrap gap-8 justify-center'>
        <Cards img={anxiety} title="anxiety" />
        <C1 img={bipolar} title="Bipolar disorder" />
        <C2 img={depression} title="Clinical Depression" />
        <C3 img={dysmorphia} title="Clinical Depression" />
        <C4 img={obeseophobia} title="Clinical Depression" />
        <C5 img={panic} title="Clinical Depression" />
      
      </div>
    </div>
  )
}

export default Disorders
