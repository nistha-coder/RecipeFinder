import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-white">

      {/* Welcome Heading */}
      <div className="text-center py-10">
        <h1 className="text-5xl font-bold text-gray-800 animate-slide-down">
          Welcome to Riddle me this!
        </h1>
      </div>

      {/* Image Section (fully visible image) */}
      <div className="flex justify-center mx-4 md:mx-20">
        <img
          src="https://t4.ftcdn.net/jpg/04/34/29/29/360_F_434292902_5e5dFMkx6TfjRBDoJXqRyiNShhQ07RY2.jpg"
          alt="Quiz background"
          className="w-full h-[60vh] object-contain rounded-xl shadow-lg"
        />
      </div>

      {/* Test Your Knowledge Text */}
      <div className="text-center mt-8 px-4 animate-fade-in-up">
        <p className="text-2xl font-semibold text-gray-800">
          Test your knowledge in different categories and boost your brainpower!
        </p>
      </div>

      {/* Quote Section */}
      <div className="text-center py-10 px-4 bg-gray-100 shadow-inner animate-fade-in-slow mt-6">
        <h2 className="text-2xl font-semibold text-gray-800 italic">
          “The beautiful thing about learning is that nobody can take it away from you.”
        </h2>
        <p className="mt-2 text-gray-600">— B.B. King</p>
      </div>

      {/* Start Quiz Button */}
      <div className="flex justify-center mt-8 pb-12">
        <button
          className="py-3 px-8 bg-blue-600 text-white rounded-lg text-lg shadow-lg hover:bg-blue-700 transform hover:scale-105 transition duration-300"
          onClick={() => navigate('/start-quiz')}
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default Home;
