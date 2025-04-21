import React, { useState, useEffect } from 'react';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
        const data = await response.json();
        setCategories(data.categories || []);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Recipe Categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {categories.map((category) => (
          <div key={category.idCategory} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img
              src={category.strCategoryThumb}
              alt={category.strCategory}
              className="w-full h-32 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold">{category.strCategory}</h3>
              <p className="text-sm text-gray-600 line-clamp-3">{category.strCategoryDescription}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
