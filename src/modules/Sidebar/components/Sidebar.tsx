import type React from 'react';
import { TriangleButton } from './TriangleButton';
import { RectangleButton } from './RectangleButton';
import { CircleButton } from './CircleButton';

/** Сайдбар. */
export const Sidebar: React.FC = () => (
  <div className='fixed h-full p-10 z-1'>
    <div className='h-full w-20 border border-slate-200 rounded-3xl bg-white flex flex-col items-center p-2'>
      <CircleButton />
      <RectangleButton />
      <TriangleButton />
    </div>
  </div>
);
