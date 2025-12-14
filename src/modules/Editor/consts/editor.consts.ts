import type { KeyCode } from '@xyflow/react';

export const SHAPES = {
  RECTANGLE: 'rectangle',
  TRIANGLE: 'triangle',
  CIRCLE: 'circle',
} as const;

export const DELETE_KEY_CODES: KeyCode = ['Delete', 'Backspace'];
