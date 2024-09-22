import React from 'react';

const Eatingdis = () => {
  return (
    <div className="max-w-2xl mx-auto p-4 pt-20">
      <h1 className="text-2xl font-bold mb-4">EATING QUESTIONNAIRE</h1>
      <p className="mb-4">
        Instructions: The following questions are concerned with the past four weeks (28 days) only. Please read each question carefully. Please answer all of the questions. Please only choose one answer for each question. Thank you.
        <hr/>Questions 13-18: Please fill in the appropriate number in the boxes on the right. Remember that
the questions only refer to the past four weeks (28 days).<hr/>
Questions 19-21: Please circle the appropriate number. Please note that for these questions the
term “binge eating” m eans eating what others would regard as an unusually large amount of food
for the circumstances, accompanied by a sense of having lost control over eating
<hr/>On how many of the past 28 days …… 
 </p>
      <form className="space-y-6">
        {questions.map((question, index) => (
          <div key={index} className="space-y-2">
            <label className="block text-lg font-medium">{question.text}</label>
            <div className="flex space-x-4">
              {options.map((option) => (
                <label key={option} className="flex items-center space-x-2">
                  <input type="radio" name={`question-${index}`} value={option} className="form-radio" />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
        <button type="submit" className="px-4 py-2 bg-backgroundColor2 hover:bg-rose-600 text-white rounded">Submit</button>
      </form>
    </div>
  );
};

const questions = [
  { text: '1. Have you been deliberately trying to limit the amount of food you eat to influence your shape or weight (whether or not you have succeeded)?' },
  { text: '2. Have you gone for long periods of time (8 waking hours or more) without eating anything at all in order to influence your shape or weight?' },
  { text: '3. Have you tried to exclude from your diet any foods that you like in order to influence your shape or weight (whether or not you have succeeded)?' },
  { text: '4. Have you tried to follow definite rules regarding your eating (for example, a calorie limit) in order to influence your shape or weight (whether or not you have succeeded)?' },
  { text: '5. Have you had a definite desire to have an empty stomach with the aim of influencing your shape or weight?' },
  { text: '6. Have you had a definite desire to have a totally flat stomach?' },
  { text: '7. Has thinking about food, eating or calories made it very difficult to concentrate on things you are interested in (for example, working, following aconversation, or reading)?' },
  { text: '8. Has thinking about shape or weight made it very difficult to concentrate on things you are interested in (for example, working, following a conversation, or reading)?' },
  { text: '9. Have you had a definite fear of losing control overeating?' },
  { text: '10. Have you had a definite fear that you might gain weight?' },
  { text: '11. Have you felt fat?' },
  { text: '12. Have you had a strong desire to lose weight?' },
  { text: '13. Over the past 28 days, how many times have you eaten what other people would regard as an unusually large amount of food (given the circumstances)?' },
  { text: '14. On how many of these times did you have a sense of having lost control over your eating (at the time that you were eating)?' },
  { text: '15. Over the past 28 days, on how many DAYS have such episodes of overeating occurred (i.e. you have eaten an unusually large amount of food and have had a sense of loss of control at the time)?' },
  { text: '16. Over the past 28 days, how many times have you made yourself sick (vomit) as a means of controlling your shape or weight?' },
  { text: '17. Over the past 28 days, how many times have you taken laxatives as a means of controlling your shape or weight?' },
  { text: '18. Over the past 28 days,how many times have you exercised in a "driven" or "compulsive" way as a means of controlling your weight ,shape or amount of fat or to burn off calories?' },
  { text: '19. Over the past 28 days, on how many days have you eaten in secret (ie, furtively)?......Do not count episodes of binge eating' },
  { text: '20. On what proportion of the times that you have eaten have you felt guilty (felt that you’ve done times times half times half time wrong) because of its effect on your shape or weight?...Do not count episodes of binge eating' },
  { text: '21. Over the past 28 days, how concerned have you been about other people seeing you eat?......Do not count episodes of binge eating' },
  { text: '22. Has your weight influenced how you think about (judge) yourself as a person?' },
  { text: '23. Has your shape influenced how you think about (judge) yourself as a person?' },
  { text: '24. How much would it have upset you if you had been asked to weigh yourself once a week (no more, or less, often) for the next four weeks?' },
  { text: '25. How dissatisfied have you been with your weight?' },
  { text: '26. How dissatisfied have you been with your shape? ' },
  { text: '27. How uncomfortable have you felt seeing your body (for example, seeing your shape in the mirror, in a shop window reflection, while undressing or taking a bath or shower)?' },
  { text: '28. How uncomfortable have you felt about others seeing your shape or figure (for example, in communal changing rooms, when swimming, or wearing tight clothes)?' },
 ];

const options = [0, 1, 2, 3, 4, 5, 6];

export default Eatingdis;
