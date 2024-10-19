import React from 'react';

const MentalHealthGames = () => {
  const games = [
    {
      title: "SuperBetter",
      description: "A game designed to build resilience and improve mental health through challenges and quests.",
      link: "https://www.superbetter.com/"
    },
    {
      title: "MindLight",
      description: "A game that uses neurofeedback to help children manage anxiety and stress.",
      link: "https://www.mindlightgame.com/"
    },
    {
      title: "SPARX",
      description: "An interactive game designed to help teenagers with depression through cognitive behavioral therapy techniques.",
      link: "https://www.sparx.org.nz/"
    }
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen pt-20">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">Mental Health Games</h1>
        <div className="space-y-6">
          {games.map((game, index) => (
            <div key={index} className="bg-white p-4 rounded-md shadow-md">
              <h2 className="text-xl font-bold mb-2">{game.title}</h2>
              <p className="text-gray-700 mb-2">{game.description}</p>
              <a href={game.link} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Learn More</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MentalHealthGames;
