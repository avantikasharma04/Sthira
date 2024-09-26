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
        <div className="flex justify-center space-x-4 mb-8">
          <button className="p-2 rounded-full bg-white shadow-md hover:bg-hover">
            <span className="sr-only">Previous</span>
           
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          <button className="p-2 rounded-full bg-white shadow-md hover:bg-hover">
            <span className="sr-only">Next</span>
            
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg border-2 hover:bg-hover">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <span className="text-yellow-500 text-lg">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
              </div>
              <span className="text-gray-500">10th Feb, 2023</span>
            </div>
            <p className="text-gray-700 mb-4 ">
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore. Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore. Lorem Ipsum Dolor Sit Amet.
            </p>
            <div className="flex items-center">
              <img className="w-12 h-12 rounded-full mr-4" src={woman2} alt="Ray Robertson" />
              <div>
                <h4 className="font-bold">Ray Robertson</h4>
                <p className="text-gray-600">CEO Company</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border-2 hover:bg-hover">
            <div className="flex justify-between items-center mb-4 ">
              <div className="flex items-center">
                <span className="text-yellow-500 text-lg">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
              </div>
              <span className="text-gray-500">10th Feb, 2023</span>
            </div>
            <p className="text-gray-700 mb-4">
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore. Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore. Lorem Ipsum Dolor Sit Amet.
            </p>
            <div className="flex items-center">
              <img className="w-12 h-12 rounded-full mr-4" src={woman1} alt="Sherl" />
              <div>
                <h4 className="font-bold">Sherl</h4>
                <p className="text-gray-600">CEO Company</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <button className="px-6 py-2 bg-backgroundColor2 text-white rounded-lg shadow-md hover:bg-pink-950 transition">
            View All
          </button>
        </div>
      </div>
    </section>
  );
};

export default Review;
