import type React from 'react';
import { BaseShapeNode } from './BaseShapeNode';

export const TriangleShapeNode: React.FC = () => (
  <BaseShapeNode>
    <svg className='size-28' viewBox='0 0 100 100'>
      <polygon
        points='50,2 98,98 2,98'
        fill='none'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinejoin='round'
        className='text-orange-400'
      />
    </svg>
  </BaseShapeNode>
);
