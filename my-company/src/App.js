import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'; // Updated path
import About from './components/About'; // Updated path
import Services from './components/Services'; // Updated path
import Contact from './components/Contact'; // Updated path
import Navbar from './components/Navbar'; // Updated path
import Footer from './components/Footer'; // Ensure Footer is imported
import ErrorBoundary from './components/ErrorBoundary'; // Import ErrorBoundary
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </ErrorBoundary>
        <Footer /> {/* Include Footer here */}
      </div>
    </Router>
  );
}

export default App;