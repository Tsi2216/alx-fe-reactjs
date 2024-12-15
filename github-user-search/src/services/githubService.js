import axios from 'axios';

export const fetchUserData = async (username, location, minRepos) => {
    const query = `${username} ${location ? `location:${location}` : ''} ${minRepos ? `repos:>${minRepos}` : ''}`.trim();
    const response = await axios.get(`https://api.github.com/search/users?q=${encodeURIComponent(query)}`);
    return response.data.items; // Adjust based on the API response structure
};