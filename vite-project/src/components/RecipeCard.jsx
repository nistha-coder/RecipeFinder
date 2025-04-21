import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img 
        src={recipe.imageUrl} 
        alt={recipe.title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{recipe.title}</h3>
        <p className="text-sm text-gray-500">{recipe.category}</p>
        <Link 
          to={`/recipe/${recipe.id}`} 
          className="text-blue-600 hover:underline mt-2 inline-block"
        >
          View Recipe
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;
