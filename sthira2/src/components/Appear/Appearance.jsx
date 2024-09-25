import React, { useState, useEffect } from 'react';

const Appearance= () => {
  const [darkMode, setDarkMode] = useState(false);
  const [accentColor, setAccentColor] = useState('#F55F5F');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="flex flex-col md:flex-row p-4 pt-24 bg-backgroundColor">
    {/* Sidebar */}
    <div className="w-full md:w-1/4 bg-white p-4 rounded-lg">
      <h2 className="font-semibold text-2xl text-gray-400 mb-4">Settings</h2>
      <ul>
        <li className="mb-3 text-xl cursor-pointer "><a href="/Account">Account</a></li>
        <li className="mb-3 text-xl cursor-pointer "><a href="/Financial">Financial & payments</a></li>
        <li className="mb-3 text-xl cursor-pointer text-green-600"><a href="/Appear">Appearance</a></li>
      </ul>
      <h2 className="font-semibold  mt-4 mb-4 text-2xl text-gray-400">System</h2>
      <ul>
        <li className="mb-3 text-xl cursor-pointer "><a href="/Notification">Notifications</a></li>
      </ul>
    </div>

    <div className="min-h-screen w-full bg-white dark:bg-darkBg text-black dark:text-darkText transition-colors duration-500 font-sans ml-5">
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-lightText mb-6 text-center">Appearance Adjustment</h1>
        
        <div className="mb-6">
          <label htmlFor="accent-color" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Accent Color</label>
          <input 
            type="color" 
            id="accent-color" 
            value={accentColor} 
            onChange={(e) => setAccentColor(e.target.value)} 
            className="mt-1 block w-full border-none rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Interface Theme</label>
          <div className="flex space-x-4 mt-2">
            <button 
              onClick={() => setDarkMode(false)} 
              className={`px-4 py-2 rounded-lg shadow-lg ${!darkMode ? 'bg-primary text-white' : 'bg-gray-200 dark:bg-gray-700 text-black dark:text-white'} transition-transform transform hover:scale-105 duration-300`}
            >
              Light
            </button>
            <button 
              onClick={() => setDarkMode(true)} 
              className={`px-4 py-2 rounded-lg shadow-lg ${darkMode ? 'bg-primary text-white' : 'bg-gray-200 dark:bg-gray-700 text-black dark:text-white'} transition-transform transform hover:scale-105 duration-300`}
            >
              Dark
            </button>
          </div>
        </div>

        <div className="flex justify-between">
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            Reset to Default
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Save Changes
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Appearance;
