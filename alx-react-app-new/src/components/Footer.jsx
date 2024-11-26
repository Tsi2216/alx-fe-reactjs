const Footer = () => {
    return (
        <footer style={{
            backgroundColor: 'lightblue', // Set the background color to light gray
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
                <a href="https://facebook.com" className="fa fa-facebook" style={iconStyle}></a>
                <a href="https://twitter.com" className="fa fa-twitter" style={iconStyle}></a>
                <a href="https://instagram.com" className="fa fa-instagram" style={iconStyle}></a>
            </div>
        </footer>
    );
};

const iconStyle = {
    padding: '10px',
    fontSize: '30px',
    color: 'white',
    textDecoration: 'none',
    transition: 'opacity 0.3s',
};

export default Footer;