import React from 'react';
import { MdOutlinePregnantWoman } from "react-icons/md";
import { HiBuildingOffice } from "react-icons/hi2";
import { PiStudentDuotone } from "react-icons/pi";
import { IoPeopleCircle } from "react-icons/io5";

const categories = [
  { id: 1, name: 'Students', icon: <PiStudentDuotone />, bgColor: 'bg-violet-200' },
  { id: 2, name: 'Working Professionals', icon: <HiBuildingOffice />
    , bgColor: 'bg-violet-200' },
  { id: 3, name: 'Postpartum Depression',  icon: <MdOutlinePregnantWoman />
    , bgColor: 'bg-violet-200' },
  { id: 4, name: 'Midlife adults',  icon: <IoPeopleCircle />, bgColor: 'bg-violet-200' },
];

const CategoryCard = ({ category }) => {
  const handleClick = () => {
    alert(`Clicked on ${category.name}`);
  };

  return (
    <div
      className={`rounded-lg p-4 ${category.bgColor} text-white flex flex-col items-center justify-center cursor-pointer hover:bg-hover`}
      onClick={handleClick}
    >
      <div className="text-4xl mb-2 ">{category.icon}</div>
      <h2 className="text-xl font-bold">{category.name}</h2>
      
    </div>
  );
};

const Community = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="flex justify-between items-center bg-white p-20 shadow-md">
        <h1 className="text-2xl font-bold text-lightText">All Category</h1>
        <button className="text-2xl text-lightText">Sort</button>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Community;
