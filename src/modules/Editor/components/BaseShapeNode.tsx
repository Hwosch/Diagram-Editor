import { Handle, Position } from '@xyflow/react';
import type { JSX } from 'react';
import type React from 'react';

interface IProps {
  children: JSX.Element;
}

/** Базовая нода фигуры. */
export const BaseShapeNode: React.FC<IProps> = ({ children }) => (
  <>
    <Handle type='source' position={Position.Top} />
    <Handle type='target' position={Position.Bottom} />
    {children}
  </>
);
