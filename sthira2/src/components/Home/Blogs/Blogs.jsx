import React from 'react';
import B1 from '../Blogs/blogs/B1.png'
import B2 from '../Blogs/blogs/B2.jpg'
import B3 from '../Blogs/blogs/B3.jpg'

const Blogs = () => {
  return (
    <section className="bg-backgroundColor py-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Latest from <span className="text-backgroundColor2">Sthira</span></h2>
          <a href="#blogs" className="text-lg font-semibold text-gray-700 hover:text-hover">Read our Blogs &rarr;</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-4 rounded-lg shadow-md text-center border-2 hover:bg-hover cursor-pointer">
            <img src={B1} alt="Blog 1" className="w-full h-48 object-cover mb-4 rounded-lg"/>
            <h3 className="text-xl font-semibold text-lightText">"The Role of Self-Care in Managing Mental Health: Practical Tips for Everyday Life"<a href="/Blog1">&rarr;</a> </h3>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md text-center  border-2 hover:bg-hover cursor-pointer">
            <img src={B2} alt="Blog 2" className="w-full h-48 object-cover mb-4 rounded-lg"/>
            <h3 className="text-xl font-semibold text-lightText">"Understanding the Different Types of Mental Health Disorders: A Guide to Early Signs and Treatment"
           <a href="/Blog2">&rarr;</a> </h3>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md text-center  border-2 hover:bg-hover cursor-pointer">
            <img src={B3} alt="Blog 3" className="w-full h-48 object-cover mb-4 rounded-lg"/>
            <h3 className="text-xl font-semibold text-lightText">"How Technology is Transforming Mental Health Support: The Rise of AI and Mental Health Apps" <a href="/Blog3">&rarr;</a> </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
