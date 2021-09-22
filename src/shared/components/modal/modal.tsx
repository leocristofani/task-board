import { ReactNode } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@material-ui/core";
import useStyles from "./modal.styles";

interface ModalProps {
  open: boolean;
  title: string;
  children: ReactNode;
  actions: ReactNode;
  onClose: () => void;
}

export default function Modal({
  open,
  title,
  children,
  actions,
  onClose,
}: ModalProps) {
  const styles = useStyles();

  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="alert-dialog-title">
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions className={styles.actions}>
        <Button onClick={onClose} color="default">
          Cancel
        </Button>
        {actions}
      </DialogActions>
    </Dialog>
  );
}
