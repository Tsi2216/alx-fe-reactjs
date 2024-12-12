import React, { useState } from 'react';

const TodoItem = ({ todo, onToggle, onDelete, onUpdate }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.text);

    const handleUpdate = () => {
        onUpdate(todo.id, editText);
        setIsEditing(false);
    };

    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete this todo?')) {
            onDelete();
        }
    };

    return (
        <li style={{ backgroundColor: todo.completed ? '#d3ffd3' : '#fff', padding: '10px', margin: '5px 0', borderRadius: '5px' }}>
            {isEditing ? (
                <input 
                    type="text" 
                    value={editText} 
                    onChange={(e) => setEditText(e.target.value)} 
                    onBlur={handleUpdate} 
                    onKeyDown={(e) => e.key === 'Enter' && handleUpdate()} 
                />
            ) : (
                <span 
                    style={{ textDecoration: todo.completed ? 'line-through' : 'none' }} 
                    onClick={onToggle}
                >
                    {todo.text}
                </span>
            )}
            <button onClick={() => setIsEditing(!isEditing)}>
                {isEditing ? 'Save' : 'Edit'}
            </button>
            <button onClick={handleDelete}>Delete</button>
        </li>
    );
};

export default TodoItem;