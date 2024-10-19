import React from 'react';

const Emergency = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6 pt-20">
      <div className="container mx-auto">
        <header className="bg-green-700 text-white p-4 rounded-md mb-6 cursor-pointer">
          <h1 className="text-3xl font-bold text-center">Emergency Help</h1>
        </header>
        
        <section className="bg-backgroundColor p-6 rounded-md shadow-md mb-6 cursor-pointer">
          <p className="text-gray-700">Welcome to our emergency page. Here, you will find all helpline numbers for mental help available in India</p>
        </section>
        
        <section className="bg-backgroundColor p-6 rounded-md shadow-md cursor-pointer">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Kiran Helpline</h2>
          <p className="text-gray-700">Provides mental health support in 13 languages</p>
          <p className="text-gray-700 mt-4">Available 24/7</p>
          <p className="text-gray-700">Phone: 1800-599-0019</p>
        </section>

        <section className="bg-backgroundColor p-6 rounded-md shadow-md mt-3 cursor-pointer">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Vandrevala Foundation</h2>
          <p className="text-gray-700">Offers free mental health support and psychological counseling</p>
          <p className="text-gray-700 mt-4">Available 24/7</p>
          <p className="text-gray-700">Phone: +91 9999 666 555</p>
        </section>

        <section className="bg-backgroundColor p-6 rounded-md shadow-md mt-3 cursor-pointer">
          <h2 className="text-2xl font-bold mb-4 text-lightText">MPower Mind Matters</h2>
          <p className="text-gray-700">Provides 24/7 mental health support</p>
          
          <p className="text-gray-700">Phone: 1800-121-2030</p>
        </section>

        <section className="bg-backgroundColor p-6 rounded-md shadow-md mt-3 cursor-pointer">
          <h2 className="text-2xl font-bold mb-4 text-lightText">Live Love Laugh Foundation</h2>
          <p className="text-gray-700">Offers support for stress, anxiety, and depression</p>
         
          <p className="text-gray-700">Phone: +91 8489 512307
          </p>
        </section>

        <section className="bg-backgroundColor p-6 rounded-md shadow-md mt-3 cursor-pointer">
          <h2 className="text-2xl font-bold mb-4 text-lightText">AASRA</h2>
          <p className="text-gray-700">Provides support for mental health crises and suicide prevention.</p>
           <p className="text-gray-700">Phone: +91 22 27546669</p>
        </section>

        <section className="bg-backgroundColor p-6 rounded-md shadow-md mt-3 cursor-pointer">
          <h2 className="text-2xl font-bold mb-4 text-lightText">iCALL</h2>
          <p className="text-gray-700">Offers free, confidential, and anonymous mental health counseling.</p>
           <p className="text-gray-700">Phone:  +91 22 25521111</p>
        </section>

        <section className="bg-backgroundColor p-6 rounded-md shadow-md mt-3 cursor-pointer">
          <h2 className="text-2xl font-bold mb-4 text-lightText">Sangath</h2>
          <p className="text-gray-700">Provides mental health support and counseling services.

</p>
           <p className="text-gray-700">Phone:  +91 9769 666 666</p>
        </section>

        <section className="bg-backgroundColor p-6 rounded-md shadow-md mt-3 cursor-pointer">
          <h2 className="text-2xl font-bold mb-4 text-lightText">Crisis Management Centre</h2>
          <p className="text-gray-700">Offers support for mental health emergencies.</p>
           <p className="text-gray-700">Phone:+91 22 2495 9999</p>
        </section>
      </div>
    </div>
  );
};

export default Emergency;
