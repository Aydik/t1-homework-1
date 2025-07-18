import { type FC } from 'react';
import styles from './index.module.scss';
import { TaskFilters } from 'features/TaskFilters';
import { TaskList } from 'features/TaskList';
import { Button, Divider } from '@admiral-ds/react-ui';
import { useNavigate } from 'react-router-dom';
import { fakeAPIRequest } from 'shared/lib/api/fakeAPIInstance.ts';

export const TaskTracker: FC = () => {
  const navigate = useNavigate();

  /**
   * Обработчик нажатия на кнопку создания новой задачи.
   * Переходит на страницу создания задачи.
   */
  const handleCreateTask = () => {
    navigate('/task/new');
  };

  /**
   * Обработчик нажатия на кнопку заполнения
   * mock-данными.
   */
  const handleInitMock = () => {
    fakeAPIRequest('POST', 'tasks/init').then(() => navigate('/'));
  };

  return (
    <div className={styles.taskTracker}>
      <Divider />
      <div className={styles.control}>
        <TaskFilters />
        <div className={styles.buttons}>
          <Button dimension="s" appearance="secondary" onClick={handleInitMock}>
            Заполнить mock-данными
          </Button>
          <Button dimension="s" appearance="primary" onClick={handleCreateTask}>
            Создать задачу
          </Button>
        </div>
      </div>
      <Divider />
      <TaskList />
    </div>
  );
};
