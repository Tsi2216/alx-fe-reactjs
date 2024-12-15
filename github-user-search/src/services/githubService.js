import axios from 'axios';

// Set up the response interceptor to handle errors globally
axios.interceptors.response.use(
    response => response,
    error => {
        // Check for 404 error and throw a specific error message
        if (error.response && error.response.status === 404) {
            throw new Error('User not found');
        }
        // Throw other errors as they are
        throw error;
    }
);

// Function to fetch user data from GitHub
export const fetchUserData = async (username) => {
    try {
        const response = await axios.get(`https://api.github.com/users/${username}`);
        return response.data; // Return the user data
    } catch (error) {
        // Handle any errors that occur during the fetch
        console.error('Error fetching user data:', error);
        throw error; // Rethrow the error to be handled in the component
    }
};