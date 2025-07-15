import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Task } from 'entities/TaskItem/model/types.ts';
import { v4 as uuidv4 } from 'uuid';
import { initialTasks } from 'entities/TaskItem/model/initialTasks.ts';

interface TasksState {
  tasks: Task[];
}

const loadTasks = (): Task[] => {
  const data = localStorage.getItem('tasks');
  return data ? JSON.parse(data) : [];
};

const saveTasks = (tasks: Task[]) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const initialState: TasksState = {
  tasks: loadTasks().length > 0 ? loadTasks() : initialTasks,
};

const tasksSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    updateTaskById(
      state,
      action: PayloadAction<{ id: string; updatedTask: Omit<Task, 'id' | 'createdAt'> }>,
    ) {
      const { id, updatedTask } = action.payload;
      const taskIndex = state.tasks.findIndex((task) => task.id === id);

      if (taskIndex !== -1) {
        state.tasks[taskIndex] = {
          ...state.tasks[taskIndex],
          ...updatedTask,
        };
        saveTasks(state.tasks);
      }
    },
    deleteTaskById(state, action: PayloadAction<string>) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      saveTasks(state.tasks);
    },
    createTask(state, action: PayloadAction<Omit<Task, 'id' | 'createdAt'>>) {
      const newTask: Task = {
        id: uuidv4(),
        createdAt: new Date(),
        ...action.payload,
      };
      state.tasks.push(newTask);
      saveTasks(state.tasks);
    },
  },
});

export const { updateTaskById, deleteTaskById, createTask } = tasksSlice.actions;
export default tasksSlice.reducer;
