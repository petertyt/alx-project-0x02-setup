import React from 'react';
import { type ButtonProps } from '../../interfaces';

const sizeStyles: Record<string, React.CSSProperties> = {
  small: { padding: '0.25rem 0.75rem', fontSize: '0.85rem' },
  medium: { padding: '0.5rem 1.25rem', fontSize: '1rem' },
  large: { padding: '0.75rem 2rem', fontSize: '1.25rem' },
};

const shapeStyles: Record<string, React.CSSProperties> = {
  'rounded-sm': { borderRadius: '4px' },
  'rounded-md': { borderRadius: '12px' },
  'rounded-full': { borderRadius: '999px' },
};

const Button: React.FC<ButtonProps> = ({
  children,
  size = 'medium',
  shape = 'rounded-md',
  onClick,
  type = 'button',
}) => (
  <button
    type={type}
    onClick={onClick}
    style={{
      background: '#0070f3',
      color: '#fff',
      border: 'none',
      cursor: 'pointer',
      ...sizeStyles[size],
      ...shapeStyles[shape],
      marginRight: '1rem'
    }}
  >
    {children}
  </button>
);

export default Button;