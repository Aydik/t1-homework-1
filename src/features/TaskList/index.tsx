import { type FC, useEffect, useState } from 'react';
import styles from './index.module.scss';
import { STATUS_VALUES, type Status, type Task } from 'shared/model/types';
import { StatusColumn } from 'features/TaskList/ui/StatusColumn';
import { fakeAPIRequest } from 'shared/lib/api/fakeAPIInstance.ts';

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
export const TaskList: FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fakeAPIRequest('GET', 'tasks')
      .then((res) => res as Task[])
      .then((tasks: Task[]) => setTasks(tasks))
      .catch(() => setError(new Error('Ошибка загрузки задач')));
  }, []);

  /**
   * Обработчик клика для удаления задачи.
   * Вызывает action redux для удаления задачи по ID.
   */
  const onDelete = (id: string) => {
    fakeAPIRequest('DELETE', `tasks/${id}`)
      .then(() => setTasks((tasks) => tasks.filter((task) => task.id !== id)))
      .catch((error) => console.error((error as Error).message));
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

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div className={styles.taskList}>
      {STATUS_VALUES.map((status) => (
        <StatusColumn
          key={status}
          title={status}
          tasks={tasksByStatus[status]}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};
