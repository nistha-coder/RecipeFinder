import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const navigate = useNavigate();

  // Fetch categories from API
  useEffect(() => {
    fetch('https://opentdb.com/api_category.php')
      .then((res) => res.json())
      .then((data) => setCategories(data.trivia_categories))
      .catch((err) => console.error('Failed to fetch categories:', err));
  }, []);

  // Handle start quiz
  const handleStartQuiz = () => {
    if (!selectedCategory || !selectedType) return;
    navigate(`/quiz?category=${selectedCategory}&type=${selectedType}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center px-6 py-12 bg-gradient-to-br from-blue-50 to-white">
      <h1 className="text-4xl font-bold text-blue-700 mb-8">Choose Quiz Category</h1>

      {/* Category Dropdown */}
      <div className="w-full max-w-md mb-6">
        <label className="block text-lg font-medium text-gray-700 mb-2">Select Subject:</label>
        <select
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">-- Choose a Category --</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>

      {/* Type Dropdown */}
      <div className="w-full max-w-md mb-8">
        <label className="block text-lg font-medium text-gray-700 mb-2">Select Question Type:</label>
        <select
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          <option value="">-- Choose Type --</option>
          <option value="multiple">Multiple Choice</option>
          <option value="boolean">True / False</option>
        </select>
      </div>

      {/* Start Quiz Button */}
      <button
        className={`px-8 py-3 rounded-lg text-white font-medium transition duration-300 ${
          selectedCategory && selectedType
            ? 'bg-blue-600 hover:bg-blue-700'
            : 'bg-gray-400 cursor-not-allowed'
        }`}
        disabled={!selectedCategory || !selectedType}
        onClick={handleStartQuiz}
      >
        Start Quiz
      </button>
    </div>
  );
};

export default Categories;
