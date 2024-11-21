const Header = () => {
    return (
        <header style={{
            background: 'linear-gradient(to right, navy, darkblue)',
            color: 'white',
            textAlign: 'center',
            padding: '20px',
            margin: '0',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            fontFamily: 'Arial, sans-serif'
        }}>
            <h1 style={{ fontSize: '2.5rem', margin: '0' }}>My Favorite Cities</h1>
        </header>
    );
};

export default Header;