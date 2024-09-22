import React from 'react';
import woman2 from '../Account/woman2.jpg'

const Profile = () => {
  return (
    <div className=" bg-white rounded-lg overflow-hidden shadow-lg pt-20 p-10">
      {/* Profile Header */}
      <div className="bg-gradient-to-r from-violet-200 to-backgroundColor p-6 text-center rounded-sm">
        <div className="relative w-24 h-24 mx-auto mb-4">
          <img
            className="w-full h-full rounded-full border-2 border-white"
            src={woman2} 
            alt="Profile"
          />
        </div>
        <h2 className="text-xl font-bold text-lightText">Sheryl Mathew</h2>
        <p className="text-lightText">sheryl.331@gmail.com</p>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white flex justify-around py-4">
        <div className="text-center">
          <span className="material-icons text-gray-600">My Therapist</span>
          <p className="text-sm font-semibold">Know More</p>
        </div>
        <div className="relative text-center">
          <span className="material-icons text-gray-600">Saved Items</span>
          <p className="text-sm font-semibold">Wishlist</p>
          
        </div>
        <div className="relative text-center">
          <span className="material-icons text-gray-600">Notifications</span>
          <p className="text-sm font-semibold">Notifications</p>
          
        </div>
      </div>

      {/* Options List */}
      <div className="py-2 px-4 bg-backgroundColor">
        <div className="flex justify-between items-center py-3 px-2 hover:rounded-xl border-b hover:bg-hover">
          <div className="flex items-center">
            <span className="material-icons text-gray-600"></span>
            <p className="hover:text-white text-gray-700">Settings</p>
          </div>
          <span className="text-green-500">30</span>
        </div>
        <div className="flex justify-between items-center py-3 border-b hover:rounded-xl hover:bg-hover ">
          <div className="flex items-center">
            <span className="material-icons text-gray-600 hover:text-white ml-2">Update My Profile</span>
      
          </div>
        </div>
        <div className="flex justify-between items-center py-3 border-b hover:rounded-xl hover:bg-hover ">
          <div className="flex items-center">
            <span className="material-icons text-lightText hover:text-white ml-2">Privacy </span>
           
          </div>
        </div>
        <div className="flex justify-between items-center py-3 border-b hover:rounded-xl hover:bg-hover ">
          <div className="flex items-center">
            <span className="material-icons text-gray-600 hover:text-white ml-2">About</span>
            
          </div>
        </div>
        <div className="flex justify-between items-center py-3 hover:rounded-xl hover:bg-hover ">
          <div className="flex items-center">
            <span className="material-icons text-gray-600 hover:text-white ml-2">Help Center</span>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
