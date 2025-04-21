import React, { useState, useEffect } from 'react';
import RecipeCard from '../components/RecipeCard';
import Filter from '../components/Filter';
import QuoteBanner from '../components/QuoteBanner';

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
        const data = await response.json();
        setCategories(data.categories || []);
      } catch (error) {
        console.error('Failed to fetch categories:', error);
      }
    };

    fetchCategories();
  }, []);

  // Fetch recipes (either default or based on selected category)
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        let url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=chicken'; // Default

        if (selectedCategory) {
          url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`;
        }

        const response = await fetch(url);
        const data = await response.json();
        setRecipes(data.meals || []);
      } catch (error) {
        console.error('Failed to fetch recipes:', error);
      }
    };

    fetchRecipes();
  }, [selectedCategory]);

  return (
    <div>
      <QuoteBanner />
      <div className="container mx-auto px-4 py-6">
        <Filter
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {recipes.length > 0 ? (
            recipes.map((recipe) => (
              <RecipeCard key={recipe.idMeal} recipe={recipe} />
            ))
          ) : (
            <p className="text-center text-gray-600 col-span-full">No recipes found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
