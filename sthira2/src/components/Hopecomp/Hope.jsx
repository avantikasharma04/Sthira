import React from 'react';

const Hope = () => {
    return (
        <div className="max-w-2xl mx-auto p-4 pt-20">
            <h1 className="text-2xl font-bold mb-4">Body Image Satisfaction Questionnarie</h1>
            <p className="mb-4">
                <span className='font-bold'>Instructions: </span><br /> Score 0 is for Strongly True
                <br /> Score 1 is for False
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
    { text: '1.I look forward to the future with hope and enthusiasm`' },
    { text: '2.I might as well give up because I cannot make things better for myselp' },
    { text: '3. When things are going badly, I am helped by knowing they cannot stay that way forever'},
    { text: '4. I cannot imagine what my life would be like in 10 years'},
    { text: '5. I have enough time to accomplish the things I most want to do' },
    { text: '6. In the future, I expect to succeed in what concerns me mosL' },
    { text: '7. My future seems dark to me' },
    { text: '8. I expect to get more good things in life than the average person' },
    { text: '9. I just donot get the breaks, and there is no reason to believe I will in the future' },
    { text: '10. My past experiences have prepared me well for the future' },
    { text: '11. All I can see ahead of me is unpleasantness rather than pleasantness' },
    { text: '12. I donot expect to get what t really want' },
    { text: '13. When I look ahead to the future, I expect I will be happier than I am now' },
    { text: '14. Things just would not work out the way I want them to' },
    { text: '15. I have great faith in the future.' },
    { text: '16. I never get what I want so it is foolish to want anything' },
    { text: '17. It is very unlikely that I will get any real satisfaction in the future' },
    { text: '18. The future seems vague and uncertain to me' },
    { text: '19. I can look forward to more good times than bad time' },
    { text: '20. I feel There is no use in really trying to get something I want because I probably would not get it' },
];

const options = [0,1];

export default Hope;
