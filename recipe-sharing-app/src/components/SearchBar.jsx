import React, { useState } from 'react';
import { useRecipeStore } from './recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setSearchTerm(value);
  };

  const clearSearch = () => {
    setInputValue('');
    setSearchTerm('');
  };

  return (
    <div style={{ margin: '20px 0' }}>
      <input
        type="text"
        placeholder="Search recipes..."
        value={inputValue}
        onChange={handleChange}
        style={{ padding: '10px', width: '300px' }}
        aria-label="Search recipes"
      />
      <button onClick={clearSearch} style={{ marginLeft: '10px' }}>
        Clear
      </button>
      {filteredRecipes.length > 0 ? (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {filteredRecipes.map(recipe => (
            <li key={recipe.id} style={{ padding: '5px 0' }}>
              {recipe.title}
            </li>
          ))}
        </ul>
      ) : (
        inputValue && <p>No recipes found.</p>
      )}
    </div>
  );
};

export default SearchBar;