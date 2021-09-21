import { Task, TaskFilters } from "../../task-types";
import { TasksState } from "./tasks-state-types";

export default function makeTasksStateSelector(state: TasksState) {
  return {
    getMany: (filters: TaskFilters): Task[] =>
      Object.values(state)
        .filter((task: Task) =>
          Object.keys(filters).reduce(
            (_: boolean, filter: string) =>
              task[filter as keyof Task] ===
              filters[filter as keyof TaskFilters],
            true
          )
        )
        .sort(byCreatedAt),

    getOne: (taskId: string) => state[taskId],
  };
}

/**
 * Task.createdAt comparator
 */
function byCreatedAt(a: Task, b: Task) {
  if (a.createdAt === b.createdAt) {
    return 0;
  }

  return a.createdAt > b.createdAt ? 1 : -1;
}
