import type { FC } from 'react';
import type { Task } from 'shared/model/types';
import { TaskItem } from 'entities/TaskItem';
import styles from './index.module.scss';
import { Typography } from 'shared/ui/Typography';
import { Divider } from '@admiral-ds/react-ui';
import { TaskItemSkeleton } from 'entities/TaskItem/ui/TaskItemSkeleton';

interface Props {
  title: string;
  tasks: Task[];
  onDelete: (id: string) => void;
  isLoading?: boolean;
}

/**
 * Компонент колонки, отображающей задачи с одним статусом.
 * Рендерит заголовок и список задач с кнопками управления.
 *
 * @param {Props} props - Свойства компонента
 * @param {string} props.title - Заголовок колонки (статус задач)
 * @param {Task[]} props.tasks - Список задач для отображения
 * @param {(id: string) => void} props.onDelete - Обработчик удаления задачи,
 * передается в компонент задачи
 * @returns JSX элемент колонки задач
 */
export const StatusColumn: FC<Props> = ({ title, tasks, onDelete, isLoading }: Props) => {
  return (
    <div className={styles.statusColumn}>
      <Typography type="h2" variant="Header/H2" className={styles.title}>
        {title}
      </Typography>
      <Divider />
      <ul className={styles.taskList}>
        {isLoading
          ? Array.from({ length: 5 }).map((_, index) => (
              <li key={index}>
                <TaskItemSkeleton key={index} />
              </li>
            ))
          : tasks.map((task) => (
              <li key={task.id}>
                <TaskItem task={task} onDelete={onDelete} />
              </li>
            ))}
      </ul>
    </div>
  );
};
