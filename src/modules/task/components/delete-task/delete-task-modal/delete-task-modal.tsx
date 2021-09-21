import { useParams, useHistory } from "react-router-dom";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";

import useTasksState from "../../../providers/tasks-state/use-tasks-state";
import TaskNotFoundModal from "../../task-not-found-modal/task-not-found-modal";

export default function DeleteTaskModal() {
  const history = useHistory();
  const params = useParams<{ taskId: string }>();

  const tasksState = useTasksState();
  const task = tasksState.getOne(params.taskId);

  const handleClose = () => {
    history.goBack();
  };

  const handleDelete = () => {
    tasksState.delete(params.taskId);

    handleClose();
  };

  if (!task) return <TaskNotFoundModal taskId={params.taskId} />;

  return (
    <Dialog
      open
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        Delete Task: {task.title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure you want to delete this task?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="default">
          Cancel
        </Button>
        <Button onClick={handleDelete} color="primary">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}
