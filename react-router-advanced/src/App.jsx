import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'; // Import Home component
import Profile from './components/Profile'; // Import Profile component
import UserProfile from './components/UserProfile'; // Import UserProfile component
import BlogPost from './components/BlogPost'; // Import BlogPost component
import ProtectedRoute from './components/ProtectedRoute'; // Import the ProtectedRoute component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home route */}
        <Route 
          path="/profile" 
          element={
            <ProtectedRoute>
              <Profile /> {/* Protected Profile route */}
            </ProtectedRoute>
          } 
        />
        <Route path="/user/:userId" element={<UserProfile />} /> {/* UserProfile route */}
        <Route path="/blog/:id" element={<BlogPost />} /> {/* BlogPost route */}
      </Routes>
    </Router>
  );
};

export default App;