import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=YOUR_API_KEY`);
      const data = await response.json();
      setRecipe(data);
    };

    fetchRecipe();
  }, [id]);

  if (!recipe) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">{recipe.title}</h2>
      <img 
        src={recipe.image} 
        alt={recipe.title} 
        className="w-full h-64 object-cover mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">Ingredients:</h3>
      <ul className="list-disc ml-6">
        {recipe.extendedIngredients.map((ingredient, index) => (
          <li key={index}>{ingredient.original}</li>
        ))}
      </ul>
      <h3 className="text-xl font-semibold mt-4 mb-2">Instructions:</h3>
      <p>{recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetail;
