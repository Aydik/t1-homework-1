import React from 'react';
import styles from './index.module.scss';
import { STATUS_VALUES, type Status, type Task } from 'entities/TaskItem/model/types.ts';
import { StatusColumn } from 'src/features/TaskList/ui/StatusColumn';
import { useSelector } from 'react-redux';
import type { RootState } from 'app/store';

export const TaskList: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.task.tasks);

  const tasksByStatus = STATUS_VALUES.reduce(
    (acc, status) => {
      acc[status] = tasks.filter((task) => task.status === status);
      return acc;
    },
    {} as Record<Status, Task[]>,
  );

  return (
    <div className={styles.grid}>
      {STATUS_VALUES.map((status) => (
        <StatusColumn key={status} title={status} tasks={tasksByStatus[status]} />
      ))}
    </div>
  );
};
