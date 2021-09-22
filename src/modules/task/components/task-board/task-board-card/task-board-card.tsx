import { ExpandMore, ExpandLess } from "@material-ui/icons";
import {
  Card,
  CardHeader,
  IconButton,
  Typography,
  Collapse,
  CardContent,
  CardActions,
  Chip,
} from "@material-ui/core";

import { Task } from "../../../task-types";
import useExpanded from "../../../hooks/use-expanded/use-expanded";
import { LinkButton } from "../../../../../shared/components/link-button/link-button";
import useTaskPrioritySettings from "../../../hooks/use-task-priority-settings/use-task-priority-settings";

import useStyles from "./task-board-card.styles";

export interface TaskBoardCardProps {
  task: Task;
}

export default function TaskBoardCard(props: TaskBoardCardProps) {
  const { expanded, toggleExpanded } = useExpanded();

  const taskPrioritySettings = useTaskPrioritySettings(props.task.priority);

  const classes = useStyles({ priorityColor: taskPrioritySettings.color });

  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.header}
        onClick={toggleExpanded}
        title={<Typography variant="body1">{props.task.title}</Typography>}
        action={
          <IconButton aria-label="open">
            {expanded ? <ExpandLess /> : <ExpandMore />}
          </IconButton>
        }
      />
      <Collapse in={expanded}>
        <CardContent className={classes.content}>
          <Chip
            size="small"
            variant="outlined"
            label={`${taskPrioritySettings.label} Priority`}
            className={classes.priorityChip}
          />
          <Typography variant="body1">{props.task.description}</Typography>
        </CardContent>
        <CardActions>
          <LinkButton to={`/delete-task/${props.task.id}`}>Delete</LinkButton>
          <LinkButton to={`/edit-task/${props.task.id}`}>Edit</LinkButton>
        </CardActions>
      </Collapse>
    </Card>
  );
}
