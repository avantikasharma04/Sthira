import React from 'react';
import mh from '../LoginComp/mh.png'
import man from '../LoginComp/man.jpg'
const Log = () => {
  return (
    <div className="bg-pink-100 min-h-screen flex items-center justify-center">
        <div className="bg-white h-50 rounded-lg shadow-lg max-w-md w-1/2" >
            <img src={mh} alt="" />
        </div>
    <div className="bg-gradient-to-r from-rose-50 to-rose-300 p-8 rounded-lg shadow-lg max-w-md w-1/2">
      <div className="flex justify-center mb-6">
        <img src={man} alt="Mental Health" className="w-24 h-24 rounded-full" />
      </div>
      <h2 className="text-2xl font-bold text-center text-rose-500 mb-6">Welcome Back</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-rose-500 focus:border-rose-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input type="password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-rose-500 focus:border-rose-500" />
        </div>
        <button type="submit" className="w-full py-2 px-4 bg-rose-500 text-white rounded-md shadow-sm hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500">
            <a href="/Home">Register</a></button>
      </form>
      <p className="mt-4 text-center text-sm text-gray-600">
        Don't have an account? <a href="/Register" className="text-white hover:underline">Register</a>
      </p>
    </div>
  </div>
);
};


export default Log;
