import React, { useState } from 'react';
import axios from 'axios';
import { BACKEND_URL } from '../../config';

const Alcohol = () => {
  // State to store the answers
  const [answers, setAnswers] = useState({});

  // List of AUDIT questions and options
  const questions = [
    {
      id: 1,
    question: "How often do you have a drink containing alcohol?",
    options: [
      "Never",
      "Monthly or less",
      "2-4 times a month",
      "2-3 times a week",
      "4 or more times a week",
    ],
  },
  {
    id: 2,
    question: "How many drinks containing alcohol do you have on a typical day when you are drinking?",
    options: [
      "1 or 2",
      "3 or 4",
      "5 or 6",
      "7 to 9",
      "10 or more",
    ],
  },
  {
    id: 3,
    question: "How often do you have six or more drinks on one occasion?",
    options: [
      "Never",
      "Less than monthly",
      "Monthly",
      "Weekly",
      "Daily or almost daily",
    ],
  },
  {
    id: 4,
    question: "How often during the last year have you found that you were not able to stop drinking once you had started?",
    options: [
      "Never",
      "Less than monthly",
      "Monthly",
      "Weekly",
      "Daily or almost daily",
    ],
  },
  {
    id: 5,
    question: "How often during the last year have you failed to do what was normally expected from you because of drinking?",
    options: [
      "Never",
      "Less than monthly",
      "Monthly",
      "Weekly",
      "Daily or almost daily",
    ],
  },
  {
    id: 6,
    question: "How often during the last year have you needed a first drink in the morning to get yourself going after a heavy drinking session?",
    options: [
      "Never",
      "Less than monthly",
      "Monthly",
      "Weekly",
      "Daily or almost daily",
    ],
  },
  {
    id: 7,
    question: "How often during the last year have you had a feeling of guilt or remorse after drinking?",
    options: [
      "Never",
      "Less than monthly",
      "Monthly",
      "Weekly",
      "Daily or almost daily",
    ],
  },
  {
    id: 8,
    question: "How often during the last year have you been unable to remember what happened the night before because you had been drinking?",
    options: [
      "Never",
      "Less than monthly",
      "Monthly",
      "Weekly",
      "Daily or almost daily",
    ],
  },
  {
    id: 9,
    question: "Have you or someone else been injured as a result of your drinking?",
    options: [
      "No",
      "Yes, but not in the last year",
      "Yes, during the last year",
    ],
  },
  {
    id: 10,
    question: "Has a relative, friend, doctor, or other health worker been concerned about your drinking or suggested you cut down?",
    options: [
      "No",
      "Yes, but not in the last year",
      "Yes, during the last year",
    ],
  },
];


  // Handle radio button change
  const handleAnswerChange = (questionId, value) => {
    setAnswers({
      ...answers,
      [questionId]: parseInt(value, 10),
    });
  };

  // Calculate the total score
  const calculateScore = () => {
    return Object.values(answers).reduce((sum, value) => sum + value, 0);
  };

  // Determine the alcohol risk level based on the score
  const getRiskLevel = () => {
    const score = calculateScore();
    if (score <= 7) return 'Low risk';
    if (score <= 15) return 'Medium risk';
    if (score <= 19) return 'High risk';
    return 'Alcohol dependence likely';
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const score = calculateScore();
    const risk = getRiskLevel();

    const token = localStorage.getItem('token');

    try {
      await axios.post(`${BACKEND_URL}/api/v1/user/audit`, 
        { score, risk }, 
        {
          headers: {
            Authorization: `Bearer ${token}`,
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
    <div className="min-h-screen bg-gray-100 flex items-center justify-center pt-20">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full">
        <h2 className="text-3xl font-bold text-center mb-8">Alcohol Use Disorders Identification Test (AUDIT)</h2>

        <form onSubmit={handleSubmit}>
          {questions.map((q) => (
            <div key={q.id} className="mb-6">
              <p className="font-medium text-lg mb-2">{q.id}. {q.question}</p>
              {q.options.map((option, index) => (
                <div key={index} className="flex items-center mb-2">
                  <input
                    type="radio"
                    id={`q${q.id}-opt${index}`}
                    name={`q${q.id}`}
                    value={index}
                    className="form-radio text-blue-600 mr-2"
                    onChange={() => handleAnswerChange(q.id, index)}
                  />
                  <label htmlFor={`q${q.id}-opt${index}`} className="text-gray-700">
                    {index + 1}. {option}
                  </label>
                </div>
              ))}
            </div>
          ))}

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-500 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Alcohol;