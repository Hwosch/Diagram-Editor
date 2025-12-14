import type React from 'react';
import { Lineicons } from '@lineiconshq/react-lineicons';
import {
  Download1Outlined,
  Upload1Outlined,
  Trash3Outlined,
} from '@lineiconshq/free-icons';
import { useExport } from '../hooks/useExport';
import { useImport } from '../hooks/useImport';
import { useDiagramStore } from '@/common/store/diagram.store';

/** Тулбар. */
export const Toolbar: React.FC = () => {
  const { clearDiagram } = useDiagramStore();
  const handleExport = useExport();
  const handleImport = useImport();

  return (
    <div className='fixed border border-gray-300 rounded-4xl shadow z-1 top-10 right-10 p-4'>
      <div className='flex gap-2'>
        <button onClick={handleExport}>
          <Lineicons
            icon={Download1Outlined}
            size={36}
            className='text-gray-900'
            strokeWidth={1.5}
          />
        </button>
        <button onClick={handleImport}>
          <Lineicons
            icon={Upload1Outlined}
            size={36}
            className='text-gray-900'
            strokeWidth={1.5}
          />
        </button>
        <button onClick={clearDiagram}>
          <Lineicons
            icon={Trash3Outlined}
            size={36}
            className='text-red-800'
            strokeWidth={1.5}
          />
        </button>
      </div>
    </div>
  );
};
