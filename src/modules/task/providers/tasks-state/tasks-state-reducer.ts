import { generateId } from "../../../../shared/shared-utils";
import {
  CreateTaskPayload,
  TasksState,
  TasksStateAction,
  UpdateTaskPayload,
} from "./tasks-state-types";

export const initialState: TasksState = {};

export default function tasksStateReducer(
  state = initialState,
  action: TasksStateAction
): TasksState {
  switch (action.type) {
    case "create":
      return createTask(state, action.payload);

    case "update":
      return updateTask(state, action.payload);

    case "delete":
      return deleteTask(state, action.payload);
    default:
      return state;
  }
}

export function createTask(state: TasksState, input: CreateTaskPayload) {
  const id = generateId();
  const now = Date.now();

  const newTask = {
    id,

    ...input,

    createdAt: now,
    updatedAt: now,
  };

  return { ...state, [id]: newTask };
}

export function updateTask(state: TasksState, input: UpdateTaskPayload) {
  const { id, ...restInput } = input;

  const updatedTask = {
    ...state[id],

    ...restInput,

    updatedAt: Date.now(),
  };

  return { ...state, [id]: updatedTask };
}

export function deleteTask(state: TasksState, id: string) {
  const newState = { ...state };

  delete newState[id];

  return newState;
}
