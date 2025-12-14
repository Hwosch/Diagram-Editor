import type {
  Edge,
  Node,
  OnConnect,
  OnEdgesChange,
  OnNodesChange,
} from '@xyflow/react';
import type { SHAPES } from '../common.consts';

/**
 * Данные диаграммы.
 * @prop nodes Ноды.
 * @prop edges Грани.
 */
export interface IDiagramData {
  nodes: IShapeNode[];
  edges: Edge[];
}

/** Фигура. */
export type TShape = (typeof SHAPES)[keyof typeof SHAPES];

/** Нода фигуры. */
export interface IShapeNode extends Node {
  type: TShape;
}

/** Состояние стора диаграмм.
 * @prop nodes Ноды.
 * @prop edges Грани.
 * @prop shapeCount Счётчик количества фигур по типам.
 * @prop addNode Обработчик добавления ноды.
 * @prop updateShapeCount Обработчик обновления счётчика количества фигур по типам.
 * @prop clearDiagram Обработчик очищения диаграммы.
 * @prop setDiagramData Обработчик установки данных диаграммы.
 * @prop updateNodes Обработчик обновления нод.
 * @prop updateEdges Обработчик обновления граней.
 * @prop updateConnections Обработчик обновления связей.
 */
export interface IDiagramState {
  nodes: IShapeNode[];
  edges: Edge[];
  shapeCount: Record<TShape, number>;
  addNode: (type: TShape) => void;
  updateShapeCount: () => void;
  clearDiagram: () => void;
  setDiagramData: (data: IDiagramData) => void;
  updateNodes: OnNodesChange<IShapeNode>;
  updateEdges: OnEdgesChange;
  updateConnections: OnConnect;
}
