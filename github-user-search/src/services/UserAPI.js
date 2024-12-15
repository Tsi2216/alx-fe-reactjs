// services/UserAPI.js
import axios from 'axios';

// Access the API key from environment variables using Vite
const apiKey = import.meta.env.VITE_GITHUB_API_KEY;

// Function to fetch user data from GitHub
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `token ${apiKey}` // Use the API key in the Authorization header
      }
    });
    return response.data; // Return the user data
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error; // Rethrow the error for handling in the calling function
  }
};