import { type FC } from 'react';
import { Tag, Button } from '@admiral-ds/react-ui';
import type { Task } from './model/types';
import styles from './index.module.scss';
import { Typography } from 'shared/ui/Typography';
import { useNavigate } from 'react-router-dom';
import { useTask } from 'app/context/TaskContext.tsx';

interface Props {
  id: string;
}

export const TaskDetails: FC<Props> = ({ id }) => {
  const { tasks } = useTask();
  const task = tasks.find((task) => task.id === id);

  const navigate = useNavigate();
  const handleCancel = () => {
    navigate('/');
  };

  if (!task) {
    return (
      <Typography type="h1" variant="Header/H1">
        Задача не найдена
      </Typography>
    );
  }
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
        <Button dimension="s" appearance="tertiary" onClick={handleCancel}>
          Отменить
        </Button>
      </div>
    </div>
  );
};
