import type { FC } from 'react';
import { TaskList } from 'features/TaskList';
import { Typography } from 'shared/ui/Typography';
import styles from './index.module.scss';

export const IndexPage: FC = () => {
  return (
    <div className={styles.indexPage}>
      <Typography type="h1" variant="Header/H1" className={styles.title}>
        Трекер задач
      </Typography>
      <TaskList />
    </div>
  );
};
