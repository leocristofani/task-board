import React, { useReducer, createContext } from "react";

import { TasksStateAction } from "./tasks-state-types";
import makeTasksStateSelectors from "./tasks-state-selectors";
import makeTasksStateActionss from "./tasks-state-actions";
import tasksStateReducer, { initialState } from "./tasks-state-reducer";

const initialValue = {
  ...makeTasksStateSelectors(initialState),
  ...makeTasksStateActionss((_: TasksStateAction) => {}),
};

export const TasksStateContext = createContext(initialValue);

interface TasksStateProviderProps {
  children: React.ReactNode;
}

export function TasksStateProvider(props: TasksStateProviderProps) {
  const [state, dispatch] = useReducer(tasksStateReducer, initialState);

  return (
    <TasksStateContext.Provider
      value={{
        ...makeTasksStateSelectors(state),
        ...makeTasksStateActionss(dispatch),
      }}
    >
      {props.children}
    </TasksStateContext.Provider>
  );
}
