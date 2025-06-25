import React from 'react';
import { UserProps } from '../../interfaces';

const UserCard: React.FC<UserProps> = ({ name, email, address }) => (
  <div style={{
    border: '1px solid #bbb',
    borderRadius: '8px',
    padding: '1rem',
    margin: '1rem 0',
    background: '#f5f5f5'
  }}>
    <h2>{name}</h2>
    <p><strong>Email:</strong> {email}</p>
    <p>
      <strong>Address:</strong> {address.street}, {address.suite}, {address.city}, {address.zipcode}
    </p>
  </div>
);

export default UserCard;