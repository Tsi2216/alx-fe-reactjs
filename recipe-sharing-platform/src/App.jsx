import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router components
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import HomePage from './components/HomePage'; 
import RecipeDetail from './components/RecipeDetail'; 
import AddRecipeForm from './components/AddRecipeForm'; // Import AddRecipeForm

function App() {
  const [count, setCount] = useState(0); // State for the counter

  return (
    <Router> {/* Wrap your application in Router */}
      <div className="container mx-auto">
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
        <Routes> {/* Define your routes here */}
          <Route path="/" element={<HomePage />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route path="/add-recipe" element={<AddRecipeForm />} /> {/* New route for AddRecipeForm */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;