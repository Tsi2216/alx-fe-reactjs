import React from 'react';
import TodoList from './components/TodoList'; 
import { computeTotalPrice, formatCurrency, logMessage } from './utils'; 
import './App.css';

function App() {
  const pricePerItem = 5; // Example price per item
  const quantity = 10; // Example quantity
  const total = computeTotalPrice(pricePerItem, quantity); // Calculate total price
  const formattedTotal = formatCurrency(total); // Format the total price

  logMessage(`Total price: ${formattedTotal}`); // Log the formatted total

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Todo List</h1>
        <p>Total Price: {formattedTotal}</p> {/* Display the total price */}
      </header>
      <TodoList /> {/* Render the TodoList component */}
    </div>
  );
}

export default App;