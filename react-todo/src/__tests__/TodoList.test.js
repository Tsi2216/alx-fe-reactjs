import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'; // Import userEvent
import TodoList from '../components/TodoList'; 

describe('TodoList Component', () => {
    beforeEach(() => {
        render(<TodoList />);
    });

    test('renders correctly with initial todos', () => {
        expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
        expect(screen.getByText(/Learn Testing/i)).toBeInTheDocument();
    });

    test('adds a new todo', () => {
        fireEvent.change(screen.getByPlaceholderText(/Add a new todo/i), { target: { value: 'New Todo' } });
        fireEvent.click(screen.getByText(/Add/i)); // Ensure the button text matches
        expect(screen.getByText(/New Todo/i)).toBeInTheDocument();
    });

    test('toggles a todo', () => {
        const todoItem = screen.getByText(/Learn React/i);
        fireEvent.click(todoItem);
        expect(todoItem).toHaveStyle('text-decoration: line-through');
        fireEvent.click(todoItem); // Toggle back
        expect(todoItem).not.toHaveStyle('text-decoration: line-through');
    });

    test('deletes a todo', async () => {
        const deleteButtons = screen.getAllByText(/Delete/i); // Get all delete buttons
        userEvent.click(deleteButtons); // Click the first delete button
        await waitFor(() => {
            expect(screen.queryByText(/Learn React/i)).not.toBeInTheDocument(); // Check if the todo is removed
        });
    });
});