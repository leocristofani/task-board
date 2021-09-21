import { useContext } from "react";

import { TasksStateContext } from "./tasks-state-provider";

export default function useTasksState() {
  return useContext(TasksStateContext);
}
