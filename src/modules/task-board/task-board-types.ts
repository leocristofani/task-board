export type TaskPriority = "high" | "medium" | "low";

export type TaskProgress = "todo" | "inProgress" | "inReview" | "done";

export interface Task {
  id: string;
  title: string;
  description: string;
  priority: TaskPriority;
  progress: TaskProgress;
  updatedAt: number;
  createdAt: number;
}
