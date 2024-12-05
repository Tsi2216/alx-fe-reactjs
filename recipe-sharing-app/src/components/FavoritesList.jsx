import React, { useMemo } from 'react';
import { useRecipeStore } from './recipeStore';

const FavoritesList = () => {
  const favoritesIds = useRecipeStore(state => state.favorites);
  const recipes = useRecipeStore(state => state.recipes);

  const favorites = useMemo(() => {
    return favoritesIds.map(id => recipes.find(recipe => recipe.id === id)).filter(Boolean);
  }, [favoritesIds, recipes]);

  return (
    <div style={favoritesListStyle}>
      <h2 style={headerStyle}>Favorite Recipes</h2>
      {favorites.length === 0 ? (
        <p style={noFavoritesStyle}>No favorites found. Please add some recipes to your favorites list.</p>
      ) : (
        favorites.map(recipe => (
          <div key={recipe.id} style={recipeItemStyle}>
            <h3 style={recipeTitleStyle}>{recipe.title}</h3>
            <p style={recipeDescriptionStyle}>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

// Inline styles
const favoritesListStyle = {
  padding: '20px',
  backgroundColor: '#4CAF50', // Green background for visibility
  borderRadius: '8px',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
};

const headerStyle = {
  color: '#FFFFFF', // White color for the header
  fontWeight: 'bold', // Make the header bold
};

const noFavoritesStyle = {
  color: '#FFEB3B', // Bright yellow for the no favorites message
  fontWeight: 'bold', // Make the text bold
};

const recipeItemStyle = {
  backgroundColor: '#FFFFFF', // White background for recipe items
  padding: '15px',
  borderRadius: '5px',
  marginBottom: '10px',
  transition: 'transform 0.2s, box-shadow 0.2s',
};

const recipeTitleStyle = {
  fontSize: '1.5em',
  color: '#FF5733', // Bold color for the title
  fontWeight: 'bold', // Make the title bold
};

const recipeDescriptionStyle = {
  color: '#555', // Dark gray for the description
};

export default FavoritesList;