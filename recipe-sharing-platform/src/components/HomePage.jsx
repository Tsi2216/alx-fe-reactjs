import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import recipeData from '../data.json'; // Adjust the path as necessary

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    try {
      setRecipes(recipeData);
    } catch (err) {
      setError('Failed to load recipes');
    } finally {
      setLoading(false);
    }
  }, []);

  if (loading) return <p>Loading recipes...</p>;
  if (error) return <p>{error}</p>;

  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        placeholder="Search recipes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4 p-2 border rounded"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {filteredRecipes.map(recipe => (
          <Link key={recipe.id} to={`/recipe/${recipe.id}`}> {/* Wrap the card with Link */}
            <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
              <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="font-bold text-xl">{recipe.title}</h2>
                <p className="text-gray-700">{recipe.summary}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default HomePage;