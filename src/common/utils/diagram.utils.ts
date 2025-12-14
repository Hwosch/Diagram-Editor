import type { IShapeNode, TShape } from '../types/diagram.types';

/**
 * Возвращает счётчик нод по фигурам.
 * @param nodes Ноды.
 */
export const getShapeCount = (nodes: IShapeNode[]): Record<TShape, number> =>
  nodes.reduce(
    (acc, node) => {
      acc[node.type] += 1;
      return acc;
    },
    { circle: 0, rectangle: 0, triangle: 0 }
  );
