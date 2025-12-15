import { useDiagramStore } from '@/common/store/diagram.store';
import { LIMIT_BY_SHAPE, SHAPES } from '@/common/common.consts';
import { getShapeCount } from '@/common/utils/diagram.utils';
import type {
  IDiagramData,
  IShapeNode,
  TShape,
} from '@/common/types/diagram.types';

/**
 * Результат импорта
 * @param success Признак успешности выполнения импорта.
 * @param [error] Сообщение ошибки.
 */
interface IImportResult {
  success: boolean;
  error?: string;
}

/** Хук импорта. */
export const useImport = () => {
  const { clearDiagram, setDiagramData } = useDiagramStore();

  const validateDiagramData = (data: unknown): data is IDiagramData => {
    if (!data || typeof data !== 'object') return false;

    const obj = data as Record<string, unknown>;

    if (!Array.isArray(obj.nodes) || !Array.isArray(obj.edges)) {
      return false;
    }

    // Валидация нод
    const validNodes = obj.nodes.every(
      (node: unknown) =>
        node &&
        typeof node === 'object' &&
        'id' in node &&
        'type' in node &&
        typeof node.type === 'string' &&
        'position' in node &&
        Object.values(SHAPES).includes(node.type as TShape)
    );

    if (!validNodes) return false;

    // Валидация граней
    const validEdges = obj.edges.every(
      (edge: unknown) =>
        edge &&
        typeof edge === 'object' &&
        'id' in edge &&
        'source' in edge &&
        'target' in edge
    );

    return validEdges;
  };

  const validateShapeCount = (nodes: IShapeNode[]): boolean => {
    const shapeCount = getShapeCount(nodes);
    return (Object.keys(shapeCount) as TShape[]).every(
      (shape: TShape) => shapeCount[shape] <= LIMIT_BY_SHAPE
    );
  };

  const loadFromFile = (file: File): Promise<IImportResult> =>
    new Promise((resolve) => {
      const reader = new FileReader();

      reader.onload = (event) => {
        try {
          const content = event.target?.result as string;
          const jsonData = JSON.parse(content);

          // Валидация формата
          if (!validateDiagramData(jsonData)) {
            resolve({
              success: false,
              error: 'Некорректный формат файла',
            });
            return;
          }

          // Валидация количества фигур
          if (!validateShapeCount(jsonData.nodes)) {
            resolve({
              success: false,
              error: `Слишком много одного типа фигуры в файле. Текущий лимит - ${LIMIT_BY_SHAPE}.`,
            });
            return;
          }

          clearDiagram();
          setDiagramData({ nodes: jsonData.nodes, edges: jsonData.edges });

          resolve({ success: true });
        } catch (error) {
          const errorMessage =
            error instanceof Error ? error.message : 'Неизвестная ошибка';
          resolve({
            success: false,
            error: `Ошибка при парсинге файла: ${errorMessage}`,
          });
        }
      };

      reader.onerror = () => {
        resolve({
          success: false,
          error: 'Ошибка при чтении файла',
        });
      };

      reader.readAsText(file);
    });

  const importDiagram = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';

    input.onchange = async (event) => {
      const file = (event.target as HTMLInputElement).files?.[0];

      if (!file) return;

      const result = await loadFromFile(file);

      if (!result.success) {
        alert(result.error || 'Ошибка при импорте');
      }
    };

    input.click();
  };

  return importDiagram;
};
