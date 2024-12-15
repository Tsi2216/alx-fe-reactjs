import axios from 'axios';

export const fetchUserData = async (username) => {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
};

// Handle 404 errors
axios.interceptors.response.use(
    response => response,
    error => {
        if (error.response && error.response.status === 404) {
            throw new Error('User not found');
        }
        throw error;
    }
);