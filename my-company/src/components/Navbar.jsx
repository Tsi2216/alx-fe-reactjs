import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [activeLink, setActiveLink] = useState('/');
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav style={{
            padding: '15px 30px',
            background: '#007bff',
            color: '#fff',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
            position: 'relative',
        }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Our Company</div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <button onClick={toggleMobileMenu} style={{
                    display: 'none',
                    background: 'transparent',
                    border: 'none',
                    color: '#fff',
                    fontSize: '1.5rem',
                    cursor: 'pointer',
                    marginRight: '15px',
                }}>
                    &#9776;
                </button>
                <div style={{
                    display: isMobileMenuOpen ? 'block' : 'flex',
                    flexDirection: isMobileMenuOpen ? 'column' : 'row',
                    alignItems: isMobileMenuOpen ? 'flex-start' : 'center',
                    position: isMobileMenuOpen ? 'absolute' : 'static',
                    top: isMobileMenuOpen ? '60px' : 'auto',
                    background: '#007bff',
                    width: isMobileMenuOpen ? '100%' : 'auto',
                    transition: 'all 0.3s ease',
                    borderRadius: '5px',
                }}>
                    <Link 
                        to="/" 
                        style={linkStyle(activeLink === '/', '#007bff')}
                        onClick={() => { setActiveLink('/'); setMobileMenuOpen(false); }}
                    >
                        Home
                    </Link>
                    <Link 
                        to="/about" 
                        style={linkStyle(activeLink === '/about', '#007bff')}
                        onClick={() => { setActiveLink('/about'); setMobileMenuOpen(false); }}
                    >
                        About
                    </Link>
                    <Link 
                        to="/services" 
                        style={linkStyle(activeLink === '/services', '#007bff')}
                        onClick={() => { setActiveLink('/services'); setMobileMenuOpen(false); }}
                    >
                        Services
                    </Link>
                    <Link 
                        to="/contact" 
                        style={linkStyle(activeLink === '/contact', '#007bff')}
                        onClick={() => { setActiveLink('/contact'); setMobileMenuOpen(false); }}
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
}

const linkStyle = (isActive, backgroundColor) => ({
    margin: '0 15px',
    color: '#fff',
    fontWeight: isActive ? 'bold' : 'normal',
    textDecoration: 'none',
    transition: 'color 0.3s',
    padding: isActive ? '10px 15px' : '10px',
    borderRadius: isActive ? '5px' : '0',
    background: isActive ? 'rgba(255, 255, 255, 0.2)' : backgroundColor,
});

export default Navbar;