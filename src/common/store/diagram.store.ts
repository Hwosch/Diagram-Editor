import { create } from 'zustand';
import type { IDiagramState, IShapeNode, TShape } from '../types/diagram.types';
import { LIMIT_BY_SHAPE } from '../common.consts';
import { addEdge, applyEdgeChanges, applyNodeChanges } from '@xyflow/react';

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
    const shapeCount: Record<TShape, number> = nodes.reduce(
      (acc, node) => {
        acc[node.type] += 1;
        return acc;
      },
      { circle: 0, rectangle: 0, triangle: 0 }
    );

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
}));
