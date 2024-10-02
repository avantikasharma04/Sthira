import React from 'react';
import pep2 from '../Gencomp/pep2.jpeg';

const Gen1 = () => {
    return (
        
        <div className="min-h-screen bg-backgroundColor2 flex items-center justify-center">
            <div>
            
            </div>
            <div className="bg-backgroundColor mt-6 mb-6 p-8 rounded-lg shadow-lg w-full max-w-md">
                <img src={pep1} alt="Mental Health" className="w-full h-48 object-cover rounded-t-lg mb-4" />
                <h1 className='text-4xl'>Help us know you <span className='text-backgroundColor2'>Better</span></h1>
                <br />
                <p className='text-justify text-green-700 text-bold'> Over the past 2 weeks, how often have you been bothered by any of the following problems</p>
                <br />
                <form className="space-y-4">
                    
                    <div>
                        <label className="block text-gray-700">Little interest or pleasure in doing things.
                        </label>
                        <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
                            <option value="">Select your option</option>
                            <option value="Agreee">Agree</option>
                            <option value="Not sure">Not sure</option>
                            <option value="Disagree">Disagree</option>
                            <option value="Depends on the situation">Depends on the situation</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-gray-700">Little interest or pleasure in doing things.
                        </label>
                        <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
                            <option value="">Select your option</option>
                            <option value="Agreee">Agree</option>
                            <option value="Not sure">Not sure</option>
                            <option value="Disagree">Disagree</option>
                            <option value="Depends on the situation">Depends on the situation</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-gray-700">Moving or speaking so slowly that other people could have noticed? Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual.

                        </label>
                        <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
                            <option value="">Select your option</option>
                            <option value="Agreee">Agree</option>
                            <option value="Not sure">Not sure</option>
                            <option value="Disagree">Disagree</option>
                            <option value="Depends on the situation">Depends on the situation</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-gray-700">Feeling down, depressed or hopeless.</label>
                        <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
                            <option value="">Select your option</option>
                            <option value="Most of the time">Most of the time</option>
                            <option value="Not sure">Not sure</option>
                            <option value="Sometimes">Sometimes</option>
                            <option value="Never">Never</option>
                            <option value="Depends on the situation">Depends on the situation</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-gray-700">Trouble falling asleep, staying asleep, or sleeping too much.
                        </label>
                        <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
                            <option value="">Select your option</option>
                            <option value="Most of the time">Most of the time</option>
                            <option value="Not sure">Not sure</option>
                            <option value="Sometimes">Sometimes</option>
                            <option value="Never">Never</option>
                            <option value="Depends on the situation">Depends on the situation</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-gray-700">Feeling tired or having little energy.
                        </label>
                        <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
                            <option value="">Select your option</option>
                            <option value="Most of the time">Most of the time</option>
                            <option value="Not sure">Not sure</option>
                            <option value="Sometimes">Sometimes</option>
                            <option value="Never">Never</option>
                            <option value="Depends on the situation">Depends on the situation</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-gray-700">Poor appetite or overeating.
                        </label>
                        <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
                            <option value="">Select your option</option>
                            <option value="Most of the time">Most of the time</option>
                            <option value="Not sure">Not sure</option>
                            <option value="Sometimes">Sometimes</option>
                            <option value="Never">Never</option>
                            <option value="Depends on the situation">Depends on the situation</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-gray-700">Feeling bad about yourself - or that you are a failure or have let yourself or your family down.
                        </label>
                        <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
                            <option value="">Select your option</option>
                            <option value="Most of the time">Most of the time</option>
                            <option value="Not sure">Not sure</option>
                            <option value="Sometimes">Sometimes</option>
                            <option value="Never">Never</option>
                            <option value="Depends on the situation">Depends on the situation</option>
                        </select>
                    </div>

                  
                    
                    <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-900">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Gen1;
