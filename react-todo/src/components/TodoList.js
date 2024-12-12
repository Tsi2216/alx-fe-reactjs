import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    const [filter, setFilter] = useState('all');
    const [editTodoId, setEditTodoId] = useState(null);
    const [editText, setEditText] = useState('');

    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem('todos'));
        if (savedTodos) {
            setTodos(savedTodos);
        } else {
            const initialTodos = [
                { id: 1, text: 'Learn React', completed: false },
                { id: 2, text: 'Learn Testing', completed: false },
            ];
            setTodos(initialTodos);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = () => {
        if (newTodo.trim() === '') return;
        const todo = {
            id: Date.now(),
            text: newTodo,
            completed: false,
        };
        setTodos([...todos, todo]);
        setNewTodo('');
    };

    const toggleTodo = (id) => {
        setTodos(todos.map(todo => 
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const startEdit = (todo) => {
        setEditTodoId(todo.id);
        setEditText(todo.text);
    };

    const saveEdit = (id) => {
        setTodos(todos.map(todo => 
            todo.id === id ? { ...todo, text: editText } : todo
        ));
        setEditTodoId(null);
        setEditText('');
    };

    const filteredTodos = todos.filter(todo => {
        if (filter === 'completed') return todo.completed;
        if (filter === 'active') return !todo.completed;
        return true; // all
    });

    return (
        <div>
            <input
                type="text"
                placeholder="Add a new todo"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
            />
            <button onClick={addTodo}>Add</button>
            <div>
                <button onClick={() => setFilter('all')}>All</button>
                <button onClick={() => setFilter('active')}>Active</button>
                <button onClick={() => setFilter('completed')}>Completed</button>
            </div>
            <ul>
                {filteredTodos.map(todo => (
                    <TodoItem 
                        key={todo.id} 
                        todo={todo} 
                        onToggle={() => toggleTodo(todo.id)} 
                        onDelete={() => deleteTodo(todo.id)} 
                        onEdit={startEdit} 
                        editTodoId={editTodoId}
                        editText={editText}
                        setEditText={setEditText}
                        saveEdit={saveEdit}
                    />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;