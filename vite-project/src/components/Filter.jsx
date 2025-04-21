import React from 'react';

const Filter = ({ categories, selectedCategory, setSelectedCategory }) => {
  return (
    <div className="mb-4">
      <h2 className="text-2xl font-semibold mb-2">Filter by Category</h2>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category.idCategory}
            onClick={() => setSelectedCategory(category.strCategory)}
            className={`px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 ${selectedCategory === category.strCategory ? 'bg-blue-700' : ''}`}
          >
            {category.strCategory}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Filter;
