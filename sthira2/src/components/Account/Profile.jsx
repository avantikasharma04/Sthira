import React, { useState } from 'react';
import woman2 from '../Account/woman2.jpg'

const Profile = () => {
  const [email, setEmail] = useState("bryan.cranston@mail.com");
  const [firstName, setFirstName] = useState("Bryan");
  const [lastName, setLastName] = useState("Cranston");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  return (
    <div className="flex flex-col md:flex-row p-4 pt-24 bg-backgroundColor">
      {/* Sidebar */}
      <div className="w-full md:w-1/4 bg-white p-4 rounded-lg">
        <h2 className="font-semibold text-2xl text-gray-600 mb-4">Settings</h2>
        <ul>
          <li className="mb-3 text-xl cursor-pointer text-green-600">Account</li>
          <li className="mb-3 text-xl cursor-pointer"><a href="/Financial">Financial & payments</a></li>
          <li className="mb-3 text-xl cursor-pointer">Appearance</li>
        </ul>
        <h2 className="font-semibold  mt-4 mb-4 text-2xl text-gray-600">System</h2>
        <ul>
          <li className="mb-3 text-xl cursor-pointer"><a href="/Notification">Notifications</a></li>
          <li className='text-xl cursor-pointer'>Preferences</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-full md:w-3/4 md:ml-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="font-semibold text-xl mb-6">Account</h2>

        {/* Profile Picture */}
        <div className="flex items-center mb-6">
          <img
            src={woman2}
            alt="Profile"
            className="w-14 h-14 rounded-full mr-4"
          />
          <div>
            <button className="bg-gray-200 px-3 py-1 rounded-md text-sm mr-2">Upload new picture</button>
            <button className="bg-red-200 px-3 py-1 rounded-md text-sm">Delete</button>
          </div>
        </div>

        {/* Full Name */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Full Name</label>
          <div className="flex space-x-4">
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-1/2 p-2 border rounded-lg"
              placeholder="First Name"
            />
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-1/2 p-2 border rounded-lg"
              placeholder="Last Name"
            />
          </div>
        </div>

        {/* Email */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Contact Email</label>
          <div className="flex items-center space-x-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded-lg"
              placeholder="Email"
            />
            <button className="bg-green-200 px-3 py-1 rounded-md text-sm">Add another email</button>
          </div>
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Password</label>
          <div className="flex space-x-4">
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="w-1/2 p-2 border rounded-lg"
              placeholder="Current Password"
            />
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-1/2 p-2 border rounded-lg"
              placeholder="New Password"
            />
          </div>
        </div>

        {/* Integrated Accounts */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Integrated account</label>
          <input
            type="text"
            disabled
            value="Manage your current integrated accounts"
            className="w-full p-2 border rounded-lg bg-gray-100"
          />
        </div>
        <button className='border-2 p-4 rounded-xl text-xl text-white bg-red-700 hover:bg-red-900'>
          <a href="/Financial">Submit</a></button>
      </div>
    </div>
  );
};

export default Profile;
