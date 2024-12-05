import { useEffect } from 'react';
import { useRecipeStore } from './recipeStore';

const RecommendationsList = () => {
  // Get the recommendations from the store
  const recommendations = useRecipeStore(state => state.recommendations);
  const generateRecommendations = useRecipeStore(state => state.generateRecommendations);
  const favorites = useRecipeStore(state => state.favorites);

  // Generate recommendations whenever favorites change
  useEffect(() => {
    if (favorites.length > 0) {
      generateRecommendations();
    }
  }, [favorites, generateRecommendations]);

  return (
    <div style={recommendationsListStyle}>
      <h2 style={headerStyle}>Recommended Recipes</h2>
      {recommendations.length === 0 ? (
        <p style={noRecommendationsStyle}>No recommendations available. Add some favorites to see recommendations!</p>
      ) : (
        recommendations.map(recipe => (
          <div key={recipe.id} style={recipeItemStyle}>
            <h3 style={recipeTitleStyle}>{recipe.title}</h3>
            <p style={recipeDescriptionStyle}>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

// Styles for the component
const recommendationsListStyle = {
  padding: '20px',
  backgroundColor: '#4CAF50', // Bright green background for visibility
  borderRadius: '8px',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
};

const headerStyle = {
  color: '#FFFFFF', // White color for the header
  fontWeight: 'bold', // Make the header bold
};

const noRecommendationsStyle = {
  color: '#FFEB3B', // Bright yellow for the no recommendations message
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
  color: '#FF5733', // Bold orange color for the title
  fontWeight: 'bold', // Make the title bold
};

const recipeDescriptionStyle = {
  color: '#555', // Dark gray for the description
};

export default RecommendationsList;