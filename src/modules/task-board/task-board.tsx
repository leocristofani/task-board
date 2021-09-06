import { Switch, Route } from "react-router-dom";

import { TaskBoardStateProvider } from "./state/task-board-state-provider";
import CreateTaskModal from "./view/create-task-modal/create-task-modal";
import DeleteTaskModal from "./view/delete-task-modal/delete-task-modal";
import EditTaskModal from "./view/edit-task-modal/edit-task-modal";
import TaskBoardActions from "./view/task-board-actions/task-board-actions";
import TaskBoardTable from "./view/task-board-table/task-board-table";

export default function TaskBoard() {
  return (
    <TaskBoardStateProvider>
      <TaskBoardActions />
      <TaskBoardTable />
      <Switch>
        <Route path="/create-task">
          <CreateTaskModal />
        </Route>
        <Route path="/edit-task/:taskId">
          <EditTaskModal />
        </Route>
        <Route path="/delete-task/:taskId">
          <DeleteTaskModal />
        </Route>
      </Switch>
    </TaskBoardStateProvider>
  );
}
