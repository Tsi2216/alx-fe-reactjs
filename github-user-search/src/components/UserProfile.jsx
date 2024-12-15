// components/UserProfile.jsx
import React, { useEffect, useState } from 'react';
import { fetchUserData } from '../services/UserAPI';

const UserProfile = ({ username }) => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const data = await fetchUserData(username);
        setUserData(data); // Set the user data in state
      } catch (err) {
        setError(err); // Set the error in state
      }
    };

    getUserData(); // Call the function to fetch user data
  }, [username]);

  if (error) return <div>Error: {error.message}</div>; // Display error message
  if (!userData) return <div>Loading...</div>; // Display loading state

  return (
    <div>
      <h2>{userData.name}</h2>
      <p>{userData.bio}</p>
      <img src={userData.avatar_url} alt={userData.name} />
    </div>
  );
};

export default UserProfile;