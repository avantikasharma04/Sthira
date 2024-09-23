// src/components/SettingsPage.js
import React, { useState } from 'react';

const SettingsPage = () => {
  const [settings, setSettings] = useState({
    desktopNotification: false,
    chatNotification: false,
    channelNotification: false,
    taggedMessage: false,
    TherapistRequest: false,
    updateNotification: false,
  });

  const handleToggle = (setting) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [setting]: !prevSettings[setting],
    }));
  };

  return (
    <div className="flex flex-col md:flex-row p-4 pt-20">
    {/* Sidebar */}
    <div className="w-full md:w-1/4 bg-white p-4 rounded-lg">
      <h2 className="font-semibold text-2xl text-gray-400 mb-4">Settings</h2>
      <ul>
        <li className="mb-3 text-xl cursor-pointer "><a href="/Account">Account</a></li>
        <li className="mb-3 text-xl cursor-pointer "><a href="/Financial">Financial & payments</a></li>
        <li className="mb-3 text-xl cursor-pointer">Appearance</li>
      </ul>
      <h2 className="font-semibold  mt-4 mb-4 text-2xl text-gray-400">System</h2>
      <ul>
        <li className="mb-3 text-xl cursor-pointer text-green-600">Notifications</li>
        <li className='text-xl cursor-pointer'>Preferences</li>
      </ul>
    </div>
    
    <div className="min-h-screen bg-backgroundColor flex flex-col items-center w-full pt-10">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Notification Settings</h2>
        <div className="space-y-4">
          {Object.keys(settings).map((setting) => (
            <div key={setting} className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700 capitalize">
                {setting.replace(/([A-Z])/g, ' $1').toLowerCase()}
              </span>
              <button
                onClick={() => handleToggle(setting)}
                className={`${
                  settings[setting] ? 'bg-backgroundColor2' : 'bg-gray-300'
                } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none`}
              >
                <span
                  className={`${
                    settings[setting] ? 'translate-x-6' : 'translate-x-1'
                  } inline-block h-4 w-4 transform bg-white rounded-full transition-transform`}
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default SettingsPage;
