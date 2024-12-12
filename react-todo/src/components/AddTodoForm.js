import React, { useState } from 'react';

const AddTodoForm = ({ addTodo }) => {
    const [inputValue, setInputValue] = useState('');

    const handleAddTodoSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            addTodo(inputValue.trim()); // Call the addTodo function
            setInputValue(''); // Clear input after adding
        }
    };

    return (
        <form onSubmit={handleAddTodoSubmit}>
            <input 
                type="text" 
                value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)} 
                placeholder="Enter your todo" 
            />
            <button type="submit">Add Todo</button>
        </form>
    );
};

export default AddTodoForm;