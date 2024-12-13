import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [preparation, setPreparation] = useState('');
  const [steps, setSteps] = useState(''); // New state for steps
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(''); // Reset error message

    // Basic validation
    if (!title || !ingredients || !preparation || !steps) {
      setError('All fields are required!');
      return;
    }

    const ingredientList = ingredients.split(',').map(item => item.trim());
    if (ingredientList.length < 2) {
      setError('Please provide at least two ingredients.');
      return;
    }

    // Here you would typically handle the form submission, e.g., send data to an API
    console.log('Recipe submitted:', { title, ingredients: ingredientList, preparation, steps });

    // Reset form fields
    setTitle('');
    setIngredients('');
    setPreparation('');
    setSteps(''); // Reset steps field
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add New Recipe</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <input
        type="text"
        placeholder="Recipe Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
        required
      />
      <textarea
        placeholder="Ingredients (separate with commas)"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
        required
      />
      <textarea
        placeholder="Preparation Steps"
        value={preparation}
        onChange={(e) => setPreparation(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
        required
      />
      <textarea
        placeholder="Steps (detailed instructions)"
        value={steps}
        onChange={(e) => setSteps(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
        required
      />
      <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Add Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;