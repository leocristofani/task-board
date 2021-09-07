import React, { useReducer } from "react";

import taskBoardStateReducer, {
  initialState,
} from "./task-board-state-reducer";
import { TaskBoardStateAction } from "./task-board-state-types";
import makeTaskBoardStateSelectors from "./task-board-state-selectors";
import makeTaskBoardStateActionCreators from "./task-board-state-action-creators";

const initialValue = {
  ...makeTaskBoardStateSelectors(initialState),
  ...makeTaskBoardStateActionCreators((_: TaskBoardStateAction) => {}),
};

export const TaskBoardStateContext = React.createContext(initialValue);

interface TaskBoardStateProviderProps {
  children: React.ReactNode;
}

export function TaskBoardStateProvider(props: TaskBoardStateProviderProps) {
  const [state, dispatch] = useReducer(taskBoardStateReducer, initialState);

  return (
    <TaskBoardStateContext.Provider
      value={{
        ...makeTaskBoardStateSelectors(state),
        ...makeTaskBoardStateActionCreators(dispatch),
      }}
    >
      {props.children}
    </TaskBoardStateContext.Provider>
  );
}
