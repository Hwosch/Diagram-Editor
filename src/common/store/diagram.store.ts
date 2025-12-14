import { create } from 'zustand';
import type { IDiagramState, IShapeNode } from '../types/diagram.types';
import { LIMIT_BY_SHAPE, SHAPES } from '../common.consts';
import { addEdge, applyEdgeChanges, applyNodeChanges } from '@xyflow/react';

const initialNodes: IShapeNode[] = [
  {
    id: 'n3',
    position: { x: 0, y: 200 },
    data: { label: 'Node 3' },
    type: SHAPES.RECTANGLE,
  },
  {
    id: 'n4',
    position: { x: 0, y: 300 },
    data: { label: 'Node 4' },
    type: SHAPES.TRIANGLE,
  },
  {
    id: 'n5',
    position: { x: 0, y: 400 },
    data: { label: 'Node 5' },
    type: SHAPES.CIRCLE,
  },
];

export const useDiagramStore = create<IDiagramState>((set, get) => ({
  nodes: initialNodes,
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

  removeNode: (id) => {
    const { nodes } = get();
    const nodeToRemove = nodes.find((n) => n.id === id);

    if (!nodeToRemove) return;

    set((state) => ({
      nodes: state.nodes.filter((n) => n.id !== id),
      shapeCount: {
        ...state.shapeCount,
        [nodeToRemove.type]: Math.max(
          0,
          state.shapeCount[nodeToRemove.type] - 1
        ),
      },
    }));
  },

  updateNodes: (changes) => {
    set((state) => ({
      nodes: applyNodeChanges(changes, state.nodes),
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
