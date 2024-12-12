import React from 'react';
import TodoList from './components/TodoList'; 
import AddTodoForm from './components/AddTodoForm'; 
import { computeTotalPrice, formatCurrency, logMessage } from './utils'; // Import utility functions
import './App.css';

function App() {
  const total = computeTotalPrice(5, 10); // Example usage
  const formattedTotal = formatCurrency(total); // Format the total price

  logMessage(`Total price: ${formattedTotal}`); // Log the formatted total

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Todo List</h1>
        <p>Total Price: {formattedTotal}</p> {/* Display the total price */}
      </header>
      <AddTodoForm /> {/* Render the AddTodoForm component */}
      <TodoList /> {/* Render the TodoList component */}
    </div>
  );
}

export default App;