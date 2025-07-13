import { createContext, useContext, useState } from 'react';
import type { ReactNode, Dispatch, SetStateAction } from 'react';
import type { Task } from 'entities/TaskItem/model/types';
import { initialTasks } from './initialTasks.ts';

interface TaskContextValue {
  tasks: Task[];
  setTasks: Dispatch<SetStateAction<Task[]>>;
  updateTaskById: (id: string, updatedTask: Partial<Task>) => void;
}

const TaskContext = createContext<TaskContextValue | undefined>(undefined);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const updateTaskById = (id: string, updatedTask: Partial<Task>) => {
    setTasks((prev) => prev.map((task) => (task.id === id ? { ...task, ...updatedTask } : task)));
  };

  return (
    <TaskContext.Provider value={{ tasks, setTasks, updateTaskById }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTask = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTask must be used within TaskProvider');
  }
  return context;
};
