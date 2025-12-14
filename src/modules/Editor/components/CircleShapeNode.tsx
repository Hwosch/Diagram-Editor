import type React from 'react';
import { BaseShapeNode } from './BaseShapeNode';

/** Нода круга. */
export const CircleShapeNode: React.FC = () => (
  <BaseShapeNode>
    <div className='size-24 border-2 border-lime-500 rounded-full' />
  </BaseShapeNode>
);
