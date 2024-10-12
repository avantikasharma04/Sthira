import React from 'react';

const Readmore = () => {
  return (
    <div className="p-8 bg-backgroundColor min-h-screen">
      {/* Header Section */}
      <div className="text-center mb-8 pt-20">
        <h1 className="text-4xl font-bold text-gray-800">Know More About Mental Health and <span className='text-backgroundColor2'>Sthira</span></h1>
        <p className="text-lg text-gray-600 mt-2">
          Explore the importance of mental well-being and how you can take care of yourself and others.
        </p>
      </div>

      {/* Why Mental Health is Important Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">Why is Mental Health Important?</h2>
        <p className="text-gray-600">
          Mental health is as important as physical health. It affects how we think, feel, and act in our daily lives. 
          Good mental health helps you cope with stress, make meaningful decisions, and foster positive relationships. 
          Understanding mental health can help you better manage challenges, take preventive steps, and live a healthier life.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">How does Sthira help you?</h2>
        <p className="text-gray-600">
          Mental health is as important as physical health. It affects how we think, feel, and act in our daily lives. 
          Good mental health helps you cope with stress, make meaningful decisions, and foster positive relationships. 
          Understanding mental health can help you better manage challenges, take preventive steps, and live a healthier life.
        </p>
      </section>

      {/* Tips for Maintaining Mental Health */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">Tips for Maintaining Mental Health</h2>
        <ul className="list-disc ml-6 text-gray-600">
          <li className="mb-2">Stay connected with friends and family.</li>
          <li className="mb-2">Practice mindfulness and relaxation techniques.</li>
          <li className="mb-2">Get regular physical exercise and sufficient sleep.</li>
          <li className="mb-2">Reach out for support when you feel overwhelmed.</li>
          <li className="mb-2">Set realistic goals and break them down into smaller steps.</li>
        </ul>
      </section>

      {/* Resources Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">Mental Health Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Resource 1 */}
          <div className="border border-gray-300 p-4 rounded-lg bg-white shadow-sm cursor-pointer">
            <h3 className="text-2xl font-semibold text-gray-800">National Helpline</h3>
            <p className="text-gray-600 mt-2">
              If you or someone you know is struggling, reach out to Toll-Free Mental Health Rehabilitation Helpline Kiran
              <span className="font-bold"> (1800-599-0019)</span> <span>which is available in 13 Languages and available 24x7 </span>.
            </p>
          </div>
          </div>

      </section>

      {/* Call to Action Section */}
      <section className="text-center bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">Take the Next Step</h2>
        <p className="text-gray-600 mb-6">
          Your mental health matters. Learn more, reach out, and let <span className='text-backgroundColor2 font-semibold'>Sthira</span> Help you.
        </p>
        <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          <a href="/Community">Get Help Now</a>
        </button>
      </section>
    </div>
  );
};

export default Readmore;
