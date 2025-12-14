import type React from 'react';
import { BaseShapeNode } from './BaseShapeNode';

/** Нода прямоугольника. */
export const RectangleShapeNode: React.FC = () => (
  <BaseShapeNode>
    <div className='w-32 h-24 border-2 border-blue-400 rounded-sm' />
  </BaseShapeNode>
);
