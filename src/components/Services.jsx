import React, { useState } from 'react';

function Services() {
    // Example state variable to manage services
    const [services] = useState([
        "Technology Consulting",
        "Market Analysis",
        "Product Development"
    ]);

    return (
        <div style={{ padding: '20px', backgroundColor: '#d0d0d0' }}>
            <h1 style={{ color: '#333' }}>Our Services</h1>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {services.map((service, index) => (
                    <li key={index}>{service}</li>
                ))}
            </ul>
        </div>
    );
}

export default Services; // Exporting the component