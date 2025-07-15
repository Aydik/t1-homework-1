import type { FC } from 'react';
import { useParams } from 'react-router-dom';
import { TaskForm } from 'features/TaskForm';
import styles from './index.module.scss';

export const TaskPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <div className={styles.taskPage}>
      {id !== 'new' ? <TaskForm id={id as string} /> : <TaskForm />}
    </div>
  );
};
