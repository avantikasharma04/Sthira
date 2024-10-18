import React, { useState } from 'react';
import axios from 'axios';
import { BACKEND_URL } from '../../config'

const Hope = () => {
  const [answers, setAnswers] = useState({});
  
  // Calculate the score based on the user's answers
  const calculateScore = () => {
    let score = 0;
    questions.forEach((question, index) => {
      const answer = answers[index];
      // For items 1, 3, 5, 6, 8, 10, 13, 15, 19 (True = 0, False = 1)
      if ([0, 2, 4, 5, 7, 9, 12, 14, 18].includes(index)) {
        score += answer === 1 ? 1 : 0;
      }
      // For items 2, 4, 7, 9, 11, 12, 14, 16, 17, 18, 20 (True = 1, False = 0)
      else {
        score += answer === 0 ? 1 : 0;
      }
    });
    return score;
  };

  // Get the risk designation based on the score
  const getDesignation = () => {
    const totalScore = calculateScore();
    if (totalScore <= 3) return 'None or minimal';
    if (totalScore <= 8) return 'Mild';
    if (totalScore <= 14) return 'Moderate';
    return 'Severe';
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const score = calculateScore();
    const risk = getDesignation();

    const token = localStorage.getItem('token'); // Get the stored JWT token

    try {
      // Send the form data to the backend using Axios
      await axios.post(`${BACKEND_URL}/api/v1/user/hopelessness`, 
        { score, risk }, 
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert(`Your total score is ${score}. Hopelessness level: ${risk}`);
    } catch (error) {
      console.error('Error submitting the form:', error);
      alert('There was an error submitting your form. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center pt-20">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full">
        <h2 className="text-3xl font-bold text-center mb-8">Beck Hopelessness Scale</h2>

        <form onSubmit={handleSubmit}>
          {questions.map((question, index) => (
            <div key={index} className="mb-6">
              <p className="font-medium text-lg mb-2">{index + 1}. {question.text}</p>
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  id={`q${index}-true`}
                  name={`question-${index}`}
                  value={0}
                  className="form-radio text-blue-600 mr-2"
                  onChange={() => setAnswers({ ...answers, [index]: 0 })}
                />
                <label htmlFor={`q${index}-true`} className="text-gray-700">True</label>
              </div>
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  id={`q${index}-false`}
                  name={`question-${index}`}
                  value={1}
                  className="form-radio text-blue-600 mr-2"
                  onChange={() => setAnswers({ ...answers, [index]: 1 })}
                />
                <label htmlFor={`q${index}-false`} className="text-gray-700">False</label>
              </div>
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

// Define the questions
const questions = [
    { text: '1. I look forward to the future with hope and enthusiasm' },
    { text: '2. I might as well give up because I cannot make things better for myself' },
    { text: '3. When things are going badly, I am helped by knowing they cannot stay that way forever' },
    { text: '4. I cannot imagine what my life would be like in 10 years' },
    { text: '5. I have enough time to accomplish the things I most want to do' },
    { text: '6. In the future, I expect to succeed in what concerns me most' },
    { text: '7. My future seems dark to me' },
    { text: '8. I expect to get more good things in life than the average person' },
    { text: '9. I just do not get the breaks, and there is no reason to believe I will in the future' },
    { text: '10. My past experiences have prepared me well for the future' },
    { text: '11. All I can see ahead of me is unpleasantness rather than pleasantness' },
    { text: '12. I do not expect to get what I really want' },
    { text: '13. When I look ahead to the future, I expect I will be happier than I am now' },
    { text: '14. Things just will not work out the way I want them to' },
    { text: '15. I have great faith in the future.' },
    { text: '16. I never get what I want so it is foolish to want anything' },
    { text: '17. It is very unlikely that I will get any real satisfaction in the future' },
    { text: '18. The future seems vague and uncertain to me' },
    { text: '19. I can look forward to more good times than bad times' },
    { text: '20. There is no use in really trying to get something I want because I probably would not get it' },
];



export default Hope;
