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

import { Task } from "../../task-board-types";
import { LinkButton } from "../../../../shared/ui/link-bottom/link-button";

import useStyles from "./task-board-card.styles";

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
        title={<Typography variant="body1">{props.task.title}</Typography>}
        action={
          <IconButton aria-label="open" onClick={toggleExpanded}>
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
