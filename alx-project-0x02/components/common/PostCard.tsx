import React from 'react';
import { PostProps } from '../../interfaces';

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => (
  <div style={{
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '1rem',
    margin: '1rem 0',
    background: '#fafafa'
  }}>
    <h2>{title}</h2>
    <p>{content}</p>
    <small>User ID: {userId}</small>
  </div>
);

export default PostCard;