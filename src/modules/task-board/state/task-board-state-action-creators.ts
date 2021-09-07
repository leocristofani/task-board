import {
  UpdateTaskPayload,
  CreateTaskPayload,
  TaskBoardStateAction,
} from "./task-board-state-types";

const makeTaskBoardStateActionCreators = (
  dispatch: (action: TaskBoardStateAction) => void
) => ({
  create: (payload: CreateTaskPayload) => dispatch({ type: "create", payload }),

  update: (payload: UpdateTaskPayload) => dispatch({ type: "update", payload }),

  delete: (taskId: string) => dispatch({ type: "delete", payload: taskId }),
});

export default makeTaskBoardStateActionCreators;
