import React, { useState } from 'react';

function Home() {
    // Example state variable
    const [message, setMessage] = useState("We are dedicated to delivering excellence in all our services.");

    return (
        <div style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
            <h1 style={{ color: '#333' }}>Welcome to Our Company</h1>
            <p style={{ fontSize: '18px' }}>{message}</p>
        </div>
    );
}

export default Home; // Exporting the component