import type { FC } from 'react';
import type { Task } from 'shared/model/types';
import { TaskItem } from 'entities/TaskItem';
import styles from './index.module.scss';
import { Typography } from 'shared/ui/Typography';
import { Divider } from '@admiral-ds/react-ui';

interface Props {
  title: string;
  tasks: Task[];
  onDelete: (id: string) => void;
}

/**
 * Компонент колонки статуса задач.
 * Отображает заголовок и список задач, относящихся с данным статусом.
 *
 * @param {Props} props - Свойства компонента
 * @returns JSX элемент колонки со списком задач
 */
export const StatusColumn: FC<Props> = ({ title, tasks, onDelete }: Props) => {
  return (
    <div className={styles.statusColumn}>
      <Typography type="h2" variant="Header/H2" className={styles.title}>
        {title}
      </Typography>
      <Divider />
      <ul className={styles.taskList}>
        {tasks.map((task) => (
          <li key={task.id}>
            <TaskItem task={task} onDelete={onDelete} />
          </li>
        ))}
      </ul>
    </div>
  );
};
