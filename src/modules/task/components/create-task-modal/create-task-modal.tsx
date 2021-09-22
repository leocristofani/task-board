import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import Modal from "../../../../shared/components/modal/modal";
import TaskForm, { TASK_FORM_ID } from "../task-form/task-form";
import useTasksState from "../../providers/tasks-state/use-tasks-state";
import { CreateTaskPayload } from "../../providers/tasks-state/tasks-state-types";

export default function CreateTaskModal() {
  const history = useHistory();

  const tasksState = useTasksState();

  const handleClose = () => {
    history.goBack();
  };

  const handleSubmit = (values: CreateTaskPayload) => {
    tasksState.create(values);

    handleClose();
  };

  return (
    <Modal
      open
      onClose={handleClose}
      title="Create New Task"
      actions={
        <Button
          type="submit"
          color="primary"
          variant="contained"
          form={TASK_FORM_ID}
        >
          Create
        </Button>
      }
    >
      <TaskForm
        onSubmit={handleSubmit}
        initialValues={{
          title: "",
          priority: "high",
          progress: "todo",
          description: "",
        }}
      />
    </Modal>
  );
}
