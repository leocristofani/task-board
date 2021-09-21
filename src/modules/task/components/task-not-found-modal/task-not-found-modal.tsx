import { useHistory } from "react-router-dom";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";

export interface TaskNotFoundModalProps {
  taskId: string;
}

export default function TaskNotFoundModal(props: TaskNotFoundModalProps) {
  const history = useHistory();

  const handleClose = () => {
    history.goBack();
  };

  return (
    <Dialog
      open
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Task Not Found :(</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Unable to find task with id "{props.taskId}"
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="default">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
