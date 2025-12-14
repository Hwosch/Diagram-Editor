import type React from 'react';
import { ShapeButton } from './ShapeButton';

export const Sidebar: React.FC = () => (
  <div className='fixed h-full p-10 z-1'>
    <div className='h-full w-30 border border-gray-300 rounded-4xl shadow bg-white flex-col'>
      <ShapeButton shape='circle'>
        <div className='size-18 bg-lime-400 rounded-full' />
      </ShapeButton>
      <ShapeButton shape='rectangle'>
        <div className='w-20 h-16 bg-blue-400 rounded-xl' />
      </ShapeButton>
      <ShapeButton shape='triangle'>
        <svg
          viewBox='0 0 16 16'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          className='size-20 text-orange-400'
        >
          <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
          <g
            id='SVGRepo_tracerCarrier'
            stroke-linecap='round'
            stroke-linejoin='round'
          ></g>
          <g id='SVGRepo_iconCarrier'>
            <path
              fill='currentColor'
              d='M8 1.25a2.101 2.101 0 00-1.785.996l.64.392-.642-.388-5.675 9.373-.006.01a2.065 2.065 0 00.751 2.832c.314.183.67.281 1.034.285h11.366a2.101 2.101 0 001.791-1.045 2.064 2.064 0 00-.006-2.072L9.788 2.25l-.003-.004A2.084 2.084 0 008 1.25z'
            ></path>
          </g>
        </svg>
      </ShapeButton>
    </div>
  </div>
);
