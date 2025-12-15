import type React from 'react';
import { useDiagramStore } from '@/common/store/diagram.store';
import type { TShape } from '@/common/types/diagram.types';
import type { JSX } from 'react';
import { LIMIT_BY_SHAPE } from '@/common/common.consts';

/**
 * @prop shape Тип фигуры.
 */
interface IProps {
  shape: TShape;
  children: JSX.Element;
}

/** Кнопка добавления фигуры. */
export const ShapeButton: React.FC<IProps> = ({ shape, children }) => {
  const { shapeCount, addNode } = useDiagramStore();

  const handleClick = () => {
    addNode(shape);
  };

  const badgeShapeCount = LIMIT_BY_SHAPE - shapeCount[shape];
  const isLimitReached = !badgeShapeCount;
  const badgeColor = isLimitReached ? 'text-rose-500' : 'text-slate-900';

  return (
    <button
      onClick={handleClick}
      disabled={isLimitReached}
      className={`
        relative flex items-center justify-center
        w-16 h-16 rounded-2xl
        transition
        ${
          isLimitReached
            ? 'cursor-not-allowed opacity-40'
            : 'cursor-pointer hover:bg-slate-100 active:scale-[0.97]'
        }
      `}
    >
      {children}
      <div
        className={`absolute size-5 right-2 bottom-2 text-md text-center ${badgeColor} border rounded bg-white`}
      >
        {badgeShapeCount}
      </div>
    </button>
  );
};
