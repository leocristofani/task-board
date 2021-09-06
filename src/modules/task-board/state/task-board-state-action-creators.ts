import {
  CreateTaskPayload,
  TaskBoardStateAction,
  TaskBoardStateFilters,
  UpdateTaskPayload,
} from "./task-board-state-types";

const makeTaskBoardStateActionCreators = (
  dispatch: (action: TaskBoardStateAction) => void
) => ({
  create: (payload: CreateTaskPayload) => dispatch({ type: "create", payload }),

  update: (payload: UpdateTaskPayload) => dispatch({ type: "update", payload }),

  delete: (taskId: string) => dispatch({ type: "delete", payload: taskId }),

  setFilters: (payload: TaskBoardStateFilters) =>
    dispatch({ type: "filter", payload }),

  toggleExpanded: () => dispatch({ type: "toggleExpanded" }),
});

export default makeTaskBoardStateActionCreators;
