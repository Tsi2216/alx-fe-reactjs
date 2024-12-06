import { Routes, Route, Link } from 'react-router-dom';
import ProfileDetails from './ProfileDetails';
import ProfileSettings from './ProfileSettings';

const Profile = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>User Profile</h1>
      <nav style={styles.nav}>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <Link to="details" style={styles.navLink}>Profile Details</Link>
          </li>
          <li style={styles.navItem}>
            <Link to="settings" style={styles.navLink}>Profile Settings</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
      <footer style={styles.footer}>
        <p style={styles.footerText}>© 2024 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '600px',
    margin: 'auto',
    backgroundColor: '#f0f0f0',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  },
  header: {
    textAlign: 'center',
    color: '#333',
  },
  nav: {
    margin: '20px 0',
  },
  navList: {
    listStyleType: 'none',
    padding: 0,
    display: 'flex',
    justifyContent: 'space-around',
  },
  navItem: {
    margin: '0 10px',
  },
  navLink: {
    textDecoration: 'none',
    color: '#007bff',
    fontWeight: 'bold',
  },
  footer: {
    marginTop: '20px',
    textAlign: 'center',
    padding: '10px 0',
    borderTop: '1px solid #ccc',
  },
  footerText: {
    color: '#666',
  },
};

export default Profile;