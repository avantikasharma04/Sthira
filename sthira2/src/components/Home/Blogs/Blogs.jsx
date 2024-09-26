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
          <div className="bg-white p-4 rounded-lg shadow-md text-center border-2 hover:bg-hover">
            <img src={B1} alt="Blog 1" className="w-full h-48 object-cover mb-4 rounded-lg"/>
            <h3 className="text-xl font-semibold text-lightText">Blog 1 &rarr;</h3>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md text-center  border-2 hover:bg-hover">
            <img src={B2} alt="Blog 2" className="w-full h-48 object-cover mb-4 rounded-lg"/>
            <h3 className="text-xl font-semibold text-lightText">Blog 2 &rarr;</h3>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md text-center  border-2 hover:bg-hover">
            <img src={B3} alt="Blog 3" className="w-full h-48 object-cover mb-4 rounded-lg"/>
            <h3 className="text-xl font-semibold text-lightText">Blog 3 &rarr;</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
