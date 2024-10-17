import React from 'react';
import relax from '../Blogno1/relax.jpeg'

const B1 = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen pt-20">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">The Role of Self-Care in Managing Mental Health</h1>
        <p className="text-lg text-gray-600 mt-2">Practical Tips for Everyday Life</p>
      </div>

      {/* Introduction */}
      <section className="mb-12">
        <p className="text-gray-600">
        In today's fast-paced world, mental health often takes a backseat as we try to keep up with our hectic schedules. However, self-care plays a vital role in maintaining and improving mental well-being. It’s not just a buzzword, but a necessary practice to combat stress, anxiety, and burnout. In India, where daily life can be a blend of stressors from work, education, and societal pressures, adopting a consistent self-care routine is key to emotional balance. </p>
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
          <li className="mb-2">Mindfulness and Meditation: Practices like mindfulness and meditation, especially rooted in India's spiritual traditions, are incredibly effective in relieving stress and anxiety. Apps like Headspace or Calm, or even local platforms like "InnerHour," offer guided meditation sessions that can easily fit into your day.</li>
          <li className="mb-2">Digital Detox: In a country that’s constantly plugged in, taking short breaks from social media can drastically improve mental clarity. Try limiting screen time during meals or before bed.</li>
          <li className="mb-2">Physical Activity: Whether it’s a morning walk, yoga, or joining a local fitness club, physical exercise can release endorphins, the body’s natural stress-relievers. India's yoga culture offers a range of techniques you can practice at home.</li>
          <li className="mb-2">Set Boundaries: In many cultures, including India, there’s often pressure to say yes to every request from family, friends, or colleagues. Learning to set healthy boundaries and saying no when necessary is crucial for protecting your mental well-being</li>
          <li className="mb-2">Stay Connected: Make time for family and friends, even if it’s through a quick video call. Social connection is one of the pillars of good mental health. Regular check-ins with loved ones can help alleviate loneliness.</li>
        </ul>
      </section>

      {/* Add Image Option */}
      <div className="my-8">
        <img src={relax} alt="Self-care" className="rounded-lg shadow-lg mx-auto w-96 h-96" />
      </div>
    </div>
  );
};

export default B1;
