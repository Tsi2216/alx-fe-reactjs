// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth'; // Import the useAuth hook

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useAuth(); // Get authentication status from the hook

  return isAuthenticated ? children : <Navigate to="/" />;
};

export default ProtectedRoute;