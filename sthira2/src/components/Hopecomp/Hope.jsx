import React, { useState } from 'react';

const Hope = () => {
    const [answers, setAnswers] = useState({});

    // Handle radio button change
    const handleAnswerChange = (questionIndex, value) => {
        setAnswers({
            ...answers,
            [questionIndex]: parseInt(value, 10),
        });
    };

    // Scoring logic based on provided criteria
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

    // Interpretation of the score
    const getDesignation = () => {
        const totalScore = calculateScore();
        if (totalScore <= 3) return 'None or minimal';
        if (totalScore <= 8) return 'Mild';
        if (totalScore <= 14) return 'Moderate*';
        return 'Severe**';
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const totalScore = calculateScore();
        const designation = getDesignation();
        alert(`Your total score is ${totalScore}. Hopelessness level: ${designation}`);
    };

    return (
        <div className="max-w-2xl mx-auto p-4 pt-20">
            <h1 className="text-2xl font-bold mb-4">Beck Hopelessness Scale</h1>
            <p className="mb-4">
                <span className="font-bold">Instructions: </span><br />
                Score 0 is for Strongly True <br />
                Score 1 is for False <br />
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
                                    <span>{option === 0 ? 'True' : 'False'}</span>
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

// Define the options for the radio buttons (True or False, with corresponding 0 or 1 score)
const options = [0, 1];

export default Hope;
