import type { Edge } from '@xyflow/react';
import type { IDiagramData, IShapeNode } from '@/common/types/diagram.types';

/**
 * Сериализация диаграммы.
 * @param nodes Ноды.
 * @param edges Грани.
 */
export const serializeDiagram = (
  nodes: IShapeNode[],
  edges: Edge[]
): IDiagramData => ({
  nodes,
  edges,
});

/**
 * Десериализация диаграммы.
 * @param json JSON.
 */
export const deserializeDiagram = (json: string): IDiagramData => {
  const data = JSON.parse(json);

  if (!Array.isArray(data.nodes) || !Array.isArray(data.edges)) {
    throw new Error('Некорректный формат');
  }

  return data;
};
