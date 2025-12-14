import type {
  Edge,
  Node,
  OnConnect,
  OnEdgesChange,
  OnNodesChange,
} from '@xyflow/react';
import type { SHAPES } from '../common.consts';

export type TShape = (typeof SHAPES)[keyof typeof SHAPES];

export interface IShapeNode extends Node {
  type: TShape;
}

export interface IDiagramState {
  nodes: IShapeNode[];
  edges: Edge[];
  shapeCount: Record<TShape, number>;

  addNode: (type: TShape) => void;
  removeNode: (id: string) => void;
  updateNodes: OnNodesChange<IShapeNode>;
  updateEdges: OnEdgesChange;
  updateConnections: OnConnect;
}
