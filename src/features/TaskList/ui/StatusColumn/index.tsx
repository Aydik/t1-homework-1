import type { FC } from 'react';
import type { Task } from 'entities/TaskItem/model/types.ts';
import { TaskItem } from 'entities/TaskItem';
import styles from './index.module.scss';
import { Typography } from 'shared/ui/Typography';
import { Divider } from '@admiral-ds/react-ui';

interface Props {
  title: string;
  tasks: Task[];
}

export const StatusColumn: FC<Props> = ({ title, tasks }) => {
  return (
    <div className={styles.statusColumn}>
      <Typography type="h2" variant="Header/H2" className={styles.title}>
        {title}
      </Typography>
      <Divider />
      <ul className={styles.taskList}>
        {tasks.map((task) => (
          <li key={task.id}>
            <TaskItem key={task.id} task={task} />
          </li>
        ))}
      </ul>
    </div>
  );
};
