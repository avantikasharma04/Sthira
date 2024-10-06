import React, { useState } from "react";

const Mood = () => {
  const [selectedMood, setSelectedMood] = useState("neutral");

  const moods = [
    { label: "Sad", emoji: "😔", color: "text-red-500" },
    { label: "Neutral", emoji: "😐", color: "text-yellow-500" },
    { label: "Happy", emoji: "😊", color: "text-green-500" },
  ];

  const handleMoodClick = (mood) => {
    setSelectedMood(mood);
  };

  return (
    <div>
    <div className="min-h-screen mx-auto bg-backgroundColor2 rounded-xl shadow-md space-y-4">
      <h2 className="text-center text-2xl font-bold mb-4">How do you feel?</h2>
      <div className="flex justify-around">
        {moods.map((mood) => (
          <button
            key={mood.label}
            onClick={() => handleMoodClick(mood.label)}
            className={`flex flex-col items-center focus:outline-none ${selectedMood === mood.label ? "bg-gray-100" : ""}`}
          >
            <span className={`text-5xl ${mood.color}`}>{mood.emoji}</span>
            <span className="mt-2">{mood.label}</span>
          </button>
        ))}
      </div>
      <div className="text-center mt-4">
        <p className="text-lg">
          You are feeling: <strong>{selectedMood}</strong>
        </p>
      </div>
    

{/*<h2 className="text-center text-2xl font-bold">Rate Your Sleep Quality</h2>
<div className="text-center text-xl font-semibold text-gray-600">
  {sliderValue}/10
</div>
<input
  type="range"
  min="1"
  max="10"
  value={sliderValue}
  onChange={handleSliderChange}
  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
/>
<div className="flex justify-between text-sm text-gray-500">
  <span>Worst</span>
  <span>Best</span>
</div>*/}
</div>
</div>
  );
};

export default Mood;
