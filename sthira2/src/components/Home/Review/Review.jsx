import React from 'react';
import woman1 from '../Review/woman1.jpg'
import woman2 from '../Review/woman2.jpg'

const Review = () => {
  return (
    <section className="py-10 bg-backgroundColor">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">
            What people have to say <span className="text-backgroundColor2">About Us</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg border-2 hover:bg-hover cursor-pointer">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <span className="text-yellow-500 text-lg">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
              </div>
              <span className="text-gray-500">10th October, 2024</span>
            </div>
            <p className="text-gray-700 mb-4 ">
            "Honestly, this app saved my sanity during the pandemic. The guided meditations and breathing exercises are top-notch. It’s like having a therapist in your pocket, minus the awkward eye contact." </p>
            <div className="flex items-center">
              <img className="w-12 h-12 rounded-full mr-4" src={woman2} alt="Ray Robertson" />
              <div>
                <h4 className="font-bold">Veena Panchal</h4>
                <p className="text-gray-600">CEO - Star Health</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border-2 hover:bg-hover cursor-pointer">
            <div className="flex justify-between items-center mb-4 ">
              <div className="flex items-center">
                <span className="text-yellow-500 text-lg">&#9733;&#9733;&#9733;&#9733;</span>
              </div>
              <span className="text-gray-500">20th July, 2024</span>
            </div>
            <p className="text-gray-700 mb-4">
            "Sthira is my new favorite escape. The interactive stories and relaxation exercises are a perfect blend of fun and mindfulness. I feel more balanced and in tune with myself. Highly recommended!"</p>
            <div className="flex items-center">
              <img className="w-12 h-12 rounded-full mr-4" src={woman1} alt="Sherl" />
              <div>
                <h4 className="font-bold">Akshaya Mehta</h4>
                <p className="text-gray-600">Architect</p>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </section>
  );
};

export default Review;
