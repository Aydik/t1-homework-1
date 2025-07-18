import type { FC } from 'react';
import { Typography } from 'shared/ui/Typography';
import styles from './index.module.scss';
import { TaskTracker } from 'widgets/TaskTracker';

export const IndexPage: FC = () => {
  return (
    <div className={styles.indexPage}>
      <Typography type="h1" variant="Header/H1" className={styles.title}>
        Трекер задач
      </Typography>
      <TaskTracker />
    </div>
  );
};
