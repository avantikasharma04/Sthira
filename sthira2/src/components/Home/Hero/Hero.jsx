import React from 'react';
import img6 from '../Hero/img6.jpeg'

function Hero() {
  return (
    <div className="min-h-screen bg-backgroundColor2 flex flex-col items-center justify-center ">
      <main className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center p-10 bg-white rounded-lg shadow-lg">
        <div className="flex-1 flex justify-center">
          <img
            src={img6}  
            alt="Mental Health"
            className="w-full max-w-xs md:max-w-sm object-cover rounded-lg"
          />
        </div>
        <div className="flex-1 p-6 md:pl-10 text-center md:text-left">
          <h2 className="text-4xl font-extrabold text-gray-900">
            <span className="block text-gray-700">Mental Health</span>
            <span className="block text-backgroundColor2">is not a destination, but a journey. </span>
          </h2>
          <p className="mt-4 text-gray-600">
          24 x 7 Assistance
          </p>
          <div className="mt-6">
            <a href="/Readpage" className="inline-block bg-brightColor2 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-orange-700">
              Read More
            </a>
          </div>
        </div>
      </main>
    </div>

    
  );
}

export default Hero;
