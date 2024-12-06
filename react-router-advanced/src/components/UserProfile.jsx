import React from 'react';
import { useParams } from 'react-router-dom';

const UserProfile = () => {
  const { userId } = useParams(); // Access the userId from the URL

  // Sample user data (in a real application, this would come from an API)
  const userData = {
    name: "John Doe",
    email: "john.doe@example.com",
    bio: "A passionate developer.",
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>User Profile</h1>
      <p style={styles.userId}>User ID: <strong>{userId}</strong></p>
      <p style={styles.userInfo}><strong>Name:</strong> {userData.name}</p>
      <p style={styles.userInfo}><strong>Email:</strong> {userData.email}</p>
      <p style={styles.userInfo}><strong>Bio:</strong> {userData.bio}</p>
      <button style={styles.button} onClick={() => alert('Edit functionality to be implemented')}>Edit Profile</button>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
    maxWidth: '400px',
    margin: 'auto',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  },
  header: {
    color: '#333',
    textAlign: 'center',
  },
  userId: {
    fontSize: '18px',
    margin: '10px 0',
  },
  userInfo: {
    fontSize: '16px',
    margin: '5px 0',
  },
  button: {
    marginTop: '15px',
    padding: '10px 15px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default UserProfile;