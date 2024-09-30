import React from 'react'

const Stepcontrol = ({handleClick,currentStep,steps}) => {
  return (
    <div className='container flex justify-around mt-4 mb-8'>
      {/*back*/}
      <button
      onClick={()=>handleClick()}
      className='bg-white text-slate-400 uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer border-2 border-slate-300 hover:bg-slate-700 hover:text-whote transition duration-200 ease-in-out ${currentStep===1?"opacity-50 curssor-not-allowed":""}'>
        Back
      </button>

       {/*next*/}
       <button
       onClick={()=>handleClick("next")}
      className='bg-green-500 text-white uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer border-2 border-slate-300 hover:bg-slate-700 hover:text-whote transition duration-200 ease-in-out'>
        {currentStep===steps.length -1?"Confirm":"Next"}
      </button>
    </div>
  )
}

export default Stepcontrol
