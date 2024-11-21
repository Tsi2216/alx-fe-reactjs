const Footer = () => {
    return (
        <footer style={{
            background: 'linear-gradient(to right, navy, darkblue)',
            color: 'white',
            textAlign: 'center',
            padding: '20px',
            boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.2)',
            position: 'relative',
            bottom: '0',
            width: '100%'
        }}>
            <p style={{ margin: '5px 0', fontSize: '1rem' }}>© 2023 City Lovers</p>
            <div>
                <a href="https://facebook.com" style={{ color: 'white', margin: '0 10px' }}>Facebook</a>
                <a href="https://twitter.com" style={{ color: 'white', margin: '0 10px' }}>Twitter</a>
                <a href="https://instagram.com" style={{ color: 'white', margin: '0 10px' }}>Instagram</a>
            </div>
        </footer>
    );
};

export default Footer;