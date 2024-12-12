import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
        userEvent.type(screen.getByPlaceholderText(/Add a new todo/i), 'New Todo');
        userEvent.click(screen.getByRole('button', { name: /Add Todo/i }));
        expect(screen.getByText(/New Todo/i)).toBeInTheDocument();
    });

    test('toggles a todo', () => {
        const todoItem = screen.getByText(/Learn React/i);
        userEvent.click(todoItem);
        expect(todoItem).toHaveStyle('text-decoration: line-through');
        userEvent.click(todoItem); // Toggle back
        expect(todoItem).not.toHaveStyle('text-decoration: line-through');
    });

    test('deletes a todo', async () => {
        const deleteButtons = screen.getAllByText(/Delete/i);
        userEvent.click(deleteButtons); // Click the first delete button
        await waitFor(() => {
            expect(screen.queryByText(/Learn React/i)).not.toBeInTheDocument();
        });
    });
});