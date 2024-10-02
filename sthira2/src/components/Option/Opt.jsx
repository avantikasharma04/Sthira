import React from 'react'
import patient from '../Option/patient.jpeg'
import care from '../Option/care.jpeg'

const Opt = () => {
    return (
        
            <div >
                <p className='text-4xl text-center pt-5'>Help us <span className='text-backgroundColor2'>identify</span>  You</p>

                <div className='flex mt-4 ml-5'>

                    <div className='bg-backgroundColor m-6 p-10 rounded-lg shadow-lg w-full max-w-md'>
                        <img src={patient} alt="Mental Health" className="w-full " />
                        <button className='border-2 border-backgroundColor2 hover:bg-backgroundColor2 hover:text-white p-2 rounded-lg m-3 align-middle'><a href="/Genform">I'm a Patient</a></button>

                    </div>

                  
                    <div className='bg-backgroundColor m-6  p-10 rounded-lg shadow-lg w-full max-w-md'>
                        <img src={care} alt="Mental Health" className="w-full " />
                        <button className='border-2 border-backgroundColor2 hover:bg-backgroundColor2 hover:text-white p-2 rounded-lg m-3 align-middle'><a href="/Genct">I'm a Guardian</a></button>

                    </div>
                </div>
            </div>
       

    )
}

export default Opt
