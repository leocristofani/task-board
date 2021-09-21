import { useState } from "react";
import { ExpandMore } from "@material-ui/icons";
import {
  Card,
  CardHeader,
  IconButton,
  Typography,
  Collapse,
  CardContent,
  CardActions,
} from "@material-ui/core";

import useStyles from "./task-board-card.styles";
import { LinkButton } from "../../../../../shared/components/link-button/link-button";
import { Task } from "../../../task-types";

export interface TaskBoardCardPrpos {
  task: Task;
}

export default function TaskBoardCard(props: TaskBoardCardPrpos) {
  const classes = useStyles();

  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.header}
        onClick={toggleExpanded}
        title={<Typography variant="body1">{props.task.title}</Typography>}
        action={
          <IconButton aria-label="open">
            <ExpandMore />
          </IconButton>
        }
      />
      <Collapse in={expanded}>
        <CardContent className={classes.content}>
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
