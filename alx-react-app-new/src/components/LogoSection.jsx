import React from 'react';
import viteLogo from '/vite-logo.svg'; // Vite logo from the public folder
import reactLogo from './assets/react-logo.svg'; // React logo from the src/assets folder

const LogoSection = () => {
    return (
        <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            backgroundColor: 'blue', 
            padding: '40px' 
        }}>
            <img src={viteLogo} alt="Vite Logo" style={{ width: '100px', margin: '10px', filter: 'drop-shadow(2px 2px 5px rgba(0,0,0,0.5))' }} />
            <img src={reactLogo} alt="React Logo" style={{ width: '100px', margin: '10px', filter: 'drop-shadow(2px 2px 5px rgba(0,0,0,0.5))' }} />
        </div>
    );
};

export default LogoSection;