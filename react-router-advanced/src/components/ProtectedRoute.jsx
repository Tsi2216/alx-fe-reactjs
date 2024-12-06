import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = true; // Replace with your actual authentication logic

  return isAuthenticated ? children : <Navigate to="/" />;
};

export default ProtectedRoute;