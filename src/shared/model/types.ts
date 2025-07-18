export const CATEGORY_VALUES = ['Bug', 'Feature', 'Documentation', 'Refactor', 'Test'] as const;
export type Category = (typeof CATEGORY_VALUES)[number];
export const STATUS_VALUES = ['To Do', 'In Progress', 'Done'] as const;
export type Status = (typeof STATUS_VALUES)[number];
export const PRIORITY_VALUES = ['Low', 'Medium', 'High'] as const;
export type Priority = (typeof PRIORITY_VALUES)[number];

export interface Task {
  id: string;
  title: string;
  description?: string;
  category: Category;
  status: Status;
  priority: Priority;
  createdAt: Date;
}
