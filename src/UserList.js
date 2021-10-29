import React, { useEffect, useState } from 'react';
import HOC from './HOC';

const UserList = ({ data }) => {
  // const [users, setUsers] = useState([]);
  // const [term, setTerm] = useState('');
  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     const res = await fetch('https://jsonplaceholder.typicode.com/users');
  //     const users = await res.json();
  //     setUsers(users);
  //     console.log(users);
  //   };

  //   fetchUsers();
  // }, []);
  let renderUsers = data.map((user) => {
    return (
      <div key={user.id}>
        <p>
          <strong>{user.name}</strong>
        </p>
      </div>
    );
  });

  // let filterUsers = users
  //   .filter(({ name }) => {
  //     return name.indexOf(term) > -1;
  //   })
  //   .map((user) => {
  //     return (
  //       <div key={user.id}>
  //         <p>
  //           <strong>{user.name}</strong>
  //         </p>
  //       </div>
  //     );
  //   });

  return (
    <div>
      <div>{renderUsers}</div>
    </div>
  );
};

const SearchUsers = HOC(UserList, 'users');
export default SearchUsers;
