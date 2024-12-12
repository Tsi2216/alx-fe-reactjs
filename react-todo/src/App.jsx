import React from 'react';
import TodoList from './components/TodoList'; 
import AddTodoForm from './components/AddTodoForm'; 
import { someFunction } from './__tests__/TodoList.test.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Todo List</h1>
      </header>
      <AddTodoForm /> {/* Render the AddTodoForm component */}
      <TodoList /> {/* Render the TodoList component */}
    </div>
  );
}

export default App;