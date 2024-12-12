// TodoList.js
import React, { useState } from 'react';

const TodoList = () => {
    const [todos, setTodos] = useState([
        { id: 1, text: 'Learn React', completed: false },
        { id: 2, text: 'Learn Testing', completed: false },
    ]);

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <ul>
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} onDelete={() => deleteTodo(todo.id)} />
            ))}
        </ul>
    );
};

// TodoItem.js
const TodoItem = ({ todo, onDelete }) => {
    return (
        <li>
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.text}
            </span>
            <button onClick={onDelete}>Delete</button>
        </li>
    );
};

export default TodoList;