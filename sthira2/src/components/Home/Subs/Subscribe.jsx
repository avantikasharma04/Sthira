import React from 'react';
import gift from '../Subs/gift.png'

const Subscribe = () => {
  return (
    <div className="bg-backgroundColor p-11 flex justify-center items-center ">
      <div className="bg-white rounded-lg shadow-md p-8 md:flex md:items-center md:space-x-8">
        {/* Text */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h1 className="text-backgroundColor2 text-3xl font-semibold">
            Give the gift of a BetterHelp membership
          </h1>
          <p className="text-gray-700 mt-4">
            Therapy is one of the most meaningful gifts you can give to your friends and loved ones.
          </p>
          <button className="mt-6 bg-backgroundColor2 hover:bg-red-700 text-white px-4 py-2 rounded-lg  transition duration-300">
            <a href="/Subpage">Gift a membership</a>
          </button>
        </div>

        {/* Image*/}
        <div className="flex justify-center md:justify-end">
          <img
            className="w-full h-full max-w-xs md:max-w-sm object-cover rounded-lg"
            src={gift}
            alt="Gift box"
          />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
