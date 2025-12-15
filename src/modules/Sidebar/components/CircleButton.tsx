import React from 'react';
import { ShapeButton } from './ShapeButton';

/** Кнопка добавления круга. */
export const CircleButton: React.FC = () => (
  <ShapeButton shape='circle'>
    <div className='w-10 h-10 rounded-full border-2 border-lime-500 bg-lime-50' />
  </ShapeButton>
);
