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
                <p className='text-justify text-green-700'> *The following questions are designed to match you to provide you better chatbot assistance or a licensed therapist  based on your therapy needs and personal preferences.</p>
                <br />
                <form className="space-y-4">
                    
                    <div>
                        <label className="block text-gray-700">How important is religion in your life</label>
                        <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
                            <option value="">Select your option</option>
                            <option value="Significantly important">Significantly important</option>
                            <option value="Important">Important</option>
                            <option value="Not Important">Not Important</option>
                            <option value="Depends on the situation">Depends on the situation</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-gray-700">Do you consider yourself spiritual?</label>
                        <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
                            <option value="">Select your option</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            
                        </select>
                    </div>

                    <div>
                        <label className="block text-gray-700">Have you ever tried therapy before?</label>
                        <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
                            <option value="">Select your option</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            
                        </select>
                    </div>

                    <div>
                        <label className="block text-gray-700">What led you to consider therapy today?</label>
                        <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
                            <option value="">Select your option</option>
                            <option value="I felt like it">I felt like it</option>
                            <option value="I feel depressed">I feel depressed</option>
                            <option value="I still don't know">I still don't know</option>
                            <option value="I need someone to talk too">I need someone to talk too</option>
                            <option value="I don't feel good">I don't feel good</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-gray-700">What are your expectations from your therapist? A therapist who...</label>
                        <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
                            <option value="">Select your option</option>
                            <option value="Straight-forward">Straight-forward</option>
                            <option value="Gentle">Gentle</option>
                            <option value="Flexible">Flexible</option>
                            <option value="I am okay with anything">I am okay with anything</option>
                        </select>
                    </div>
                    
                    <div>
                        <label className="block text-gray-700">How would you rate your physical health?</label>
                        <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
                            <option value="">Select your option</option>
                            <option value="Good">Good</option>
                            <option value="Fair">Fair</option>
                            <option value="Bad">Bad</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-gray-700">How would you rate your eating habits?</label>
                        <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
                            <option value="">Select your option</option>
                            <option value="Good">Good</option>
                            <option value="Fair">Fair</option>
                            <option value="Bad">Bad</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-gray-700">Are you currently experiencing overwhelming sadness, grief, or depression?
                        </label>
                        <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
                            <option value="">Select your option</option>
                            <option value="Good">Good</option>
                            <option value="Fair">Fair</option>
                            <option value="Bad">Bad</option>
                        </select>
                    </div>

                    
                    <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-900"><a href="/Genform3">Next</a></button>
                </form>
            </div>
        </div>
    );
};

export default Gen1;
