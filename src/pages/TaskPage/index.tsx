import type { FC } from 'react';
import { useParams } from 'react-router-dom';
import { TaskDetails } from 'features/TaskDetails';
import styles from './index.module.scss';

export const TaskPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <div className={styles.taskPage}>
      <TaskDetails id={id as string} />
    </div>
  );
};
