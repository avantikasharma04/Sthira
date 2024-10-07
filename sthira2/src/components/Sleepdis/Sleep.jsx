import React from 'react';

const Sleep = () => {
  return (
    <div className="max-w-2xl mx-auto p-4 pt-20">
      <h1 className="text-2xl font-bold mb-4">SLEEPING DISORDER QUESTIONNAIRE</h1>
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
  { text: '13.  After waking at night, I fear I will not be able to get back to sleep'},
  { text: '14. My night sleep is restless and disturbed' },
  { text: '15. At night, my sleep disturbs my bed partners sleep ' },
  { text: '16. My night sleep is disturbed by light' },
  { text: '17. My night sleep is disturbed by noise ' },
  { text: '18. My sleep is disturbed by severe heartburn and choking "regurgitation",(bringing up bitter stomach fluid)' },
  { text: '19. I often wake up because I am hungry'},
  { text: '20. I snore in my sleep ' },
  { text: '21. I am told I snore loudly and bother others' },
  { text: '22. I am told I stop breathing ("hold my breath") in sleep ' },
  { text: '23. I awake suddenly gasping for breath, unable to breathe ' },
  { text: '24. At night my heart pounds, beats rapidly, or beats irregularly ("palpitations") ' },
  { text: '25.  I sweat a great deal at night  ' },
  { text: '26. I walk in my sleep' },
  { text: '27. I grind my teeth while I sleep' },
  { text: '28. I wake from sleep screaming, confused, and at times violent ("night terrors")' },
  { text: '29. My sleep is disturbed because of pain in the neck, back, muscles, joints,legs or arms ' },
  { text: '30. My sleep is disturbed by chest pain (not angina) ' },
  { text: '31. My sleep is disturbed by "restless legs" (a feeling of crawling, aching, inability to keep legs still) ' },
  { text: '32. My sleep is disturbed by thoughts racing through my mind' },
  { text: '33. My sleep is disturbed by sadness or depression' },
  { text: '34. My sleep is disturbed by worrying about things' },
  { text: '35. My sleep is disturbed by muscular tension ' },
  { text: '36. My sleep is disturbed by fears that I might not be able to get back to sleep if I should wake up ' },
  { text: '37. I often have a night full of intense vivid dreams' },
  { text: '38. I have a lot of nightmares (frightening dreams)' },
  { text: '39. I feel unable to move (paralyzed) after a nap' },
  { text: '40. I have dream-like images (hallucinations) when I awaken in the morning even though I know I am not asleep' },
  { text: '41. I am sometimes very sleepy in the daytime, and this seems to go in cycles at regular intervals ' },
  { text: '42. I have slept for several days at a time, or at least I have been overwhelmingly sleepy for that long' },
  { text: '43. I have slept for several days at a time, or at least I have been overwhelmingly sleepy for that long' },
  { text: '44. I feel that my sleep is abnormal ' },
  { text: '45. I feel that I have insomnia' },
  { text: '46. As a child, I had difficulty waking up in the morning ' },
  { text: '47. As a child, I had sleepiness during the day' },
  { text: '48. I have a problem because of headaches while sleeping' },
  { text: '49. As a child, I was fatigued during the day' },
  { text: '50. As a child, I rocked myself to get to sleep ' },
  { text: '51. I used to bang my head as a child ' },
  { text: '52. I used to sleepwalk in childhood ' },
  { text: '53. As a child, I had convulsions (seizures) during sleep' },
  { text: '54. As a child, I would grind my teeth while asleep' },
  { text: '55. . Now, I am very sleepy during the day and I struggle to stay awake ' },
  { text: '56. As a child, I was fatigued during the day' },
  { text: '57. As a child, I was fatigued during the day' },
  { text: '58. As a child, I was fatigued during the day' },
  { text: '59. As a child, I was fatigued during the day' },
  { text: '60. As a child, I was fatigued during the day' },
  { text: '61. As a child, I was fatigued during the day' },
  { text: '62. As a child, I was fatigued during the day' },
  { text: '63. As a child, I was fatigued during the day' },
  { text: '64. As a child, I was fatigued during the day' },
  { text: '65. As a child, I was fatigued during the day' },
  { text: '66. As a child, I was fatigued during the day' },
  { text: '67. As a child, I was fatigued during the day' },
  { text: '68. As a child, I was fatigued during the day' },
  { text: '69. As a child, I was fatigued during the day' },
  { text: '70. As a child, I was fatigued during the day' },
  { text: '71. As a child, I was fatigued during the day' },
  { text: '72. As a child, I was fatigued during the day' },
  { text: '73. As a child, I was fatigued during the day' },
  { text: '74. As a child, I was fatigued during the day' },
  { text: '75. As a child, I was fatigued during the day' },
  { text: '76. As a child, I was fatigued during the day' },
  { text: '77. As a child, I was fatigued during the day' },
  { text: '78. As a child, I was fatigued during the day' },
  { text: '79. As a child, I was fatigued during the day' },
  { text: '80. As a child, I was fatigued during the day' },
 
];

const options = [0, 1, 2, 3, 4, 5];

export default Sleep;
