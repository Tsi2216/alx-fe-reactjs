import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [preparation, setPreparation] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState({}); // State for validation errors

  // Validation function
  const validate = () => {
    const newErrors = {};
    if (!title) newErrors.title = 'Recipe title is required!';
    if (!ingredients) newErrors.ingredients = 'Ingredients are required!';
    if (!preparation) newErrors.preparation = 'Preparation steps are required!';
    if (!steps) newErrors.steps = 'Detailed steps are required!';

    const ingredientList = ingredients.split(',').map(item => item.trim());
    if (ingredientList.length < 2) {
      newErrors.ingredients = 'Please provide at least two ingredients.';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({}); // Reset errors

    const validationErrors = validate(); // Call the validate function
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // Set errors if any
      return; // Stop further execution if there are errors
    }

    // Here you would typically handle the form submission, e.g., send data to an API
    console.log('Recipe submitted:', { title, ingredients, preparation, steps });

    // Reset form fields
    setTitle('');
    setIngredients('');
    setPreparation('');
    setSteps('');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add New Recipe</h2>
      {errors.title && <p className="text-red-500 mb-4">{errors.title}</p>}
      <input
        type="text"
        placeholder="Recipe Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
        required
      />
      {errors.ingredients && <p className="text-red-500 mb-4">{errors.ingredients}</p>}
      <textarea
        placeholder="Ingredients (separate with commas)"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
        required
      />
      {errors.preparation && <p className="text-red-500 mb-4">{errors.preparation}</p>}
      <textarea
        placeholder="Preparation Steps"
        value={preparation}
        onChange={(e) => setPreparation(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
        required
      />
      {errors.steps && <p className="text-red-500 mb-4">{errors.steps}</p>}
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