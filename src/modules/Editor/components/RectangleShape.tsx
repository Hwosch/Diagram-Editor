import type React from 'react';
import { BaseShapeNode } from './BaseShapeNode';

export const RectangleShape: React.FC = () => {
  return (
    <BaseShapeNode>
      <div className="w-32 h-24 border-2 border-blue-400 rounded-sm" />
    </BaseShapeNode>
  );
};
