import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
    const { username } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Fetch data for the selected user from GitHub API
        fetch(`https://api.github.com/users/${username}`)
          .then((response) => response.json())
          .then((data) => setUser(data));
      }, [username]);
    
      if (!user) {
        return <p>Loading...</p>;
      }

  return (
    <div>
    <h1>User Details</h1>
    <img src={user.avatar_url} alt={user.login} />
    <h2>{user.first_name} {user.last_name} ({user.login})</h2>
    <p>Company: {user.company}</p>
    <p>Followers: {user.followers}</p>
    <p>Following: {user.following}</p>
    <p>Public Repositories: {user.public_repos}</p>
  </div>

  );
};

export default UserDetails;
