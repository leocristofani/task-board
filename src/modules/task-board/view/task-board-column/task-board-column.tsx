import { Grid, Typography, Box } from "@material-ui/core";

import { Task } from "../../task-board-types";
import TaskBoardCard from "../task-board-card/task-board-card";

export interface TaskBoardColumnProps {
  label: string;
  tasks: Task[];
}

export default function TaskBoardColumn(props: TaskBoardColumnProps) {
  return (
    <Grid item xs={12} sm={3}>
      <Box mb={2}>
        <Typography variant="h6">{props.label}</Typography>
        <Typography variant="caption">Count {props.tasks.length}</Typography>
      </Box>
      {props.tasks.map((task) => (
        <TaskBoardCard task={task} key={task.id} />
      ))}
    </Grid>
  );
}
