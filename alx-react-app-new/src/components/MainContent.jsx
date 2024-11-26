const MainContent = () => {
    return (
        <main style={{
            padding: '40px',
            background: 'linear-gradient(to bottom right, #ffffff, #f9f9f9)', // Soft white gradient
            textAlign: 'center',
            borderRadius: '10px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', // Lighter shadow for a softer look
            margin: '20px auto',
            maxWidth: '600px'
        }}>
            <h2 style={{ fontSize: '2.5rem', color: '#333', marginBottom: '20px', fontWeight: 'bold' }}>
                Travel Destinations
            </h2>
            <p style={{ fontSize: '1.2rem', color: '#666', lineHeight: '1.5' }}>
                I love to visit New York, Paris, and Tokyo.
            </p>
            <button style={{
                padding: '10px 20px',
                fontSize: '1rem',
                color: 'white',
                backgroundColor: '#28a745', // Bootstrap success color for a fresh look
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                marginTop: '20px',
                transition: 'background-color 0.3s ease' // Smooth transition for hover effect
            }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#218838'} // Darker green on hover
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#28a745'}>
                Explore More Destinations
            </button>
        </main>
    );
};

export default MainContent;