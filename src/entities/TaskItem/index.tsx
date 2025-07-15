import { type FC } from 'react';
import { Tag, Button } from '@admiral-ds/react-ui';
import type { Task } from './model/types';
import styles from './index.module.scss';
import { Typography } from 'shared/ui/Typography';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteTaskById } from 'entities/TaskItem/model/taskSlice.ts';
import { Icon } from 'shared/ui/Icon/Icon.tsx';

interface Props {
  task: Task;
}

export const TaskItem: FC<Props> = ({ task }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`task/${task.id}`);
  };
  const handleDelete = () => {
    dispatch(deleteTaskById(task.id));
  };
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
        <div className={styles.controlBlock}>
          <Button dimension="s" appearance="tertiary" onClick={handleEdit}>
            Редактировать
          </Button>
          <button className={styles.deleteButton} onClick={handleDelete}>
            <Icon name="delete" />
          </button>
        </div>
      </div>
    </div>
  );
};
