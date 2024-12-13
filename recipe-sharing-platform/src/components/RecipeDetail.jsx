import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import recipeData from '../data.json'; // Adjust the path as necessary

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = recipeData.find(r => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-4 shadow-lg"> {/* Added shadow-lg to the container */}
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover rounded-lg mb-4 shadow-md" /> {/* Added shadow-md to the image */}
      <h2 className="text-2xl font-semibold mt-4">Ingredients</h2>
      <ul className="list-disc pl-5">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index} className="text-gray-700">{ingredient}</li>
        ))}
      </ul>
      <h2 className="text-2xl font-semibold mt-4">Instructions</h2>
      <p className="text-gray-700">{recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetail; 