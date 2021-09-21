import { Task } from "../../task-types";

export interface TasksState {
  [taskId: string]: Task;
}

export type CreateTaskPayload = Pick<
  Task,
  "title" | "description" | "priority" | "progress"
>;

export type UpdateTaskPayload = Pick<
  Task,
  "id" | "title" | "description" | "priority" | "progress"
>;

export type TasksStateAction =
  | { type: "create"; payload: CreateTaskPayload }
  | { type: "update"; payload: UpdateTaskPayload }
  | { type: "delete"; payload: Task["id"] };
