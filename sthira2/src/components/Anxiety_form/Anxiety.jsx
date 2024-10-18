import React, { useState } from 'react';
import axios from 'axios';
import { BACKEND_URL } from '../../config';
import { useAuth } from '../../AuthContext';
import Anxiety from './anxiety.png';

const BodyImage = () => {
  const [answers, setAnswers] = useState({
    1: 0, 2: 0, 3: 0, 4: 0, 5: 0,
    6: 0, 7: 0, 8: 0, 9: 0, 10: 0,
    11: 0, 12: 0, 13: 0, 14: 0, 15: 0,
    16: 0, 17: 0
  });
  const { token } = useAuth();

  // Handle radio button change
  const handleAnswerChange = (question, value) => {
    setAnswers((prev) => ({
      ...prev,
      [question]: parseInt(value, 10),  // Convert value to integer
    }));
  };

  // Calculate total score
  const calculateScore = () => {
    return Object.values(answers).reduce((sum, value) => sum + value, 0);
  };

  // Determine risk level based on score
  const getRiskLevel = () => {
    const score = calculateScore();
    if (score <= 21) return 'Low Anxiety';
    if (score <= 35) return 'Moderate Anxiety';
    return 'Severe Anxiety';
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const score = calculateScore();
    const risk = getRiskLevel();

    try {
      await axios.post(
        `${BACKEND_URL}/api/v1/user/anxiety`, 
        { score, risk },  // Send score and risk level to backend
        {
          headers: {
            Authorization: `Bearer ${token}`,  // Include authorization token
          },
        }
      );
      alert(`Your total score is ${score}. Risk Level: ${risk}`);
    } catch (error) {
      console.error('Error submitting the form:', error);
      alert('There was an error submitting your form. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full">
        {/* Header Section with Image */}
        <div className="text-center mb-8">
          <img src={Anxiety} alt="Mental Health Survey" className="mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-800">Beck Anxiety Inventory (BAI)</h2>
        </div>

        {/* General Evaluation Section */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">General Evaluation</h3>
          <p className="text-gray-600 mb-2">
            Below is a list of common symptoms of anxiety. Please carefully read each item in the list. Indicate how much you have been
            bothered by that symptom during the past month, including today, by selecting the appropriate option.
          </p>
          <p className="text-red-500 text-sm mb-4">Please note, all fields are required.</p>
        </div>

        {/* Questions */}
        {[
          { id: 1, label: "Numbness or tingling" },
          { id: 2, label: "Feeling hot" },
          { id: 3, label: "Wobbliness in legs" },
          { id: 4, label: "Unable to relax" },
          { id: 5, label: "Fear of worst happening" },
          { id: 6, label: "Dizzy or lightheaded" },
          { id: 7, label: "Heart pounding / racing" },
          { id: 8, label: "Unsteady" },
          { id: 9, label: "Terrified or afraid" },
          { id: 10, label: "Nervous" },
          { id: 11, label: "Feeling of choking" },
          { id: 12, label: "Hands trembling" },
          { id: 13, label: "Shaky / unsteady" },
          { id: 14, label: "Fear of losing control" },
          { id: 15, label: "Difficulty in breathing" },
          { id: 16, label: "Fear of dying" },
          { id: 17, label: "Scared" },
        ].map(({ id, label }) => (
          <div className="mb-6" key={id}>
            <label className="block text-gray-700 mb-2 font-medium">{`${id}. ${label}`}</label>
            <div className="flex space-x-4">
              {[1, 2, 3, 4].map((value) => (
                <label key={value} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name={`question-${id}`}
                    value={value}
                    className="form-radio text-blue-600"
                    onChange={(e) => handleAnswerChange(id, e.target.value)}
                  />
                  <span>
                    {value === 1 ? 'Not at all' : value === 2 ? 'Mildly' : value === 3 ? 'Moderately' : 'Severely'}
                  </span>
                </label>
              ))}
            </div>
          </div>
        ))}

       {/* Submit Button */}
       <div className="mt-8">
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};


export default BodyImage;
