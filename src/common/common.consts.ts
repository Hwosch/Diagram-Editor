/**
 * Фигуры.
 * RECTANGLE - Прямоугольник.
 * TRIANGLE - Треугольник.
 * CIRCLE - Круг.
 */
export const SHAPES = {
  RECTANGLE: 'rectangle',
  TRIANGLE: 'triangle',
  CIRCLE: 'circle',
} as const;

/** Лимит нод на каждую фигуру. */
export const LIMIT_BY_SHAPE = 5;
