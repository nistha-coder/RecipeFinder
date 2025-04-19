import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center px-6 py-16">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6 animate-slide-down">
          About Riddle me this
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed animate-fade-in-up">
          Riddle me this is your go-to destination to boost your knowledge in a fun and engaging way! Whether you're a student preparing for exams or someone who just loves trivia, we've got you covered.
        </p>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-3">✨ Key Features:</h2>
          <ul className="text-left text-gray-800 list-disc list-inside space-y-2">
            <li>🧠 Multiple categories to choose from</li>
            <li>📊 Instant feedback on quiz performance</li>
            <li>🎯 Track your progress and score</li>
            <li>🌐 Simple and responsive UI</li>
          </ul>
        </div>

        <div className="mt-10 text-gray-600 italic">
          “Knowledge is power. Information is liberating.” — Kofi Annan
        </div>
      </div>
    </div>
  );
};

export default About;
