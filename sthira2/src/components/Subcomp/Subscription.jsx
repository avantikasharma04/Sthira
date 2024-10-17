import React from 'react';
import gi from '../Subcomp/gi.jpg'

const Subscription = () => {
  return (
    <div className="bg-backgroundColor min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6  text-3xl font-extrabold text-lightText text-justify">
            Give the gift of Subscription to our Mental Health Resources to your friends and family
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Stay updated with the latest tips and support from Sthira
          </p>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img 
            src={gi}
            alt="Mental Health" 
            className="w-48 h-48 object-cover rounded-full border-2 border-backgroundColor2"
          />
        </div>

        {/* Subscription Form */}
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-backgroundColor2 focus:border-red-800 focus:z-10 sm:text-sm"
                placeholder="Email address of the buyer"
              />
            </div>
            <div>
              <label htmlFor="subscription-plan" className="sr-only">
                Subscription Plan
              </label>
              <select
                id="subscription-plan"
                name="plan"
                className="mt-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-backgroundColor2 focus:border-red-800 focus:z-10 sm:text-sm"
                required
              >
                <option value="">Choose your plan</option>
                <option value="basic">Basic - Free</option>
                <option value="standard">Standard - Rs 1500/ 3 Months- 30 sessions and unlimited chatbot access</option>
                <option value="premium">Premium - Rs 3500/ 4 Months- 50 sessions and unlimited chatbot access</option>
              </select>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              <a href="/Financial">Buy Gift card</a>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Subscription;
