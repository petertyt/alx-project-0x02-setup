import React, { useEffect, useState } from 'react';
import Header from '../components/layout/Header';
import UserCard from '../components/common/UserCard';
import { UserProps } from '../interfaces';

export default function Users() {
  const [users, setUsers] = useState<UserProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Header />
      <main>
        <h1>Users Page</h1>
        <p>This is the Users page.</p>
        {loading ? (
          <p>Loading users...</p>
        ) : (
          users.map(user => (
            <UserCard
              key={user.id}
              name={user.name}
              email={user.email}
              address={user.address}
              id={user.id}
            />
          ))
        )}
      </main>
        </>
        );
    }