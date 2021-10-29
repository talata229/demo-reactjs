import React, { useEffect, useState } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [term, setTerm] = useState('');
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await res.json();
      setUsers(users);
      console.log(users);
    };

    fetchUsers();
  }, []);
  let renderUsers = users.map((user) => {
    return (
      <div key={user.id}>
        <p>
          <strong>{user.name}</strong>
        </p>
      </div>
    );
  });

  let filterUsers = users
    .filter(({ name }) => {
      return name.indexOf(term) > -1;
    })
    .map((user) => {
      return (
        <div key={user.id}>
          <p>
            <strong>{user.name}</strong>
          </p>
        </div>
      );
    });

  return (
    <div>
      <h2>Users</h2>
      <input
        type='text'
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <div>{filterUsers}</div>
    </div>
  );
};

export default UserList;
