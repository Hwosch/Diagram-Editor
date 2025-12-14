import { create } from 'zustand';
import type { IDiagramState, IShapeNode } from '../types/diagram.types';
import { LIMIT_BY_SHAPE } from '../common.consts';
import { addEdge, applyEdgeChanges, applyNodeChanges } from '@xyflow/react';
import { getShapeCount } from '../utils/diagram.utils';

/** Стор диаграмм. */
export const useDiagramStore = create<IDiagramState>((set, get) => ({
  nodes: [],
  edges: [],
  shapeCount: { circle: 0, rectangle: 0, triangle: 0 },

  addNode: (type) => {
    const { shapeCount } = get();

    if (shapeCount[type] >= LIMIT_BY_SHAPE) return;

    const newNode: IShapeNode = {
      id: crypto.randomUUID(),
      type,
      position: { x: 0, y: 0 },
      data: {
        label: `${type}-Node`,
      },
    };

    set((state) => ({
      nodes: [...state.nodes, newNode],
      shapeCount: {
        ...state.shapeCount,
        [type]: state.shapeCount[type] + 1,
      },
    }));
  },

  updateNodes: (changes) => {
    set((state) => ({
      nodes: applyNodeChanges(changes, state.nodes),
    }));

    const { updateShapeCount } = get();

    const needUpdateShapeCount = changes.some(
      (change) => change.type === 'remove'
    );
    if (needUpdateShapeCount) {
      updateShapeCount();
    }
  },

  updateShapeCount: () => {
    const { nodes } = get();
    const shapeCount = getShapeCount(nodes);

    set(() => ({
      shapeCount,
    }));
  },

  updateEdges: (changes) => {
    set((state) => ({
      edges: applyEdgeChanges(changes, state.edges),
    }));
  },

  updateConnections: (connection) => {
    set((state) => ({
      edges: addEdge(connection, state.edges),
    }));
  },

  setDiagramData: ({ nodes, edges }) => {
    const shapeCount = getShapeCount(nodes);
    set({ nodes, edges, shapeCount });
  },

  clearDiagram: () => {
    set(() => ({
      nodes: [],
      edges: [],
      shapeCount: { circle: 0, rectangle: 0, triangle: 0 },
    }));
  },
}));
