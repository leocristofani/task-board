import { Task, TaskFilters } from "../../task-types";
import { TasksState } from "./tasks-state-types";

export default function makeTasksStateSelector(state: TasksState) {
  return {
    getMany: (filters: TaskFilters): Task[] =>
      Object.values(state)
        .filter((task: Task) =>
          Object.keys(filters)
            /**
             * Filter out undefined filters
             */
            .filter((filter) => !!filters[filter as keyof TaskFilters])
            /**
             * Map to boolean array by comparing filters and task properties
             */
            .map(
              (filter) =>
                task[filter as keyof Task] ===
                filters[filter as keyof TaskFilters]
            )
            /**
             * Either all true of false
             */
            .reduce((acc, cur) => (!acc ? acc : cur), true)
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
