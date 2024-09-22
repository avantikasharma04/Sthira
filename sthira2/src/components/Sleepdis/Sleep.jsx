import React from 'react';

const Sleep = () => {
  return (
    <div className="max-w-2xl mx-auto p-4 pt-20">
      <h1 className="text-2xl font-bold mb-4">EATING QUESTIONNAIRE</h1>
      <p className="mb-4 ">
     ******************* Key for answers ************************** <br /> <hr />
 1 - NEVER (strongly disagree) <br />
 2 - RARELY (disagree)       <br />
 3 - SOMETIMES (not sure)     <br />
 4 - USUALLY (agree) <br />
 5 - ALWAYS (agree strongly)           
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
  { text: '1. I get too little sleep at night' },
  { text: '2. I often have a poor night at sleep' },
  { text: '3. I have trouble getting to sleep at night' },
  { text: '4. I wake up often during the night ' },
  { text: '5. My bedtime varies a lot ' },
  { text: '6. At bedtime, thoughts race through my mind' },
  { text: '7. At bedtime, I feel sad and depressed ' },
  { text: '8. At bedtime, I worry about things' },
  { text: '9. At bedtime, I feel muscular tension' },
  { text: '10. At bedtime, I am afraid of not being able to go to sleep ' },
  { text: '11. When falling asleep, I feel paralyzed (unable to move) ' },
  { text: '12. When falling asleep, I have "restless legs" (a feeling of crawling, aching, or inability to keep legs still) ' },
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

const options = [0, 1, 2, 3, 4, 5];

export default Sleep;
