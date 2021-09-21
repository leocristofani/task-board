import { Switch, Route } from "react-router-dom";

import { TasksStateProvider } from "../../providers/tasks-state/tasks-state-provider";
import CreateTaskModal from "../create-task/create-task-modal/create-task-modal";
import DeleteTaskModal from "../delete-task/delete-task-modal/delete-task-modal";
import EditTaskModal from "../edit-task/edit-task-modal/edit-task-modal";
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

/**
 * providers
 *   task-state
 *     task-state-provider
 *     task-state-reducer
 *     task-state-actions
 *     task-state-selectors
 *     task-state-types
 *     use-task-state
 */

/*
  index.tsx
  routes.tsx
  shared
    utils.ts
    providers
    - url-service
      - url-service-provider
      - use-url-service
    - config-service
      - config-service-provider
      - use-config-service
    components
    - link-bottom
    - not-found-modal
  modules
    app
      app.tsx
      providers
      - app-state
    task
      task-types.ts
      task-routes.tsx
      providers
      - task-state
        - task-state-provider
        - task-state-reducer
        - task-state-actions
        - task-state-selectors
        - task-state-types
        - use-task-state
      components
      - task-board
          - task-board-table
          - task-board-column
          - task-board-card
          - task-board-actions
          - task-board-types.ts
          - task-board.tsx
          - task-board.spec.tsx
          - task-board-utils.ts
          - task-board-utils.spec.tsx
      - edit-task
        - edit-task-modal
          - edit-task-modal.tsx 
          - edit-task-modal.spec.tsx
        - edit-task-form
          - edit-task-form.tsx 
          - edit-task-form.spec.tsx
      - delete-task
        - edit-task-modal
        - edit-task-form
      - update-task
        - update-task-modal
        - update-task-form
 */

/**
 * Providers
 *
 * Service & State
 *
 * Components
 * =============================
 *
 * Pages & Modals
 *
 * - Sets the page or modal title
 * - Has access to route information
 * - Has access to url information
 *
 * Forms, Widgets Tables & Lists
 *
 * TaskBoardPage
 *
 * EditTaskModal
 * CreateTaskModal
 * DeleteTaskModal
 *
 * TaskBoardTable
 * TaskBoardColumn
 * TaskBoardCard
 */
