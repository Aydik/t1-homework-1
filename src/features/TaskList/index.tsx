import React from 'react';
import styles from './index.module.scss';
import { STATUS_VALUES, type Status, type Task } from 'entities/TaskItem/model/types.ts';
import { StatusColumn } from 'features/TaskList/ui/StatusColumn';
import { useSelector } from 'react-redux';
import type { RootState } from 'app/store';
import { Button } from '@admiral-ds/react-ui';
import { useNavigate } from 'react-router-dom';

/**
 * Компонент отображения списка задач, распределённых по статусам.
 *
 * Извлекает задачи из Redux-состояния, группирует их по статусу
 * и рендерит колонки с задачами для каждого статуса.
 *
 * Также содержит кнопку для создания новой задачи.
 *
 * @returns JSX элемент списка задач
 */
export const TaskList: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.task.tasks);

  const navigate = useNavigate();

  /**
   * Обработчик нажатия на кнопку создания новой задачи.
   * Переходит на страницу создания задачи.
   */
  const handleCreateTask = () => {
    navigate('/task/new');
  };

  /**
   * Группировка задач по статусам.
   * Создаёт объект, где ключ — статус задачи,
   * а значение — массив задач с этим статусом.
   */
  const tasksByStatus = STATUS_VALUES.reduce(
    (acc, status) => {
      acc[status] = tasks.filter((task) => task.status === status);
      return acc;
    },
    {} as Record<Status, Task[]>,
  );

  return (
    <div className={styles.taskList}>
      <Button dimension="s" appearance="secondary" onClick={handleCreateTask}>
        Создать задачу
      </Button>
      <div className={styles.grid}>
        {STATUS_VALUES.map((status) => (
          <StatusColumn key={status} title={status} tasks={tasksByStatus[status]} />
        ))}
      </div>
    </div>
  );
};
