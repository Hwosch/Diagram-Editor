import { ReactFlow, type NodeTypes } from '@xyflow/react';
import { RectangleShapeNode } from './RectangleShapeNode';
import { TriangleShapeNode } from './TriangleShapeNode';
import { CircleShapeNode } from './CircleShapeNode';
import { DELETE_KEY_CODES } from '../consts/editor.consts';
import { SHAPES } from '../../../common/common.consts';
import { useDiagramStore } from '../../../common/store/diagram.store';

const NODE_TYPES: NodeTypes = {
  [SHAPES.RECTANGLE]: RectangleShapeNode,
  [SHAPES.TRIANGLE]: TriangleShapeNode,
  [SHAPES.CIRCLE]: CircleShapeNode,
};

export function Editor() {
  const { edges, nodes, updateEdges, updateNodes, updateConnections } =
    useDiagramStore();

  return (
    <div className='w-screen h-screen'>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={updateNodes}
        onEdgesChange={updateEdges}
        onConnect={updateConnections}
        nodeTypes={NODE_TYPES}
        deleteKeyCode={DELETE_KEY_CODES}
        fitView
      />
    </div>
  );
}
