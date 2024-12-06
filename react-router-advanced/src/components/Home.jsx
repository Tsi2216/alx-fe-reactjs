import React from 'react';

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Welcome to the Home Page</h1>
      <p style={styles.description}>
        This is a simple application built with React. Explore the features and enjoy your stay!
      </p>
      <button style={styles.button} onClick={() => alert('Welcome!')}>
        Get Started
      </button>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
    margin: 'auto',
  },
  header: {
    color: '#333',
    fontSize: '2rem',
  },
  description: {
    fontSize: '1.2rem',
    color: '#666',
    margin: '10px 0',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
};

export default Home;