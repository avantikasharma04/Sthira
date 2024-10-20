import React, { useState } from 'react';

const EatingDis = () => {
  const [answers, setAnswers] = useState({});

  const handleChange = (e, questionIndex) => {
    const { name, value } = e.target;
    setAnswers((prev) => ({ ...prev, [name]: parseInt(value) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const totalScore = Object.values(answers).reduce((acc, curr) => acc + curr, 0);
    let riskLevel;

    // Risk level determination based on score
    if (totalScore < 20) {
      riskLevel = 'Low Risk';
    } else if (totalScore >= 20 && totalScore <= 40) {
      riskLevel = 'Moderate Risk';
    } else {
      riskLevel = 'High Risk';
    }

    alert(`Total Score: ${totalScore}\nRisk Level: ${riskLevel}`);
  };

  const questions = [
    { text: '1. Have you been deliberately trying to limit the amount of food you eat to influence your shape or weight?', options: ["No", "Rarely", "Sometimes", "Often", "Very Often", "Always"] },
    { text: '2. Have you gone for long periods of time without eating anything at all to influence your shape or weight?', options: ["No", "Rarely", "Sometimes", "Often", "Very Often", "Always"] },
    { text: '3. Have you tried to avoid foods that you like in order to influence your shape or weight?', options: ["No", "Rarely", "Sometimes", "Often", "Very Often", "Always"] },
    { text: '4. Have you tried to follow definite rules regarding your eating (for example, a calorie limit) in order to influence your shape or weight?', options: ["No", "Rarely", "Sometimes", "Often", "Very Often", "Always"] },
    { text: '5. Have you wanted your stomach to be empty?', options: ["No", "Rarely", "Sometimes", "Often", "Very Often", "Always"] },
    { text: '6. Have you had a definite desire to have an empty stomach with the aim of influencing your shape or weight?', options: ["No", "Rarely", "Sometimes", "Often", "Very Often", "Always"] },
    { text: '7. Have you had a definite desire to have a flat stomach?', options: ["No", "Rarely", "Sometimes", "Often", "Very Often", "Always"] },
    { text: '8. Has thinking about food or its calorie content made it more difficult to concentrate on things you are interested in (such as a TV program, reading, or work)?', options: ["No", "Rarely", "Sometimes", "Often", "Very Often", "Always"] },
    { text: '9. Has thinking about your shape or weight made it more difficult to concentrate on things you are interested in (such as a TV program, reading, or work)?', options: ["No", "Rarely", "Sometimes", "Often", "Very Often", "Always"] },
    { text: '10. Have you had a definite fear of losing control over your eating?', options: ["No", "Rarely", "Sometimes", "Often", "Very Often", "Always"] },
    { text: '11. Have you had a definite fear that you might gain weight?"', options: ["No", "Rarely", "Sometimes", "Often", "Very Often", "Always"] },
    { text: '12. Have you felt fat?', options: ["No", "Rarely", "Sometimes", "Often", "Very Often", "Always"] },
    { text: '13. Over the past 28 days, how many times have you eaten an unusually large amount of food?', options: ["0 times", "1–5 times", "6–10 times", "11–20 times", "21–30 times", "More than 30 times"] },
    { text: '14. Over the past 28 days, how many times have you had a sense of having lost control over your eating (at the time you were eating)?', options: ["No", "Rarely", "Sometimes", "Often", "Very Often", "Always"] },
    { text: '15. "Over the past 28 days, on how many days have you eaten in secret (i.e., furtively)?', options: ["No", "Rarely", "Sometimes", "Often", "Very Often", "Always"] },
    { text: '12. Have you felt fat?', options: ["No", "Rarely", "Sometimes", "Often", "Very Often", "Always"] },
    { text: '12. Have you felt fat?', options: ["No", "Rarely", "Sometimes", "Often", "Very Often", "Always"] },
    { text: '12. Have you felt fat?', options: ["No", "Rarely", "Sometimes", "Often", "Very Often", "Always"] },
    { text: '19. Over the past 28 days, on how many days have you eaten in secret (excluding binge eating)?', options: ["0 times", "1–5 times", "6–10 times", "11–20 times", "21–30 times", "More than 30 times"] },
    { text: '12. Have you felt fat?', options: ["No", "Rarely", "Sometimes", "Often", "Very Often", "Always"] },
    { text: '21. How concerned have you been about others seeing you eat?', options: ["0 times", "1–5 times", "6–10 times", "11–20 times", "21–30 times", "More than 30 times"] },
    // Add other questions with their respective options
  ];

  return (
    <div className="max-w-2xl mx-auto p-4 pt-20">
      <h1 className="text-2xl font-bold mb-4">EATING QUESTIONNAIRE</h1>
      <form className="space-y-6" onSubmit={handleSubmit}>
        {questions.map((question, index) => (
          <div key={index} className="space-y-2">
            <label className="block text-lg font-medium">{question.text}</label>
            <div className="flex space-x-4">
              {question.options.map((option) => (
                <label key={option} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={option}
                    onChange={(e) => handleChange(e, index)}
                    className="form-radio"
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Submit</button>
      </form>
    </div>
  );
};

export default EatingDis;