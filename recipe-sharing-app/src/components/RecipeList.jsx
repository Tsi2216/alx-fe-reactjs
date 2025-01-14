import { useEffect, useState } from 'react';
import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.filteredRecipes); // Use filtered recipes
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
  const filterRecipes = useRecipeStore(state => state.filterRecipes); // Ensure you have this action
  const searchTerm = useRecipeStore(state => state.searchTerm); // Get the current search term
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    filterRecipes(); // Call filterRecipes whenever the search term changes
  }, [searchTerm, filterRecipes]);

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
          <Link to={`/recipes/${recipe.id}`} style={{ textDecoration: 'none' }}>
            <h3 style={recipeTitleStyle}>{recipe.title}</h3>
          </Link>
          <p style={recipeDescriptionStyle}>{recipe.description}</p>
          <button onClick={() => deleteRecipe(recipe.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;