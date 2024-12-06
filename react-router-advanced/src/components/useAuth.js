// src/hooks/useAuth.js
import { useState, useEffect } from 'react';

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Simulate an authentication check (replace this with your actual logic)
  useEffect(() => {
    const checkAuth = () => {
      // Here, you can implement your authentication check logic
      // For example, checking a token in localStorage
      const token = localStorage.getItem('authToken');
      setIsAuthenticated(!!token); // Set true if token exists
    };

    checkAuth();
  }, []);

  return isAuthenticated;
};

export default useAuth;