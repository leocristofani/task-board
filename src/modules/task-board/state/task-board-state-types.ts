import { Task, TaskPriority, TaskProgress } from "../task-board-types";

export interface TaskBoardStateFilters {
  priority?: TaskPriority;
  progress?: TaskProgress;
}

export interface TaskBoardState {
  data: {
    [taskId: string]: Task;
  };
  meta: {
    expanded: boolean;
    filters: TaskBoardStateFilters;
  };
}

export type CreateTaskPayload = Pick<
  Task,
  "title" | "description" | "priority" | "progress"
>;

export type UpdateTaskPayload = Pick<
  Task,
  "id" | "title" | "description" | "priority" | "progress"
>;

export type TaskBoardStateAction =
  | { type: "create"; payload: CreateTaskPayload }
  | { type: "update"; payload: UpdateTaskPayload }
  | { type: "delete"; payload: string }
  | { type: "filter"; payload: TaskBoardStateFilters }
  | { type: "toggleExpanded" };
