import { Button } from "@material-ui/core";
import { useHistory, useParams } from "react-router-dom";

import Modal from "../../../../shared/components/modal/modal";
import TaskForm, { TASK_FORM_ID } from "../task-form/task-form";
import useTasksState from "../../providers/tasks-state/use-tasks-state";
import { UpdateTaskPayload } from "../../providers/tasks-state/tasks-state-types";
import TaskNotFoundModal from "../task-not-found-modal/task-not-found-modal";

export default function CreateTaskModal() {
  const history = useHistory();

  const params = useParams<{ taskId: string }>();

  const tasksState = useTasksState();
  const task = tasksState.getOne(params.taskId);

  const handleClose = () => {
    history.goBack();
  };

  const handleSubmit = (values: UpdateTaskPayload) => {
    tasksState.update(values);

    handleClose();
  };

  if (!task) return <TaskNotFoundModal taskId={params.taskId} />;

  return (
    <Modal
      open
      onClose={handleClose}
      title={`Edit Task: ${task.title}`}
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
      <TaskForm onSubmit={handleSubmit} initialValues={task} />
    </Modal>
  );
}
