import React from 'react';

const Eatingdis = () => {
    return (
        <div className="max-w-2xl mx-auto p-4 pt-20">
            <h1 className="text-2xl font-bold mb-4">Body Image Satisfaction Questionnarie</h1>
            <p className="mb-4">
                <span className='font-bold'>Instructions: </span><br /> Score 5 is for Strongly agree
                <br /> Score 4 is for Agree
                <br /> Score 3 is for Neutral
                <br /> Score 2 is for Disagree
                <br /> Score 1 is for Strongly disagree
                <hr />
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
    { text: '1. I look like I have bad health.' },
    { text: '2. I look physically unattractive.' },
    { text: '3. My image is a source of my displeasure.'},
    { text: '4. I look impure and dirty'},
    { text: '5. I look daring.' },
    { text: '6. I look full of life' },
    { text: '7. I look like something that must not betouched' },
    { text: '8. I look tender and loving.' },
    { text: '9. I look appeasing (People will beappeased when they look at me)' },
    { text: '10. I seem to not have any expression.' },
    { text: '11. I look like I have a lot to show.' },
    { text: '12. I look nervous and worried' },
    { text: '13. I look young' },
    { text: '14. I do not look sexy at all.' },
    { text: '15. I look robust and resistant.' },
    { text: '16. I look sad and depressive' },
    { text: '17. My appearance is something that people will love to look at' },
    { text: '18. I look energetic' },,
];

const options = [0, 1, 2, 3, 4, 5];

export default Eatingdis;
