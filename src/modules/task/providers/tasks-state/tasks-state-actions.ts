import {
  UpdateTaskPayload,
  CreateTaskPayload,
  TasksStateAction,
} from "./tasks-state-types";

export default function makeTasksStateActions(
  dispatch: (action: TasksStateAction) => void
) {
  return {
    create: (payload: CreateTaskPayload) =>
      dispatch({
        type: "create",
        payload,
      }),

    update: (payload: UpdateTaskPayload) =>
      dispatch({
        type: "update",
        payload,
      }),

    delete: (taskId: string) =>
      dispatch({
        type: "delete",
        payload: taskId,
      }),
  };
}
