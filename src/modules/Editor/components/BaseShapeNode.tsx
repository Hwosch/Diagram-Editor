import { Handle, Position } from '@xyflow/react';
import type { JSX } from 'react';
import type React from 'react';

interface IProps {
  children: JSX.Element;
}

export const BaseShapeNode: React.FC<IProps> = ({ children }) => {
  return (
    <>
      <Handle type="source" position={Position.Top} />
      <Handle type="target" position={Position.Bottom} />
      {children}
    </>
  );
};
