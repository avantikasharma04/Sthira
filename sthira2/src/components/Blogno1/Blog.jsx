import React from 'react';

const B1 = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">The Role of Self-Care in Managing Mental Health</h1>
        <p className="text-lg text-gray-600 mt-2">Practical Tips for Everyday Life</p>
      </div>

      {/* Introduction */}
      <section className="mb-12">
        <p className="text-gray-600">
          In today's fast-paced world, mental health often takes a backseat. However, self-care plays a vital role in 
          maintaining mental well-being. It’s not just a buzzword but a necessary practice to combat stress, anxiety, and burnout.
        </p>
      </section>

      {/* What is Self-Care */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">What is Self-Care?</h2>
        <p className="text-gray-600">
          Self-care refers to any activity we do intentionally to care for our physical, emotional, or mental health. 
          It’s about making time for yourself in a way that replenishes your mental energy and helps you cope with challenges effectively.
        </p>
      </section>

      {/* Practical Self-Care Tips */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">Practical Self-Care Tips</h2>
        <ul className="list-disc ml-6 text-gray-600">
          <li className="mb-2">Mindfulness and Meditation: Practices like mindfulness and meditation are incredibly effective in relieving stress.</li>
          <li className="mb-2">Digital Detox: Take short breaks from social media to improve mental clarity.</li>
          <li className="mb-2">Physical Activity: Engage in yoga or regular exercise to release stress-relieving endorphins.</li>
          <li className="mb-2">Set Boundaries: Learn to say no when necessary to protect your mental well-being.</li>
          <li className="mb-2">Stay Connected: Make time for social connections with family and friends.</li>
        </ul>
      </section>

      {/* Add Image Option */}
      <div className="my-8">
        <img src="your-image-url-here.jpg" alt="Self-care" className="rounded-lg shadow-lg mx-auto" />
      </div>
    </div>
  );
};

export default B1;
