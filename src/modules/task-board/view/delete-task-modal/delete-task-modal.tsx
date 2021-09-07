import { useParams, useHistory } from "react-router-dom";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";

import useTaskBoardState from "../../state/use-task-board-state";
import TaskNotFoundModal from "../task-not-found-modal/task-not-found-modal";

export default function DeleteTaskModal() {
  const history = useHistory();
  const params = useParams<{ taskId: string }>();

  const handleClose = () => {
    history.goBack();
  };

  const taskBoardState = useTaskBoardState();
  const task = taskBoardState.getOne(params.taskId);

  if (!task) return <TaskNotFoundModal taskId={params.taskId} />;

  return (
    <Dialog
      open
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Delete Task</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure you want to delete this task?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="default">
          Cancel
        </Button>
        <Button onClick={handleClose} color="primary">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}
