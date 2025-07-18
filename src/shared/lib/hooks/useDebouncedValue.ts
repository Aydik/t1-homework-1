import { useEffect, useState } from 'react';

/**
 * Кастомный хук для создания "задержанного" (debounced) значения.
 * Возвращает значение с задержкой, обновляясь только после того, как исходное значение перестанет меняться в течение указанного времени.
 *
 * @template T - Тип значения
 * @param {T} value - Входное значение, для которого нужен debounce
 * @param {number} delay - Задержка в миллисекундах
 * @returns {T} - Задержанное значение, обновляющееся после паузы в изменениях
 */
export const useDebouncedValue = <T>(value: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debouncedValue;
};
