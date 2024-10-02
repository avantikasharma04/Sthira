import React from 'react';
import man from '../Regcomp/man.jpg'
import pic1 from '../Regcomp/pic1.jpeg'

const Reg = () => {
  return (
    <div className="bg-backgroundColor2 min-h-screen flex items-center justify-center">
        <div className="bg-white h-50 rounded-lg shadow-lg max-w-md w-1/2" >
            <img src={pic1} alt="" />
        </div>
    <div className="bg-gradient-to-r from-amber-50 to-backgroundColor p-8 rounded-lg shadow-lg max-w-md w-1/2">
      <div className="flex justify-center mb-6">
        <img src={man} alt="Mental Health" className="w-24 h-24 rounded-full" />
      </div>
      <h2 className="text-2xl  text-center text-backgroundColor2 mb-6">Create an Account</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-rose-500 focus:border-rose-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input type="password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-rose-500 focus:border-rose-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
          <input type="password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-rose-500 focus:border-rose-500" />
        </div>
        <button type="submit" className="w-full py-2 px-4 bg-red-500 text-white rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
            <a href="/Optionpage">Register</a></button>
      </form>
      <p className="mt-4 text-center text-sm text-gray-600">
       Already have an account? <a href="/Login" className="text-red-600 hover:underline">Login</a>
      </p>
    </div>
  </div>
);
};


export default Reg;
