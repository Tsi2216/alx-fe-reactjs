import React from 'react';
import 'font-awesome/css/font-awesome.min.css'; // Ensure Font Awesome is imported

const logoBase64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA..."; // Replace with your actual base64 string

const iconStyle = {
    padding: '10px',
    fontSize: '30px',
    color: 'white',
    textDecoration: 'none',
    transition: 'opacity 0.3s',
};

const Footer = () => {
    return (
        <footer style={{
            backgroundColor: '#2c3e50', // Darker background for better contrast
            color: 'white',
            textAlign: 'center',
            padding: '20px',
            boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.2)',
            position: 'relative',
            bottom: '0',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <img src={logoBase64} alt="Service Logo" style={{ width: '100px', height: 'auto', marginBottom: '10px' }} />
            <p style={{ margin: '5px 0', fontSize: '1rem', opacity: '0.8' }}>© 2023 City Lovers. All rights reserved.</p>
            <div>
                <a href="https://facebook.com" className="fa fa-facebook" style={iconStyle} aria-label="Facebook" target="_blank" rel="noopener noreferrer"></a>
                <a href="https://twitter.com" className="fa fa-twitter" style={iconStyle} aria-label="Twitter" target="_blank" rel="noopener noreferrer"></a>
                <a href="https://instagram.com" className="fa fa-instagram" style={iconStyle} aria-label="Instagram" target="_blank" rel="noopener noreferrer"></a>
            </div>
        </footer>
    );
};

export default Footer;