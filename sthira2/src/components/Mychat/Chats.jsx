import React from 'react';
import yog from '../Mychat/yog.jpeg'
import game from '../Mychat/game.jpeg'
import meditation from '../Mychat/meditation.jpeg'
import ReactPlayer from 'react-player';

const Chats = () => {
  return (
    <div className="p-6 pt-20">
      <div className="container mx-auto space-y-6">
        {/* Section 1 */}
        <div className="bg-backgroundColor p-4 rounded-md shadow-md">
          <h2 className="text-xl font-bold">Hi, Your Current Teen Chatbot is still on </h2>
          <p>If you want to continue this chat Kindly click on 'Continue Chat' or else click on 'Discard'</p>
          <button className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded m-6">
        <a href="/Botpage">Continue Chat</a>
      </button>

      <button className="bg-red-500 hover:bg-red-900 text-white font-bold py-2 px-4 rounded">
        <a href="">Discard</a>
      </button>
        </div>
        
        {/* Section 2 */}
        <div className="bg-backgroundColor p-4 rounded-md shadow-md">
          <h2 className="text-2xl font-bold text-lightText">Note for threapy seekers</h2>
          <p><span className='font-semibold'>Using chatbots for mental health support can be beneficial, but it's important to follow some guidelines to ensure effective and safe use: </span><hr />

- Set Realistic Expectations: Understand that chatbots are tools to support, not replace, professional mental health care. They can provide immediate assistance but are not a substitute for therapy or medical advice.  <hr />

- Regular Use: Engage with the chatbot regularly to get the most benefit. Consistency can help in tracking progress and maintaining mental health. <hr />

- Privacy and Confidentiality: Ensure the chatbot is from a reputable source that respects user privacy and data protection laws. Be aware of what data is being collected and how it is used. <hr />

- Be Honest: Provide honest and accurate information to the chatbot. This helps in getting the most relevant and personalized support. <hr />

- Follow Up with Professionals: If the chatbot suggests seeking professional help, take that advice seriously. It's important to consult with a mental health professional for a comprehensive treatment plan. <hr />

- Monitor Your Feelings: Pay attention to how you feel after using the chatbot. If you feel worse or more anxious, consider stopping use and seeking professional help. <hr />

- Use as a Supplement: Use the chatbot as a supplement to other mental health practices, such as therapy, medication, and self-care routines. <hr />

- Stay Informed: Keep yourself informed about the capabilities and limitations of the chatbot. Knowing what it can and cannot do will help you use it more effectively. <hr />

<span className='font-semibold'>By following these guidelines, patients can make the most out of chatbot technology while ensuring their mental health needs are met responsibly and safely. If you have any specific concerns or questions, feel free to ask!
</span> </p> </div>
        
        {/* Section 3 */}
        <section className="bg-backgroundColor py-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-semibold">Exercises that can be practiced for better <span className="text-backgroundColor2">Mental health</span></h2>
         
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-4 rounded-lg shadow-md text-center border-2 hover:bg-hover cursor-pointer">
            <img src={game} alt="Blog 1" className="w-full h-48 object-cover mb-4 rounded-lg"/>
            <h3 className="text-xl font-semibold text-lightText"> Mental health Quizzes  &rarr;</h3>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md text-center  border-2 hover:bg-hover cursor-pointer">
            <img src={meditation} alt="Blog 2" className="w-full h-48 object-cover mb-4 rounded-lg"/>
            <h3 className="text-xl font-semibold text-lightText"> <a href="/Videopage1">Meditation</a> &rarr;</h3>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md text-center  border-2 hover:bg-hover cursor-pointer">
            <img src={yog} alt="Blog 3" className="w-full h-48 object-cover mb-4 rounded-lg"/>
            <h3 className="text-xl font-semibold text-lightText">Yoga &rarr;</h3>
          </div>
        </div>
      </div>
    </section>
    </div>
    </div>
  );
};

export default Chats;
