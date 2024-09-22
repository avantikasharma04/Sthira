import React from 'react'
import bipolar from '../Disorders/disorders/bipolar.png'
import {Link} from "react-router-dom";

const Disorders = () => {
  return (
    <>
      <div className='text-4xl p-3 text-center text-backgroundColor2'>
        Test <span className='text-black'>for the following</span>
      </div>

      <section className='flex flex-wrap justify-center gap-6 p-5'>
        {/* Card 1 */}
        <section className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 border-2 rounded-lg border-purple-300 shadow-lg bg-backgroundColor hover:shadow-2xl transition-shadow duration-300">
          <img src={bipolar} alt="Bipolar" className='rounded-xl w-full h-64 object-cover' />
          <div className="text-center mt-4">
            <h1 className='text-xl p-2 text-lightText font-semibold'>Beck's Anxiety</h1>
            <button className='py-1 px-4 mt-2 border-2 border-backgroundColor2 rounded-md text-lightText hover:bg-backgroundColor2 transition-colors duration-300 hover:text-white'>
            <Link to="/Anx">Learn More </Link>
            </button>
           </div>
        </section>

        {/* Card 2 */}
        <section className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 border-2 rounded-lg border-purple-300 shadow-lg bg-backgroundColor hover:shadow-2xl transition-shadow duration-300">
          <img src={bipolar} alt="Bipolar" className='rounded-xl w-full h-64 object-cover' />
          <div className="text-center mt-4">
            <h1 className='text-xl p-2 text-lightText font-semibold'>Becks Depression</h1>
            <button className='hover:text-white py-1 px-4 mt-2 border-2 border-backgroundColor2 rounded-md text-lightText hover:bg-backgroundColor2 transition-colors duration-300'>
              <a href="/BecksDep">Learn More</a>
            </button>
          </div>
        </section>

         {/* Card 3 */}
         <section className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 border-2 rounded-lg border-purple-300 shadow-lg bg-backgroundColor hover:shadow-2xl transition-shadow duration-300">
          <img src={bipolar} alt="Bipolar" className='rounded-xl w-full h-64 object-cover' />
          <div className="text-center mt-4">
            <h1 className='text-xl p-2 text-lightText font-semibold'>Eating Disorder</h1>
            <button className='hover:text-white py-1 px-4 mt-2 border-2 border-backgroundColor2 rounded-md text-lightText hover:bg-backgroundColor2 transition-colors duration-300'>
              <a href="/Eating">Learn More</a>
            </button>
          </div>
        </section>

         {/* Card 4 */}
         <section className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 border-2 rounded-lg border-purple-300 shadow-lg bg-backgroundColor hover:shadow-2xl transition-shadow duration-300">
          <img src={bipolar} alt="Bipolar" className='rounded-xl w-full h-64 object-cover' />
          <div className="text-center mt-4">
            <h1 className='text-xl p-2 text-lightText font-semibold'>Sleep Disorder</h1>
            <button className='hover:text-white py-1 px-4 mt-2 border-2 border-backgroundColor2 rounded-md text-lightText hover:bg-backgroundColor2 transition-colors duration-300'>
             <a href="/SleepPage">Learn More</a>
            </button>
          </div>
        </section>

        {/* Card 5 */}
        <section className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 border-2 rounded-lg border-purple-300 shadow-lg bg-backgroundColor hover:shadow-2xl transition-shadow duration-300">
          <img src={bipolar} alt="Bipolar" className='rounded-xl w-full h-64 object-cover' />
          <div className="text-center mt-4">
            <h1 className='text-xl p-2 text-lightText font-semibold'>Body Image Satisfaction</h1>
            <button className='hover:text-white py-1 px-4 mt-2 border-2 border-backgroundColor2 rounded-md text-lightText hover:bg-backgroundColor2 transition-colors duration-300'>
              <a href="/ImagePage">Learn More</a>
            </button>
          </div>
        </section>

        {/* Card 6 */}
        <section className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 border-2 rounded-lg border-purple-300 shadow-lg bg-backgroundColor hover:shadow-2xl transition-shadow duration-300">
          <img src={bipolar} alt="Bipolar" className='rounded-xl w-full h-64 object-cover' />
          <div className="text-center mt-4">
            <h1 className='text-xl p-2 text-lightText font-semibold'>Bipolar</h1>
            <button className='hover:text-white py-1 px-4 mt-2 border-2 border-backgroundColor2 rounded-md text-lightText hover:bg-backgroundColor2 transition-colors duration-300'>
              Learn More
            </button>
          </div>
        </section>
      </section>
    </>
  )
}

export default Disorders
