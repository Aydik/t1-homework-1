import {
  initTasks,
  getTasks,
  getTaskById,
  updateTask,
  createTask,
  deleteTask,
  type TaskFilters,
} from './fakeApi.ts';
import type { Task } from 'shared/model/types.ts';

type Method = 'GET' | 'POST' | 'DELETE' | 'PATCH';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Универсальный обработчик имитации REST API
 * @param method HTTP метод (GET, POST, PATCH, DELETE)
 * @param url URL вида /tasks или /tasks/:id
 * @param body Тело запроса (если есть)
 * @param filters Фильтры для получения всех задач
 * @returns Результат работы API или ошибка, если маршрут не найден
 */
export const fakeAPIRequest = async (
  method: Method,
  url: string,
  body?: Omit<Task, 'id' | 'createdAt'>,
  filters?: TaskFilters,
): Promise<Task | Task[] | boolean> => {
  await delay(300);

  const cleanUrl = url.replace(/^\/+|\/+$/g, ''); // убирает ведущие и конечные /
  const urlSegments = cleanUrl.split('/');

  if (urlSegments[0] !== 'tasks' || urlSegments.length > 2) {
    throw new Error(`Маршрут [${method} ${url}] не найден`);
  }

  switch (method) {
    case 'GET':
      if (urlSegments.length === 2) {
        return getTaskById(urlSegments[1]);
      }
      return getTasks(filters);

    case 'POST':
      if (urlSegments.length === 2 && urlSegments[1] === 'init') {
        return initTasks();
      }
      if (body) {
        return createTask(body);
      }
      throw new Error('Отсутствует тело запроса');

    case 'PATCH':
      if (urlSegments.length === 2 && body) {
        return updateTask(urlSegments[1], body);
      }
      throw new Error('Отсутствует тело запроса');

    case 'DELETE':
      if (urlSegments.length === 2) {
        return deleteTask(urlSegments[1]);
      }
      break;
  }

  throw new Error(`Маршрут [${method} ${url}] не найден`);
};
