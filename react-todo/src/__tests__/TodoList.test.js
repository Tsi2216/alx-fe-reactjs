import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
    test('renders correctly with initial todos', () => {
        render(<TodoList />);
        expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
        expect(screen.getByText(/Learn Testing/i)).toBeInTheDocument();
    });

    test('adds a new todo', () => {
        render(<TodoList />);
        fireEvent.change(screen.getByPlaceholderText(/Add a new todo/i), { target: { value: 'New Todo' } });
        fireEvent.click(screen.getByText(/Add/i));
        expect(screen.getByText(/New Todo/i)).toBeInTheDocument();
    });

    test('toggles a todo', () => {
        render(<TodoList />);
        const todoItem = screen.getByText(/Learn React/i);
        fireEvent.click(todoItem);
        expect(todoItem).toHaveStyle('text-decoration: line-through');
        fireEvent.click(todoItem); // Toggle back
        expect(todoItem).not.toHaveStyle('text-decoration: line-through');
    });

    test('deletes a todo', () => {
        render(<TodoList />);
        const deleteButton = screen.getAllByText(/Delete/i);
        fireEvent.click(deleteButton);
        expect(screen.queryByText(/Learn React/i)).not.toBeInTheDocument();
    });
});