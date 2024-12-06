import React, { useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import './PostsComponent.css'; // Import your CSS file for styling

const fetchPosts = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts', {
    headers: {
      'Accept-Language': 'en' // Requesting the response in English
    }
  });
  return data;
};

const PostsComponent = () => {
  const { data, error, isLoading, isError, refetch } = useQuery('posts', fetchPosts, {
    cacheTime: 1000 * 60 * 5, // Cache data for 5 minutes
    staleTime: 1000 * 60 * 1, // Data is considered fresh for 1 minute
    refetchOnWindowFocus: true, // Refetch data when the window is focused
    keepPreviousData: true, // Keep previous data while fetching new data
  });
  const [searchTerm, setSearchTerm] = useState('');

  if (isLoading) return <div className="spinner">Loading...</div>;
  if (isError) return <div className="error">Error: {error.message}</div>;

  // Filter posts based on the search term
  const filteredPosts = data.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search posts..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <button onClick={refetch} className="refetch-button">Refetch Posts</button>
      <ul className="posts-list">
        {filteredPosts.map(post => (
          <li key={post.id} className="post-item">
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;