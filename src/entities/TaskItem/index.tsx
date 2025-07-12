import { type FC } from 'react';
import { Tag, Button } from '@admiral-ds/react-ui';
import type { Task } from './model/types';
import styles from './index.module.scss';
import { Typography } from 'shared/ui/Typography';

interface Props {
  task: Task;
}

export const TaskItem: FC<Props> = ({ task }) => {
  return (
    <div className={styles.card}>
      <div>
        <Typography type="p" variant="Main/S" className={styles.title}>
          {task.title}
        </Typography>
        {task.description && (
          <Typography type="p" variant="Additional/XS" className={styles.description}>
            {task.description}
          </Typography>
        )}
        <div className={styles.tagGroup}>
          <Tag dimension="s" kind="neutral">
            Категория: {task.category}
          </Tag>
          <Tag dimension="s" kind="neutral">
            Статус: {task.status}
          </Tag>
          <Tag dimension="s" kind="neutral">
            Приоритет: {task.priority}
          </Tag>
        </div>
        <Button dimension="s" appearance="tertiary" onClick={() => console.log(task)}>
          Редактировать
        </Button>
      </div>
    </div>
  );
};
