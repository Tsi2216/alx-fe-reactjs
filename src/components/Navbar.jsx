import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    // Example state variable to track the active link
    const [activeLink, setActiveLink] = useState('/');

    return (
        <nav style={{ padding: '10px', background: '#007bff', color: '#fff' }}>
            <Link 
                to="/" 
                style={{ margin: '10px', color: '#fff', fontWeight: activeLink === '/' ? 'bold' : 'normal' }}
                onClick={() => setActiveLink('/')}
            >
                Home
            </Link>
            <Link 
                to="/about" 
                style={{ margin: '10px', color: '#fff', fontWeight: activeLink === '/about' ? 'bold' : 'normal' }}
                onClick={() => setActiveLink('/about')}
            >
                About
            </Link>
            <Link 
                to="/services" 
                style={{ margin: '10px', color: '#fff', fontWeight: activeLink === '/services' ? 'bold' : 'normal' }}
                onClick={() => setActiveLink('/services')}
            >
                Services
            </Link>
            <Link 
                to="/contact" 
                style={{ margin: '10px', color: '#fff', fontWeight: activeLink === '/contact' ? 'bold' : 'normal' }}
                onClick={() => setActiveLink('/contact')}
            >
                Contact
            </Link>
        </nav>
    );
}

export default Navbar; // Exporting the component