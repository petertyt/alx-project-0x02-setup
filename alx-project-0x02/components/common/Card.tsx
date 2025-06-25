import React from 'react';
import { CardProps } from '../../interfaces';

const Card: React.FC<CardProps> = ({ title, content }) => (
  <div style={{
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '1rem',
    margin: '1rem 0',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
  }}>
    <h2>{title}</h2>
    <p>{content}</p>
  </div>
);

export default Card;