import { useRecipeStore } from './components/RecipeList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails'; 
import EditRecipeForm from './components/EditRecipeForm';
import './App.css';

function App() {
  // Access the Zustand store
  const recipes = useRecipeStore(state => state.recipes);
  const addRecipe = useRecipeStore(state => state.addRecipe);

  return (
    <Router>
      <div>
        <h1>Recipe Sharing App</h1>
        <AddRecipeForm addRecipe={addRecipe} />
        <Routes>
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/" element={<RecipeList recipes={recipes} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;