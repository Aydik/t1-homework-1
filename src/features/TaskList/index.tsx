import { type FC, useEffect, useState } from 'react';
import styles from './index.module.scss';
import {
  STATUS_VALUES,
  PRIORITY_VALUES,
  CATEGORY_VALUES,
  type Status,
  type Priority,
  type Category,
  type Task,
} from 'shared/model/types';
import { StatusColumn } from 'features/TaskList/ui/StatusColumn';
import { fakeAPIRequest } from 'shared/lib/api/fakeAPIInstance.ts';
import { useSearchParams } from 'react-router-dom';
import type { TaskFilters } from 'shared/lib/api/fakeApi.ts';

/**
 * Компонент отображения списка задач, распределённых по статусам.
 *
 * Извлекает задачи с сервера через fakeAPIRequest с применением фильтров из URL-параметров.
 * Группирует задачи по статусам и отображает их в отдельных колонках.
 * Позволяет удалять задачи.
 *
 * @returns JSX элемент списка задачи
 */
export const TaskList: FC = () => {
  const [searchParams] = useSearchParams();

  const [tasks, setTasks] = useState<Task[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  /**
   * Эффект для загрузки задач при изменении параметров поиска.
   * Формирует фильтры из query параметров и получает задачи с API.
   * В случае ошибки устанавливает ошибку в состояние.
   */
  useEffect(() => {
    setLoading(true);
    const priority = searchParams.get('priority');
    const category = searchParams.get('category');

    const filters: TaskFilters = {
      q: searchParams.get('q') || undefined,
      priority: PRIORITY_VALUES.includes(priority as Priority) ? (priority as Priority) : undefined,
      category: CATEGORY_VALUES.includes(category as Category) ? (category as Category) : undefined,
    };

    fakeAPIRequest('GET', 'tasks', undefined, filters)
      .then((res) => res as Task[])
      .then((tasks: Task[]) => setTasks(tasks))
      .catch(() => setError(new Error('Ошибка загрузки задач')))
      .finally(() => setLoading(false));
  }, [searchParams]);

  /**
   * Обработчик удаления задачи.
   * Вызывает fakeAPIRequest для удаления задачи по ID,
   * после успешного удаления обновляет локальное состояние задач,
   * фильтруя удалённую задачу.
   *
   * @param {string} id - Идентификатор задачи для удаления
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
          isLoading={loading}
        />
      ))}
    </div>
  );
};
