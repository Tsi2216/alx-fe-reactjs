const Header = () => {
    return (
        <header style={{
            backgroundColor: 'lightblue', // Set the background color to light gray
            color: 'white',
            textAlign: 'center',
            padding: '30px',
            margin: '0',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
            fontFamily: 'Roboto, sans-serif'
        }}>
            <h1 style={{ fontSize: '3rem', margin: '0', transition: '0.3s' }}>My Favorite Cities</h1>
            <h2 style={{ fontSize: '1.5rem', margin: '10px 0', fontWeight: '300' }}>Explore the world's most beautiful cities</h2>
        </header>
    );
};

export default Header;