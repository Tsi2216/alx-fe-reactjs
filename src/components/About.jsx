import React, { useState } from 'react';

function About() {
    // Example state variable
    const [info, setInfo] = useState("Our company has been providing top-notch services since 1990.");

    return (
        <div style={{ padding: '20px', backgroundColor: '#e0e0e0' }}>
            <h1 style={{ color: '#333' }}>About Us</h1>
            <p style={{ fontSize: '18px' }}>{info}</p>
        </div>
    );
}

export default About; // Exporting the component