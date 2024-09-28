import React from 'react';
import the from '../About/the.jpeg'

const About = () => {
  return (
    <section className="flex justify-center items-center py-10 bg-backgroundColor">
      <div className="flex flex-col md:flex-row items-center max-w-6xl w-full px-4 md:px-0">
        <div className="text-center md:text-left md:mr-8 mb-8 md:mb-0">
          <h2 className="text-lg font-semibold mb-2">Therapy Help</h2>
          <h3 className="text-3xl font-bold mb-2">We are here to <span className='text-backgroundColor2'>help you</span></h3>
          <p className="text-xl mb-4">
            Provide us with necessary data to get an AI generated personalized plan for you
          </p>
          <button className="py-2 px-4 text-xl bg-backgroundColor2 text-white rounded hover:bg-pink-900 transition">
            →
          </button>
        </div>
        <div className="w-full md:w-1/2">
          <img src={the} alt="img" className="w-full rounded-lg shadow-md" />
        </div>
      </div>
    </section>
  );
};

export default About;
