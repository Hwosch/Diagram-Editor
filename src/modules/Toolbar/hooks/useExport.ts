import { useDiagramStore } from '@/common/store/diagram.store';
import { serializeDiagram } from '../utils/toolbar.utils';

/** Хук экспорта. */
export const useExport = () => {
  const { nodes, edges } = useDiagramStore();

  return () => {
    if (!nodes.length) {
      alert('Диаграмма пустая');
      return;
    }

    const data = serializeDiagram(nodes, edges);
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: 'application/json',
    });

    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `diagram-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };
};
