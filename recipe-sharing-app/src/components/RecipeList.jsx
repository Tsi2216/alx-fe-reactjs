import { useEffect, useState } from 'react';
import { useRecipeStore } from '../recipeStore.js';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <p>Loading recipes...</p>;
  }

  if (recipes.length === 0) {
    return <p>No recipes available. Please add some!</p>;
  }

  const recipeListStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  };

  const recipeItemStyle = {
    backgroundColor: '#fff',
    padding: '15px',
    borderRadius: '5px',
    transition: 'transform 0.2s, box-shadow 0.2s',
    cursor: 'pointer',
  };

  const recipeTitleStyle = {
    fontSize: '1.5em',
    color: '#333',
  };

  const recipeDescriptionStyle = {
    color: '#666',
  };

  return (
    <div style={recipeListStyle}>
      {recipes.map(recipe => (
        <div style={recipeItemStyle} key={recipe.id}>
          <h3 style={recipeTitleStyle}>{recipe.title}</h3>
          <p style={recipeDescriptionStyle}>{recipe.description}</p>
          <button onClick={() => deleteRecipe(recipe.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;