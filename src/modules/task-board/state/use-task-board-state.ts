import { useContext } from "react";

import { TaskBoardStateContext } from "./task-board-state-provider";

export default function useTaskBoardState() {
  return useContext(TaskBoardStateContext);
}
