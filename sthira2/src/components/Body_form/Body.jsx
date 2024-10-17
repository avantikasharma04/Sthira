import React, { useState } from 'react';
import axios from 'axios'
import { BACKEND_URL } from '../../config'

const Eatingdis = () => {
    const [answers, setAnswers] = useState({});
    
    // Handle radio button change
    const handleAnswerChange = (questionIndex, value) => {
        setAnswers({
            ...answers,
            [questionIndex]: parseInt(value, 10), // Convert string value to number
        });
    };

    // Calculate total score
    const calculateScore = () => {
        return Object.values(answers).reduce((sum, value) => sum + value, 0);
    };

    // Determine satisfaction level based on the score
    const getSatisfactionLevel = () => {
        const totalScore = calculateScore();
        if (totalScore <= 7.24) return 'Very dissatisfied';
        if (totalScore <= 14.49) return 'Dissatisfied';
        if (totalScore <= 21.74) return 'Neither satisfied nor dissatisfied';
        if (totalScore <= 28.99) return 'Satisfied';
        return 'Very satisfied';
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const score = calculateScore();
        const satisfaction = getSatisfactionLevel();
    
        const token = localStorage.getItem('token');
    
        try {
            await axios.post(`${BACKEND_URL}/api/v1/user/bodyimage`, 
                { score, satisfaction }, 
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            alert(`Your total score is ${score}. Satisfaction level: ${satisfaction}`);
        } catch (error) {
            console.error('Error submitting the form:', error);
            alert('There was an error submitting your form. Please try again.');
        }
    };
    return (
        <div className="max-w-2xl mx-auto p-4 pt-20">
            <h1 className="text-2xl font-bold mb-4">Body Image Satisfaction Questionnaire</h1>
            <p className="mb-4">
                <span className="font-bold">Instructions: </span><br /> 
                Score 5 is for Strongly agree<br /> 
                Score 4 is for Agree<br /> 
                Score 3 is for Neutral<br /> 
                Score 2 is for Disagree<br /> 
                Score 1 is for Strongly disagree<br />
                Score 0 is for Not applicable<br />
                <hr />
            </p>

            <form className="space-y-6" onSubmit={handleSubmit}>
                {questions.map((question, index) => (
                    <div key={index} className="space-y-2">
                        <label className="block text-lg font-medium">{question.text}</label>
                        <div className="flex space-x-4">
                            {options.map((option) => (
                                <label key={option} className="flex items-center space-x-2">
                                    <input
                                        type="radio"
                                        name={`question-${index}`}
                                        value={option}
                                        className="form-radio"
                                        onChange={() => handleAnswerChange(index, option)}
                                    />
                                    <span>{option}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                ))}
                <button type="submit" className="px-4 py-2 bg-backgroundColor2 hover:bg-rose-600 text-white rounded">
                    Submit
                </button>
            </form>
        </div>
    );
};

// Define the questions
const questions = [
    { text: '1. I look like I have bad health.' },
    { text: '2. I look physically unattractive.' },
    { text: '3. My image is a source of my displeasure.'},
    { text: '4. I look impure and dirty' },
    { text: '5. I look daring.' },
    { text: '6. I look full of life' },
    { text: '7. I look like something that must not be touched' },
    { text: '8. I look tender and loving.' },
    { text: '9. I look appeasing (People will be appeased when they look at me)' },
    { text: '10. I seem to not have any expression.' },
    { text: '11. I look like I have a lot to show.' },
    { text: '12. I look nervous and worried' },
    { text: '13. I look young' },
    { text: '14. I do not look sexy at all.' },
    { text: '15. I look robust and resistant.' },
    { text: '16. I look sad and depressive' },
    { text: '17. My appearance is something that people will love to look at' },
    { text: '18. I look energetic' },
];

// Define the options for the radio buttons
const options = [0, 1, 2, 3, 4, 5];

export default Eatingdis;
