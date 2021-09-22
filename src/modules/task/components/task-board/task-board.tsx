import { Switch, Route } from "react-router-dom";

import { TasksStateProvider } from "../../providers/tasks-state/tasks-state-provider";
import CreateTaskModal from "../create-task-modal/create-task-modal";
import DeleteTaskModal from "../delete-task-modal/delete-task-modal";
import EditTaskModal from "../edit-task-modal/edit-task-modal";
import TaskBoardActions from "./task-board-actions/task-board-actions";
import TaskBoardTable from "./task-board-table/task-board-table";

export default function TaskBoard() {
  return (
    <TasksStateProvider>
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
    </TasksStateProvider>
  );
}
