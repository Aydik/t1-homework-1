import React from 'react';
import { useTask } from 'app/context/TaskContext';
import styles from './index.module.scss';
import { statuses, type Status, type Task } from 'entities/TaskItem/model/types.ts';
import { StatusColumn } from 'src/features/TaskList/ui/StatusColumn';

export const TaskList: React.FC = () => {
  const { tasks } = useTask();

  const tasksByStatus = statuses.reduce(
    (acc, status) => {
      acc[status] = tasks.filter((task) => task.status === status);
      return acc;
    },
    {} as Record<Status, Task[]>,
  );

  return (
    <div className={styles.grid}>
      {statuses.map((status) => (
        <StatusColumn key={status} title={status} tasks={tasksByStatus[status]} />
      ))}
    </div>
  );
};
