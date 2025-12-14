import type React from 'react';
import { useDiagramStore } from '../../../common/store/diagram.store';
import type { TShape } from '../../../common/types/diagram.types';
import type { JSX } from 'react';
import { LIMIT_BY_SHAPE } from '../../../common/common.consts';

interface IProps {
  shape: TShape;
  children: JSX.Element;
}

export const ShapeButton: React.FC<IProps> = ({ shape, children }) => {
  const { shapeCount, addNode } = useDiagramStore();

  const handleClick = () => {
    addNode(shape);
  };

  const badgeShapeCount = LIMIT_BY_SHAPE - shapeCount[shape];
  const badgeColor = badgeShapeCount ? 'text-neutral-900' : 'text-red-500';

  return (
    <button onClick={handleClick} className='w-full p-2 relative flex'>
      {children}
      <div
        className={`absolute size-8 right-2 bottom-2 text-xl ${badgeColor} border rounded-xl bg-white`}
      >
        {badgeShapeCount}
      </div>
    </button>
  );
};
