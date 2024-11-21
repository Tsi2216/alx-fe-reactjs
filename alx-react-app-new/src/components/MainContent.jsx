const MainContent = () => {
    return (
        <main style={{
            padding: '40px',
            backgroundColor: '#f0f0f0',
            textAlign: 'center',
            borderRadius: '10px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            margin: '20px auto',
            maxWidth: '600px'
        }}>
            <h2 style={{ fontSize: '2rem', color: 'darkslategray', marginBottom: '20px' }}>
                Travel Destinations
            </h2>
            <p style={{ fontSize: '1.2rem', color: '#555' }}>
                I love to visit <strong style={{ color: 'blue' }}>New York</strong>, <strong style={{ color: 'blue' }}>Paris</strong>, and <strong style={{ color: 'blue' }}>Tokyo</strong>.
            </p>
        </main>
    );
};

export default MainContent;