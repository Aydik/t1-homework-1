export type Category = 'Bug' | 'Feature' | 'Documentation' | 'Refactor' | 'Test';
export const statuses = ['To Do', 'In Progress', 'Done'] as const;
export type Status = (typeof statuses)[number];
export type Priority = 'Low' | 'Medium' | 'High';

export interface Task {
  id: string;
  title: string;
  description?: string;
  category: Category;
  status: Status;
  priority: Priority;
}
