import generateId from "../../../shared/utils";
import { TaskBoardState, TaskBoardStateAction } from "./task-board-state-types";

export const initialState: TaskBoardState = {
  data: {},
  meta: {
    expanded: false,
    filters: {},
  },
};

export default function taskBoardStateReducer(
  state = initialState,
  action: TaskBoardStateAction
): TaskBoardState {
  switch (action.type) {
    case "create": {
      const id = generateId();
      const now = Date.now();

      return {
        ...state,
        [id]: { id, createdAt: now, updatedAt: now, ...action.payload },
      };
    }

    case "update": {
      const { id, ...restPayload } = action.payload;

      return {
        ...state,
        [id]: { ...state.data[id], ...restPayload, updatedAt: Date.now() },
      };
    }

    case "delete": {
      const newState = { ...state };

      delete newState.data[action.payload];

      return newState;
    }

    default:
      return state;
  }
}
