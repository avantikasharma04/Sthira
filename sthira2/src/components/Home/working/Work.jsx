import React from 'react';

const Work = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
          How it works
        </h2>

        {/* Content Section */}
        <div className="mt-10 flex flex-col md:flex-row justify-center items-center gap-10">
          {/* Left side images */}
          <div className="flex flex-col items-center gap-4">
            <img 
              src="https://via.placeholder.com/150" 
              alt="Person 1" 
              className="w-40 h-40 object-cover rounded-md"
            />
            <img 
              src="https://via.placeholder.com/150" 
              alt="Person 2" 
              className="w-40 h-40 object-cover rounded-md"
            />
          </div>

          {/* Right side text */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-gray-900">
              Get matched to the best therapist for you
            </h3>
            <p className="mt-4 text-lg text-gray-600">
              Answer a few questions to find a credentialled therapist who fits your needs and preferences. Tap into the largest network of credentialled providers.
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="mt-10 flex flex-col md:flex-row justify-center items-center gap-10">
          {/* Left side images */}
          <div className="flex flex-col items-center gap-4">
            <img 
              src="https://via.placeholder.com/150" 
              alt="Person 1" 
              className="w-40 h-40 object-cover rounded-md"
            />
            <img 
              src="https://via.placeholder.com/150" 
              alt="Person 2" 
              className="w-40 h-40 object-cover rounded-md"
            />
          </div>

          {/* Right side text */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-gray-900">
              Get matched to the best therapist for you
            </h3>
            <p className="mt-4 text-lg text-gray-600">
              Answer a few questions to find a credentialled therapist who fits your needs and preferences. Tap into the largest network of credentialled providers.
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="mt-10 flex flex-col md:flex-row justify-center items-center gap-10">
          {/* Left side images */}
          <div className="flex flex-col items-center gap-4">
            <img 
              src="https://via.placeholder.com/150" 
              alt="Person 1" 
              className="w-40 h-40 object-cover rounded-md"
            />
            <img 
              src="https://via.placeholder.com/150" 
              alt="Person 2" 
              className="w-40 h-40 object-cover rounded-md"
            />
          </div>

          {/* Right side text */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-gray-900">
              Get matched to the best therapist for you
            </h3>
            <p className="mt-4 text-lg text-gray-600">
              Answer a few questions to find a credentialled therapist who fits your needs and preferences. Tap into the largest network of credentialled providers.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Work;
