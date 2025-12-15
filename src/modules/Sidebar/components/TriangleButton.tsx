import React from 'react';
import { ShapeButton } from './ShapeButton';

/** Кнопка добавления треугольника. */
export const TriangleButton: React.FC = () => (
  <ShapeButton shape='triangle'>
    <svg
      viewBox='0 0 100 100'
      className='w-10 h-10 text-amber-500'
      aria-hidden='true'
    >
      <polygon
        points='50,8 92,92 8,92'
        fill='none'
        stroke='currentColor'
        strokeWidth='4'
        strokeLinejoin='round'
      />
    </svg>
  </ShapeButton>
);
