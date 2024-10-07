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
  { text: '55. Now, I am very sleepy during the day and I struggle to stay awake ' },
  { text: '56. . In the past 6 months, I have fallen asleep accidentally in some of these situations: eating a meal, talking on the phone, talking to someone, riding in a bus or car, watching TV, at a theater, reading a book, at a lecture.' },
  { text: '57. . I got bad grades in school because I was too sleepy ' },
  { text: '58. . I now have trouble doing my job because of sleepiness or fatigue ' },
  { text: '59. . I often have to let someone else drive the car because I am too sleepy to do it' },
  { text: '60. I see vivid dream-like images (hallucinations) either just before or just after a daytime nap, yet I am sure I am awake when they happen' },
  { text: '61. I have vivid dreams during my daytime naps' },
  { text: '62. I am often unable to move (paralyzed) when I am waking up in the morning ' },
  { text: '63. Sometimes I realize I have driven my car to the wrong place, and I cannot remember how I did it ' },
  { text: '64. I find myself doing things which make no sense, such as writing nonsense instead of notes, or mixing together chocolate and gravy' },
  { text: '65. People tell me that I act strangely at times, and yet I was not aware of it when it happened ' },
  { text: '66. I get "weak knees" when I laugh' },
  { text: '67.  I get sudden muscular weakness (or even a brief period of paralysis, being unable to move) when laughing, angry, or in situations of strong emotion ' },
  { text: '68. . I am excessively sleepy during the daytime' },
  { text: '69. I have at some time had trouble with my bladder' },
  { text: '70. . I have had problems with tonsils or adenoids' },
  { text: '71.  I have high blood pressure (or once had it) ' },
  { text: '72. My tonsils and/or adenoids have been removed ' },
  { text: '73. I get pains in my abdomen (stomach) ' },
  { text: '74. I have had a head injury' },
  { text: '75. I have been knocked unconscious (knocked out)' },
  { text: '76.  I suffer from dizzy spells' },
  { text: '77. I have seizures ("fits", convulsions, epilepsy)' },
  { text: '78. I have problems with clumsiness, incoordination ' },
  { text: '79. I feel that I have a sexual problem ' },
  { text: '80. My desire or interest in sex is less than it used to be' },
  { text: '80. I have pain or discomfort during sexual intercourse' },
  { text: '81. I have pain or discomfort during sexual intercourse' },
  { text: '82. I sleep better after having sex' },
  { text: '83. I am unhappy about my social life ' },
  { text: '84.  I am unhappy about loving relationships in my life ' },
  { text: '85. I am unhappy about my sex life' },
  { text: '86.  I am dissatisfied with my job ' },
  { text: '87.  I have a problem with my sleep' },
  { text: '88. I wake up in the morning with a headache' },
  { text: '89. I have considered or attempted suicide' },
  { text: '90. I feel I am useful and needed ' },
  { text: '91. I am sleeping more than I used to' },
  { text: '92. Someone in my immediate family has trouble with insomnia (brother/sister, father/mother, son/daughter, grandparent)' },
  { text: '93. Someone in my immediate family is very sleepy during the day' },
  { text: '94. Someone in my immediate family has psychiatric or emotional illness (e.g.: depression, alcoholism) ' },
  { text: '95. Some of my other relatives have trouble with insomnia (uncles, aunts, cousins) ' },
  { text: '96. Some of my other relatives are very sleepy during the day' },
  { text: '97. Some of my other relatives have psychiatric illness' },
  { text: '98. Some family member has died suddenly in their sleep ' },
  { text: '99. Some family member has "restless legs" while sleeping (a feeling of crawling, aching, inability to keep the legs still) ' },
  { text: '100. A child in my family died from "crib death" (sudden infant death syndrome, SIDS)' },
  { text: '101. Someone in my family has been hospitalized for a psychiatric illness or "nervous breakdown". ' },
  { text: '102. People in my family seem to be worriers' },
  { text: '103. Someone in my family has diabetes ' },
  { text: '104. Someone in my family has had a stroke ("apoplexy") ' },
  { text: '105. I often use alcohol in order to get to sleep' },
  { text: '106. I use alcohol to steady my nerves' },
  { text: '107. While drinking alcohol, I have carried out actions without being aware of them, and not remembered them the next day' },
  { text: '108. I smoke tobacco within two hours of bedtime ' },
  { text: '109. I have used "street drugs" (marijuana, "uppers", "downers",narcotics, hallucinogens, cocaine) ' },
  { text: '110. I have used tobacco to help me go to sleep' },
  { text: '111. I have used marijuana to help me go to sleep' },
  { text: '112. I currently take a non-prescription drug from the pharmacy in order to help me sleep ' },
  { text: '113. I currently take a non-prescription drug to stop me being so sleepy and fatigued in the daytime ' },
  { text: '114.  I take a prescription drug which the doctor gave me mainly to help me sleep (sleeping pills, anti-depressants, tranquilizers) ' },
  { text: '115. I take a prescription drug which the doctor gave me mainly to keep me awake during the day (e.g.: ritalin) ' },
  { text: '116. I take some drugs at night for my other illnesses, not related to sleep, yet I find they help me sleep ' },
  { text: '117. I have taken drugs for my heart' },
  { text: '118. I use relaxation techniques or mental imagery (e.g.: counting sheep) to help me sleep' },
  { text: '119. I use non-drug therapies in order to get to sleep (e.g.: biofeedback, acupuncture, electrosleep)' },
  { text: '120. I exercise regularly' },
  { text: '121. I was born as part of a multiple birth (twins, or triplets, etc. Includes cases where the others died at birth or afterwards) ' },
  { text: '122. My family was emotionally close in my childhood' },
  { text: '123. I got along well with my parents while growing up ' },
  { text: '124.  I am currently unemployed ' },
  { text: '125. I am working at a job with rotating shifts' },
  { text: '126. I have had a job where I worked at unusual times' },
  { text: '127. I am presently living in a house' },
  { text: '128. I get along well with my husband / wife / friend, who is currently living with me' },
  { text: '129. Coffee, tea, or cola drinks seem to worsen my sleep' },
  { text: '130. Mental stress, worry, or anxiety worsens my sleep ' },
  { text: '131. Physical exercise helps my sleep' },
  { text: '132. A daytime nap worsens my nighttime sleep' },
  { text: '133. Mental stress, worry, or anxiety makes me feel sleepy during the day' },
  { text: '134. After a nap, I feel less sleepy in the daytime' },
  { text: '135. Hot weather makes me sleepy during the day' },
  { text: '136. When doing shift work, I am sleepy during the day' },
  { text: '137. I have a small jaw, or other abnormality of the bones in my head or neck' },
  { text: '138. I have a chronic chest disease (bronchitis, asthma, emphysema) ' },
  { text: '139. I have a problem with my nose blocking up when I am trying to sleep (allergies, infections) ' },
  { text: '140. I wake up with "attacks" which are different from those described anywhere else in this questionnaire' },
  { text: '141. My snoring or my breathing problem is much worse if I sleep on my back' },
  { text: '142. My snoring or my breathing problem is much worse if I fall asleep right after drinking alcohol ' },
  { text: '143. My snoring or my breathing problem is much worse when I have an allergy or infection in the nose, throat, or chest ' },
  

];

const options = [0, 1, 2, 3, 4, 5];

export default Sleep;
