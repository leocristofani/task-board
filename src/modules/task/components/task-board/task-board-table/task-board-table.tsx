import { Container, Grid } from "@material-ui/core";

import { TaskProgress, TaskPriority } from "../../../task-types";
import TaskBoardColumn from "../task-board-column/task-board-column";
import { useURL } from "../../../../../shared/url-privoder/url-provider";
import useTasksState from "../../../providers/tasks-state/use-tasks-state";

const taskProgressList: { label: string; progress: TaskProgress }[] = [
  { progress: "todo", label: "Todo" },
  { progress: "inProgress", label: "In Progress" },
  { progress: "inReview", label: "In Review" },
  { progress: "done", label: "Done" },
];

export default function TaskBoardTable() {
  const tasksState = useTasksState();
  const url = useURL();

  const priority = url.getParam("priority") as TaskPriority;

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        {taskProgressList.map(({ label, progress }) => (
          <TaskBoardColumn
            key={progress}
            label={label}
            tasks={tasksState.getMany({ progress, priority })}
          />
        ))}
      </Grid>
    </Container>
  );
}
