import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Task } from 'entities/TaskItem/model/types.ts';
import { v4 as uuidv4 } from 'uuid';

interface TasksState {
  tasks: Task[];
}

const initialState: TasksState = {
  tasks: [
    {
      id: '1',
      title: 'Исправить баг с логином',
      description: 'Проблема с повторным входом',
      category: 'Bug',
      status: 'In Progress',
      priority: 'High',
    },
    {
      id: '2',
      title: 'Добавить возможность восстановления пароля',
      description: 'Пользователи должны иметь возможность восстанавливать пароль через email',
      category: 'Feature',
      status: 'To Do',
      priority: 'Medium',
    },
    {
      id: '3',
      title: 'Обновить документацию по API',
      description: 'Добавить описание новых эндпоинтов',
      category: 'Documentation',
      status: 'Done',
      priority: 'Low',
    },
    {
      id: '4',
      title: 'Рефакторинг компонента профиля',
      description: 'Упростить логику и улучшить читаемость кода',
      category: 'Refactor',
      status: 'In Progress',
      priority: 'Medium',
    },
    {
      id: '5',
      title: 'Написать тесты для формы регистрации',
      description: 'Покрыть юнит-тестами все основные сценарии',
      category: 'Test',
      status: 'To Do',
      priority: 'High',
    },
    {
      id: '6',
      title: 'Исправить отображение кнопок на мобильных устройствах',
      category: 'Bug',
      status: 'To Do',
      priority: 'Medium',
    },
    {
      id: '7',
      title: 'Добавить темную тему',
      description: 'Реализовать переключение светлой и темной темы',
      category: 'Feature',
      status: 'In Progress',
      priority: 'High',
    },
    {
      id: '8',
      title: 'Обновить зависимости проекта',
      description: 'Обновить библиотеки до последних стабильных версий',
      category: 'Refactor',
      status: 'Done',
      priority: 'Low',
    },
  ],
};

const tasksSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    updateTaskById(state, action: PayloadAction<{ id: string; updatedTask: Omit<Task, 'id'> }>) {
      const { id, updatedTask } = action.payload;
      const taskIndex = state.tasks.findIndex((task) => task.id === id);

      if (taskIndex !== -1) {
        state.tasks[taskIndex] = {
          ...state.tasks[taskIndex],
          ...updatedTask,
        };
      }
    },
    deleteTaskById(state, action: PayloadAction<string>) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    createTask(state, action: PayloadAction<Omit<Task, 'id'>>) {
      const newTask: Task = {
        id: uuidv4(),
        ...action.payload,
      };
      state.tasks.push(newTask);
    },
  },
});

export const { updateTaskById, deleteTaskById, createTask } = tasksSlice.actions;
export default tasksSlice.reducer;
