import { type FC } from 'react';
import { Tag, Button } from '@admiral-ds/react-ui';
import type { Task } from 'shared/model/types';
import styles from './index.module.scss';
import { Typography } from 'shared/ui/Typography';
import { useNavigate } from 'react-router-dom';
import { Icon } from 'shared/ui/Icon/Icon.tsx';
import { formatDate } from 'shared/lib/utils/formatDate.ts';

interface Props {
  task: Task;
  onDelete: (id: string) => void;
}

/**
 * Компонент для отображения задачи с возможностью редактирования и удаления.
 * @param {Props} props - Свойства компонента
 * @returns JSX элемент задачи
 */
export const TaskItem: FC<Props> = ({ task, onDelete }: Props) => {
  const navigate = useNavigate();

  /**
   * Обработчик клика для перехода к редактированию задачи.
   * Использует react-router для навигации на страницу редактирования задачи.
   */
  const handleEdit = () => {
    navigate(`task/${task.id}`);
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
        <Typography type="p" variant="Caption/XS" className={styles.createdAt}>
          {formatDate(task.createdAt)}
        </Typography>
        <div className={styles.controlBlock}>
          <Button dimension="s" appearance="tertiary" onClick={handleEdit}>
            Редактировать
          </Button>
          <button className={styles.deleteButton} onClick={() => onDelete(task.id)}>
            <Icon name="delete" />
          </button>
        </div>
      </div>
    </div>
  );
};
