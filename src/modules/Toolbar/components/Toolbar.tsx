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
import { ToolbarButton } from './ToolbarButton';

/** Тулбар. */
export const Toolbar: React.FC = () => {
  const { nodes, clearDiagram } = useDiagramStore();
  const handleExport = useExport();
  const handleImport = useImport();

  const hasNodes = !!nodes.length;

  const handleClear = () => {
    clearDiagram();
  };

  return (
    <div
      className='
        fixed top-6 right-8 z-1
        rounded-3xl border border-slate-200 bg-white/80
        px-4 py-2
      '
    >
      <div className='flex items-center gap-2'>
        <ToolbarButton
          title='Скачать диаграмму'
          onClick={handleExport}
          disabled={!hasNodes}
        >
          <Lineicons
            icon={Download1Outlined}
            size={24}
            className='text-slate-900'
            strokeWidth={1.6}
          />
        </ToolbarButton>

        <ToolbarButton title='Импортировать диаграмму' onClick={handleImport}>
          <Lineicons
            icon={Upload1Outlined}
            size={24}
            className='text-slate-900'
            strokeWidth={1.6}
          />
        </ToolbarButton>

        <ToolbarButton
          title='Очистить диаграмму'
          onClick={handleClear}
          disabled={!hasNodes}
          variant='danger'
        >
          <Lineicons
            icon={Trash3Outlined}
            size={24}
            className='text-rose-600'
            strokeWidth={1.6}
          />
        </ToolbarButton>
      </div>
    </div>
  );
};
