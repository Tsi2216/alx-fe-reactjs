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
  const { data, error, isLoading } = useQuery('posts', fetchPosts);
  const [searchTerm, setSearchTerm] = useState('');

  if (isLoading) return <div className="spinner">Loading...</div>;
  if (error) return <div className="error">Error: {error.message}</div>;

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