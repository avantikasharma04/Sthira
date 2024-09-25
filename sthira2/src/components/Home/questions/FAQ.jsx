import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqs = [
    {
      question: "Who are the therapists?",
      answer: "BetterHelp has a network of licensed, accredited, and experienced therapists who are qualified to help you with various mental health issues."
    },
    {
      question: "How can Chatbot help me feel better?",
      answer: "You will be matched with a therapist based on your needs and preferences, and you can change therapists if the match is not ideal."
    },
    {
      question: "Is Sthira right for me?",
      answer: "BetterHelp is designed for people who want accessible, affordable therapy in a convenient online format. It may not be suitable for severe mental health issues."
    },
    {
      question: "What is the average cost of services offered by Sthira?",
      answer: "The cost of BetterHelp ranges from $60 to $90 per week, depending on your plan and location. It is billed every four weeks."
    },
    {
      question: "Is Subscription to Sthira's Chatbot and Emergency services useful?",
      answer: "After signing up, you'll typically be matched with a therapist within 24 to 48 hours."
    },
    {
      question: "What are the features of emergency button in sthira?",
      answer: "You can communicate with your therapist via messaging, live chat, phone calls, or video sessions based on your preferences."
    },
    {
      question: "Can Sthira substitute for traditional face-to-face therapy?",
      answer: "While BetterHelp offers many benefits, it is not a complete substitute for face-to-face therapy, especially for individuals with serious or complex mental health needs."
    }
  ];

  return (
    <div className="bg-backgroundColor2 min-h-screen p-6 flex flex-col justify-center items-center">
      <h1 className="text-5xl  text-center mb-8 text-white">
        Frequently asked questions
      </h1>
      
      <div className="w-full max-w-2xl space-y-4 text-white">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b">
            <button
              className="w-full text-left flex justify-between items-center py-4 text-lg font-medium focus:outline-none"
              onClick={() => toggleAccordion(index)}
            >
              {faq.question}
              <span>{activeIndex === index ? '-' : '+'}</span>
            </button>
            {activeIndex === index && (
              <div className="py-2 text-white">
               
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
