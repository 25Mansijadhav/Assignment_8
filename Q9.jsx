import React, { useState } from 'react';

function GitHubUserFinder() {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
        setUser(null);
      });
  };

  return (
    <div>
      <h1>GitHub User Finder</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>
      {user && (
        <div>
          <img src={user.avatar_url} alt="Avatar" />
          <p>Name: {user.name}</p>
        </div>
      )}
    </div>
  );
}

export default GitHubUserFinder;
