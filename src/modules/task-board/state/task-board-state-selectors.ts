import { Task } from "../task-board-types";
import {
  TaskBoardStateFilters,
  TaskBoardState,
} from "./task-board-state-types";

const makeTaskBoardStateSelectors = (state: TaskBoardState) => ({
  getMany: (filters: TaskBoardStateFilters): Task[] =>
    Object.values(state)
      .filter((task: Task) =>
        Object.keys(filters).reduce(
          (_: boolean, filter: string) =>
            task[filter as keyof Task] ===
            filters[filter as keyof TaskBoardStateFilters],
          true
        )
      )
      .sort((a, b) => {
        if (a.createdAt === b.createdAt) {
          return 0;
        }

        return a.createdAt > b.createdAt ? 1 : -1;
      }),

  getOne: (taskId: string) => state[taskId],
});

export default makeTaskBoardStateSelectors;
