export const categories = ['Bug', 'Feature', 'Documentation', 'Refactor', 'Test'] as const;
export type Category = (typeof categories)[number];
export const statuses = ['To Do', 'In Progress', 'Done'] as const;
export type Status = (typeof statuses)[number];
export const priorities = ['Low', 'Medium', 'High'] as const;
export type Priority = (typeof priorities)[number];

export interface Task {
  id: string;
  title: string;
  description?: string;
  category: Category;
  status: Status;
  priority: Priority;
}
