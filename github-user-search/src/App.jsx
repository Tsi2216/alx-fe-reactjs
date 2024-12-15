import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import UserProfile from './components/UserProfile';
import Search from './components/Search';

const App = () => {
  return (
    <Router>
      <div>
        <h1>GitHub User Search</h1>
        <Search />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/user/:username" element={<UserProfile />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;