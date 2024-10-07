import React from 'react';
import img1 from '../working/img1.jpeg'
import img3 from '../working/img3.jpeg'
import img4 from '../working/img4.jpeg'
import im2 from '../working/im2.jpeg'


const Work = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <h2 className="text-center text-3xl font-extrabold text-lightText sm:text-4xl">
          How it works
        </h2>

        {/* Content Section */}
        <div className="mt-10 flex flex-col md:flex-row justify-center items-center gap-10">
          {/* Left side images */}
          <div className="flex flex-col items-center gap-4">
            <img 
              src={img1} 
              alt="Person 1" 
              className="w-30 h-30 object-cover rounded-md"
            />
          
            
          </div>

          {/* Right side text */}
          <div className="text-center md:text-left">
            <h3 className="text-4xl font-bold text-textcolor">
             Get matched to the best therapist for you or Avail of our chatbot services
            </h3>
            <p className="mt-4 text-lg text-lightText">
            Find a licensed therapist who meets your requirements and preferences by providing answers to a few simple questions. Reach out to our Chatbot for a comfortable experience.
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="mt-10 flex flex-col md:flex-row justify-center items-center gap-10">
          
          
          {/* Left side images */}
          <div className="flex flex-col items-center gap-4">
            <img 
              src={img3} 
              alt="Person 1" 
              className="w-96 h-80 object-cover rounded-md"
            />
        
            
          </div>

          {/* Right side text */}
          <div className="flex flex-col items-center gap-4">
            <img 
              src={im2} 
              alt="Person 1" 
              className="w-96 h-80 object-cover rounded-md"
            />
        
            
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-4xl font-bold text-textcolor">
            Communicate your way
            </h3>
            <p className="mt-4 text-lg text-lightText">
            Speak to us through our chatbot or with your therapist via text, chat, phone, or video chat, whichever makes you feel most at ease. </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="mt-10 flex flex-col md:flex-row justify-center items-center gap-10">
         
          {/* Left side images */}
          <div className="flex flex-col items-center gap-4">
            <img 
              src={img4} 
              alt="Person 1" 
              className="w-30 h-30 object-cover rounded-md"
            />
            
            
          </div>

          {/* Right side text */}
          <div className="text-center md:text-left">
            <h3 className="text-4xl font-bold text-textcolor">
            Whenever you need us
            </h3>
            <p className="mt-4 text-lg text-lightText">
            Your therapist accepts messages at any time and from any location. Additionally, you can arrange live sessions at your convenience and join from any computer or mobile device.

</p>
          </div>
        </div>

      </div>
    </div>
    
  );
};

export default Work;
