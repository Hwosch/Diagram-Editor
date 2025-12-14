import { useState, useCallback } from 'react';
import {
  ReactFlow,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  type OnNodesChange,
  type OnEdgesChange,
  type OnConnect,
  type Node,
  type Edge,
  type NodeTypes,
} from '@xyflow/react';
import { RectangleShape } from './RectangleShape';
import { TriangleShape } from './TriangleShape';
import { CircleShape } from './CircleShape';
import { DELETE_KEY_CODES, SHAPES } from '../consts/editor.consts';

const initialNodes: Node[] = [
  { id: 'n1', position: { x: 0, y: 0 }, data: { label: 'Node 1' } },
  { id: 'n2', position: { x: 0, y: 100 }, data: { label: 'Node 2' } },
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
const initialEdges: Edge[] = [{ id: 'n1-n2', source: 'n1', target: 'n2' }];

const NODE_TYPES: NodeTypes = {
  [SHAPES.RECTANGLE]: RectangleShape,
  [SHAPES.TRIANGLE]: TriangleShape,
  [SHAPES.CIRCLE]: CircleShape,
};

export function Editor() {
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);

  const onNodesChange: OnNodesChange = useCallback(
    (changes) =>
      setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
    []
  );
  const onEdgesChange: OnEdgesChange = useCallback(
    (changes) =>
      setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
    []
  );
  const onConnect: OnConnect = useCallback(
    (params) => setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)),
    []
  );

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={NODE_TYPES}
        deleteKeyCode={DELETE_KEY_CODES}
        fitView
      />
    </div>
  );
}
