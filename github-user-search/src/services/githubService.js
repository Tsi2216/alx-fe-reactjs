import axios from 'axios';

// Set up the response interceptor
axios.interceptors.response.use(
    response => response,
    error => {
        if (error.response && error.response.status === 404) {
            throw new Error('User not found');
        }
        throw error;
    }
);

export const fetchUserData = async (username) => {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
};