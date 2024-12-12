import React from 'react';

const TodoItem = ({ todo, onToggle, onDelete, onEdit, editTodoId, editText, setEditText, saveEdit }) => {
    return (
        <li>
            {editTodoId === todo.id ? (
                <input 
                    value={editText} 
                    onChange={(e) => setEditText(e.target.value)} 
                />
            ) : (
                <span 
                    onClick={onToggle} 
                    style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                >
                    {todo.text}
                </span>
            )}
            <button onClick={() => onEdit(todo)}>Edit</button>
            {editTodoId === todo.id ? (
                <button onClick={() => saveEdit(todo.id)}>Save</button>
            ) : (
                <button onClick={() => onDelete(todo.id)}>Delete</button>
            )}
        </li>
    );
};

export default TodoItem;