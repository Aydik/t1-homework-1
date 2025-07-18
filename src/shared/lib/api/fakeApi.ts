import type { Task } from 'shared/model/types.ts';
import { v4 as uuidv4 } from 'uuid';
import { initialTasks } from 'shared/lib/api/initialTasks.ts';

/**
 * Локальная утилита для работы с localStorage
 */
const storage = {
  get(): Task[] {
    const raw = localStorage.getItem('tasks');
    return raw ? JSON.parse(raw) : [];
  },
  set(tasks: Task[]) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  },
};

/**
 * Инициализация мок-данных
 */
export const initTasks = (): Task[] => {
  storage.set(initialTasks);
  return initialTasks;
};

/**
 * Получение всех задач
 */
export const getTasks = (): Task[] => {
  return storage.get();
};

/**
 * Получение задачи по ID
 * @throws Error если задача не найдена
 */
export const getTaskById = (id: string): Task => {
  const tasks = getTasks();
  const task = tasks.find((task) => task.id === id);
  if (!task) {
    throw new Error(`Задача с id "${id}" не найдена`);
  }
  return task;
};

/**
 * Создание новой задачи
 */
export const createTask = (task: Omit<Task, 'id' | 'createdAt'>): Task => {
  if (!task.title) {
    throw new Error('Название не может быть пустым');
  }
  const tasks = getTasks();
  const newTask: Task = { id: uuidv4(), createdAt: new Date(), ...task };
  tasks.push(newTask);
  storage.set(tasks);
  return newTask;
};

/**
 * Обновление задачи по ID
 * @throws Error если задача не найдена
 */
export const updateTask = (id: string, updates: Omit<Task, 'id' | 'createdAt'>): Task => {
  if (!updates.title) {
    throw new Error('Название не может быть пустым');
  }
  const tasks = getTasks();
  const index = tasks.findIndex((t) => t.id === id);
  if (index === -1) {
    throw new Error(`Не удалось обновить: задача с id "${id}" не найдена`);
  }

  const updated = { ...tasks[index], ...updates };
  tasks[index] = updated;
  storage.set(tasks);
  return updated;
};

/**
 * Удаление задачи по ID
 * @throws Error если задача не найдена
 */
export const deleteTask = (id: string): boolean => {
  const tasks = getTasks();
  const index = tasks.findIndex((task) => task.id === id);
  if (index === -1) {
    throw new Error(`Не удалось удалить: задача с id "${id}" не найдена`);
  }
  tasks.splice(index, 1);
  storage.set(tasks);
  return true;
};
