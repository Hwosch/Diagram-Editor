import React from 'react';
import { ShapeButton } from './ShapeButton';

/** Кнопка добавления прямоугольника. */
export const RectangleButton: React.FC = () => (
  <ShapeButton shape='rectangle'>
    <div className='w-10 h-10 rounded-lg border-2 border-sky-500 bg-sky-50' />
  </ShapeButton>
);
