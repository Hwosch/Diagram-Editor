import type React from 'react';

/**
 * @prop title Тайтл кнопки.
 * @prop onClick Обработчик клика на кнопку.
 * @prop [disabled] Признак, что кнопка отключена.
 * @prop [variant] Вариант кнопки. (По умолчанию - default)
 */
interface IProps {
  title: string;
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  variant?: 'default' | 'danger';
}

const noop = () => {};

/** Кнопка тулбара. */
export const ToolbarButton: React.FC<IProps> = ({
  title,
  children,
  disabled,
  variant = 'default',
  onClick,
}) => {
  const base =
    'inline-flex items-center justify-center rounded-2xl p-2 transition';

  const enabledStyles =
    variant === 'danger'
      ? 'hover:bg-rose-50 active:scale-[0.97]'
      : 'hover:bg-slate-100 active:scale-[0.97]';

  const disabledStyles = 'opacity-40 cursor-not-allowed';

  return (
    <button
      onClick={disabled ? noop : onClick}
      disabled={disabled}
      className={`${base} ${disabled ? disabledStyles : enabledStyles}`}
      title={title}
    >
      {children}
    </button>
  );
};
