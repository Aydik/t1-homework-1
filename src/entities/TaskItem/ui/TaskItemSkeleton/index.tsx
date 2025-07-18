import { type FC, useMemo } from 'react';
import styles from './index.module.scss';

/**
 * Скелетон-компонент задачи.
 * Используется как заглушка при загрузке списка задач.
 * Высота блока генерируется случайным образом для создания эффекта разнообразия.
 *
 * @returns JSX-элемент скелетона задачи
 */
export const TaskItemSkeleton: FC = () => {
  const randomHeight = useMemo(() => {
    return Math.floor(Math.random() * (200 - 100 + 1)) + 100;
  }, []);
  return <div className={styles.skeleton} style={{ height: randomHeight }} />;
};
