import React, { useState } from 'react';
import woman2 from '../Account/woman2.jpg'

const Payment = () => {
  const [email, setEmail] = useState("bryan.cranston@mail.com");
  const [firstName, setFirstName] = useState("Bryan");
  const [lastName, setLastName] = useState("Cranston");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  return (
    <div className="flex flex-col md:flex-row p-4 pt-20 ">
      {/* Sidebar */}
      <div className="w-full md:w-1/4 bg-white p-4 rounded-lg">
        <h2 className="font-semibold text-2xl text-gray-400 mb-4">Settings</h2>
        <ul>
          <li className="mb-3 text-xl cursor-pointer "><a href="/Account">Account</a></li>
          <li className="mb-3 text-xl cursor-pointer text-green-600"><a href="/Financial">Financial & payments</a></li>
          <li className="mb-3 text-xl cursor-pointer">Appearance</li>
        </ul>
        <h2 className="font-semibold  mt-4 mb-4 text-2xl text-gray-400">System</h2>
        <ul>
          <li className="mb-3 text-xl cursor-pointer"><a href="/Notification">Notifications</a></li>
          <li className='text-xl cursor-pointer'>Preferences</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row p-4 space-y-6 md:space-y-0 md:space-x-6 bg-backgroundColor w-full h-full">
      {/* Card Info Section */}
      <div className=" md:w-2/3 bg-white p-6 rounded-lg shadow-md w-full h-full">
        <div className="flex justify-between items-start">
          <h2 className="font-semibold text-xl">Monthly subscriptions</h2>
          <button className="text-gray-500">Manage</button>
        </div>

        {/* Card Details */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 my-6">
          <div className="bg-blue-100 w-16 h-16 rounded-lg"></div>
          <div className="flex-grow">
            <h3 className="text-lg font-semibold">HDFC Credit card</h3>
            <button className="text-sm text-blue-500">Rename</button>
          </div>
          <div className="space-y-1 text-sm">
            <p>Type: Virtual</p>
            <p>Card number: 5103 9335 5847 7886</p>
            <p>Exp. date: 10 / 2028</p>
            <p>CVC: *** <button className="text-blue-500">Show</button></p>
          </div>
        </div>

        {/* Spending and Limit 
        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="text-gray-600">Spent this month</p>
            <p className="text-2xl font-bold">$1,454.26</p>
          </div>
          <div>
            <p className="text-gray-600">Limit</p>
            <p className="text-2xl font-bold">$1,600.00 <span className="text-sm text-gray-500">per month</span></p>
          </div>
        </div>*/}
        
        
        <div className="relative bg-gray-200 rounded-full h-3">
          <div className="absolute top-0 left-0 bg-black h-3 rounded-full" style={{ width: '90%' }}></div>
        </div>
        <p className="text-sm text-gray-500 mt-2">Renews in 4 days</p>
      </div>

      {/* Issued Access and Recent Transactions */}
      <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Issued access</h3>
        
        {/* Issued Access */}
        <div className="space-y-3 mb-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-pink-300 rounded-full"></div>
              <p>Riya Mathur</p>
            </div>
            <p>Rs 399.00 per month</p>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-300 rounded-full"></div>
              <p>Jayesh Mathur</p>
            </div>
            <p>Rs 399.00 per month</p>
          </div>
        </div>

        <h3 className="text-lg font-semibold mb-4">Recent transactions</h3>
        
        {/* Recent Transactions */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
              <div>
                <p>Sthira Help</p>
                <p className="text-sm text-gray-500">Aug 20, 2024 - Monthly</p>
              </div>
            </div>
            <p>Rs 399.00</p>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-600 rounded-full"></div>
              <div>
                <p>Dr. Meena Roy</p>
                <p className="text-sm text-gray-500">Aug 4, 2024 - Annual</p>
              </div>
            </div>
            <p>Rs 399.00</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};


    
 
export default Payment;
