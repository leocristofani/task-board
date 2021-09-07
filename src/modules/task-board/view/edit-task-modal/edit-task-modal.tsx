import { useHistory, useParams } from "react-router-dom";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
} from "@material-ui/core";

import useTaskBoardState from "../../state/use-task-board-state";
import TaskNotFoundModal from "../task-not-found-modal/task-not-found-modal";

export default function EditTaskModal() {
  const history = useHistory();
  const params = useParams<{ taskId: string }>();

  const handleClose = () => {
    history.goBack();
  };

  const taskBoardState = useTaskBoardState();
  const task = taskBoardState.getOne(params.taskId);

  if (!task) return <TaskNotFoundModal taskId={params.taskId} />;

  return (
    <Dialog open onClose={handleClose} aria-labelledby="alert-dialog-title">
      <DialogTitle id="alert-dialog-title">
        {`Edit Task: ${task.title}`}
      </DialogTitle>
      <DialogContent>Form goes here</DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="default">
          Cancel
        </Button>
        <Button onClick={handleClose} color="primary">
          Edit
        </Button>
      </DialogActions>
    </Dialog>
  );
}
