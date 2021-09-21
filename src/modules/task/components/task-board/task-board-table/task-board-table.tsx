import { Container, Grid } from "@material-ui/core";

import { generateId } from "../../../../../shared/shared-utils";
import { Task, TaskProgress } from "../../../task-types";
import TaskBoardColumn from "../task-board-column/task-board-column";

const taskProgressList: { label: string; progress: TaskProgress }[] = [
  { progress: "todo", label: "Todo" },
  { progress: "inProgress", label: "In Progress" },
  { progress: "inReview", label: "In Review" },
  { progress: "done", label: "Done" },
];

const tasks: Task[] = [
  {
    id: generateId(),
    title: "Task Title",
    priority: "high",
    progress: "done",
    description: "This is the description and it's very long just to play with",
    createdAt: Date.now(),
    updatedAt: Date.now(),
  },
  {
    id: generateId(),
    title: "Task Title",
    priority: "high",
    progress: "done",
    description: "This is the description and it's very long just to play with",
    createdAt: Date.now(),
    updatedAt: Date.now(),
  },
];

export default function TaskBoardTable() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        {taskProgressList.map(({ label, progress }) => (
          <TaskBoardColumn key={progress} label={label} tasks={tasks} />
        ))}
      </Grid>
    </Container>
  );
}
