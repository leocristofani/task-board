import { TaskBoardStateProvider } from "./state/task-board-state-provider";
import TaskBoardActions from "./view/task-board-actions/task-board-actions";
import TaskBoardTable from "./view/task-board-table/task-board-table";

export default function TaskBoard() {
  return (
    <TaskBoardStateProvider>
      <TaskBoardActions />
      <TaskBoardTable />
    </TaskBoardStateProvider>
  );
}
