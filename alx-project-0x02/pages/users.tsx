import React from 'react';
// eslint-disable-next-line import/no-absolute-path
import Header from '@/components/layout/Header';
import UserCard from '../components/common/UserCard';
import { UserProps } from '../interfaces';

interface UsersPageProps {
  users: UserProps[];
}

export default function Users({ users }: UsersPageProps) {
  return (
    <>
      <Header />
      <main>
        <h1>Users Page</h1>
        <p>This is the Users page.</p>
        {users.length === 0 ? (
          <p>No users found.</p>
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

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  return {
    props: {
      users: data,
    },
  };
}