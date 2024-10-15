import React, { useState } from 'react';
import axios from 'axios'
import { BACKEND_URL } from '../../config'

const Dep = () => {
  // State to store the answers
  const [answers, setAnswers] = useState({});

  // List of questions and options
  const questions = [
    {
      id: 1,
      options: [
        "I do not feel sad.",
        "I feel sad",
        "I am sad all the time and I can't snap out of it",
        "I am so sad and unhappy that I can't stand it",
      ],
    },
    {
      id: 2,
      options: [
        "I am not particularly discouraged about the future.",
        "I feel discouraged about the future",
        "I feel I have nothing to look forward to",
        "I feel the future is hopeless and that things cannot improve",
      ],
    },
    {
      id: 3,
      options: [
        "I do not feel like a failure.",
        "I feel I have failed more than the average person",
        "As I look back on my life, all I can see is a lot of failures",
        "I feel I am a complete failure as a person",
      ],
    },
    {
      id: 4,
      options: [
        "I get as much satisfaction out of things as I used to.",
        "I don't enjoy things the way I used to",
        "I don't get real satisfaction out of anything anymore",
        "I am dissatisfied or bored with everything",
      ],
    },
    {
      id: 5,
      options: [
        "I don't feel particularly guilty.",
        "I feel guilty a good part of the time",
        "I feel quite guilty most of the time",
        "I feel guilty all of the time",
      ],
    },
    {
      id: 6,
      options: [
        "I do not feel I am being punished.",
        "I feel I may be punished.",
        "I expect to be punished.",
        "I feel I am being punished.",
      ],
    },
    {
      id: 7,
      options: [
        "I do not feel disappointed in myself.",
        "I am disappointed in myself.",
        "I am disgusted with myself.",
        "I hate myself.",
      ],
    },
    {
      id: 8,
      options: [
        "I don't feel I am any worse than anybody else.",
        "I am critical of myself for my weaknesses or mistakes.",
        "I blame myself all the time for my faults.",
        "I blame myself for everything bad that happens.",
      ],
    },
    {
      id: 9,
      options: [
        "I don't have any thoughts of killing myself.",
        "I have thoughts of killing myself, but I would not carry them out.",
        "I would like to kill myself.",
        "I would kill myself if I had the chance.",
      ],
    },
    {
      id: 10,
      options: [
        "I don't cry any more than usual.",
        "I cry more now than I used to.",
        "I cry all the time now.",
        "I used to be able to cry, but now I can't cry even though I want to.",
      ],
    },
    {
      id: 11,
      options: [
        "I am no more irritated by things than I ever was.",
        "I am slightly more irritated now than usual.",
        "I am quite annoyed or irritated a good deal of the time.",
        "I feel irritated all the time.",
      ],
    },
    {
      id: 12,
      options: [
        "I have not lost interest in other people.",
        "I am less interested in other people than I used to be.",
        "I have lost most of my interest in other people.",
        "I have lost all of my interest in other people.",
      ],
    },
    {
      id: 13,
      options: [
        "I make decisions about as well as I ever could.",
        "I put off making decisions more than I used to.",
        "I have greater difficulty in making decisions more than I used to.",
        "I can't make decisions at all anymore.",
      ],
    },
    {
      id: 14,
      options: [
        "I don't feel that I look any worse than I used to.",
        "I am worried that I am looking old or unattractive.",
        "I feel there are permanent changes in my appearance that make me look unattractive.",
        "I believe that I look ugly.",
      ],
    },
    {
      id: 15,
      options: [
        "I can work about as well as before.",
        "It takes an extra effort to get started at doing something.",
        "I have to push myself very hard to do anything.",
        "I can't do any work at all.",
      ],
    },
    {
      id: 16,
      options: [
        "I can sleep as well as usual.",
        "I don't sleep as well as I used to.",
        "I wake up 1 - 2 hours earlier than usual and find it hard to get back to sleep.",
        "I wake up several hours earlier than I used to and cannot get back to sleep.",
      ],
    },
    {
      id: 17,
      options: [
        "I don't get more tired than usual.",
        "I get tired more easily than I used to.",
        "I get tired from doing almost anything.",
        "I am too tired to do anything.",
      ],
    },
    {
      id: 18,
      options: [
        "My appetite is no worse than usual.",
        "My appetite is not as good as it used to be.",
        "My appetite is much worse now.",
        "I have no appetite at all anymore.",
      ],
    },
    {
      id: 19,
      options: [
        "I haven't lost much weight, if any, lately.",
        "I have lost more than five pounds.",
        "I have lost more than ten pounds.",
        "I have lost more than fifteen pounds.",
      ],
    },
    {
      id: 20,
      options: [
        "I am no more worried about my health than usual.",
        "I am worried about physical problems like aches, pains, upset stomach, or constipation.",
        "I am very worried about physical problems and it's hard to think of much else.",
        "I am so worried about my physical problems that I cannot think of anything else.",
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
    const totalScore = Object.values(answers).reduce((sum, value) => sum + value, 0);
    return totalScore;
  };

  // Determine the depression level based on the score
  const getDepressionLevel = () => {
    const score = calculateScore();
    if (score <= 10) return 'These ups and downs are considered normal';
    if (score <= 16) return 'Mild mood disturbance';
    if (score <= 20) return 'Borderline clinical depression';
    if (score <= 30) return 'Moderate depression';
    if (score <= 40) return 'Severe depression';
    return 'Extreme depression';
  };

 // Handle form submission
const handleSubmit = async (e) => {
  e.preventDefault();
  const score = calculateScore();
  const risk = getDepressionLevel();

  const token = localStorage.getItem('token');

  try {
      await axios.post(`${BACKEND_URL}/api/v1/user/depression`, 
          { score, risk }, 
          {
              headers: {
                  Authorization: `Bearer ${token}`,
              },
          }
      );
      alert(`Your total score is ${score}. Level of Depression: ${risk}`);
  } catch (error) {
      console.error('Error submitting the form:', error);
      alert('There was an error submitting your form. Please try again.');
  }
};


  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center pt-20">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full">
        <h2 className="text-3xl font-bold text-center mb-8">Beck's Depression Inventory</h2>

        <form onSubmit={handleSubmit}>
          {questions.map((q) => (
            <div key={q.id} className="mb-6">
              <p className="font-medium text-lg mb-2">{q.id}. {q.options[0]}</p>
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

export default Dep;