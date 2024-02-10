import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { List, ListItem, ListItemAvatar, Avatar, ListItemText } from '@mui/material';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch data from GitHub API
    fetch('https://api.github.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id} className="user">
            <img src={user.avatar_url} alt={user.login} className="user-avatar" />
            <Link to={`/user/${user.login}`} className="user-link">
              {user.first_name} {user.last_name} ({user.login})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
