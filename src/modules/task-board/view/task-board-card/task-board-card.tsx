import { ExpandMore } from "@material-ui/icons";
import {
  Button,
  Card,
  CardHeader,
  IconButton,
  Typography,
  Collapse,
  CardContent,
  CardActions,
} from "@material-ui/core";
import { useState } from "react";
import useStyles from "./task-board-card.styles";
import { Task } from "../../task-board-types";

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
          <Button>Delete</Button>
          <Button>Edit</Button>
        </CardActions>
      </Collapse>
    </Card>
  );
}
