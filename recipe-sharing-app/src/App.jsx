import { useRecipeStore } from './components/recipeStore';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails'; 
import EditRecipeForm from './components/EditRecipeForm';
import SearchBar from './components/SearchBar'; 
import FavoritesList from './components/FavoritesList'; // Import the FavoritesList component
import RecommendationsList from './components/RecommendationsList'; // Import the RecommendationsList component
import './App.css';

function App() {
  const addRecipe = useRecipeStore(state => state.addRecipe);

  return (
    <Router>
      <div>
        <h1>Recipe Sharing App</h1>
        <AddRecipeForm addRecipe={addRecipe} />
        <SearchBar /> {/* Add the SearchBar here */}
        
        {/* Integrate Favorites and Recommendations into the UI */}
        <FavoritesList /> {/* Display the user's favorite recipes */}
        <RecommendationsList /> {/* Display personalized recommendations */}
        
        <Routes>
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/edit/:id" element={<EditRecipeForm />} />
          <Route path="/" element={<RecipeList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;