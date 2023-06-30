import { useState, useEffect } from "react";
import { listUsers } from "../api/usersApi";

const DisplayUsers = () => {
  const [users, setUsers] = useState([]);

  const initFetchUsers = async () => {
    const users = await listUsers();
    setUsers(users);
  };

  useEffect(() => {
    initFetchUsers();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <p>{user.id}</p>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayUsers;
