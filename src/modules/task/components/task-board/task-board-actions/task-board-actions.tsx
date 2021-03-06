import { Link } from "react-router-dom";
import { AppBar, Box, Container, Toolbar, Typography } from "@material-ui/core";

import useStyles from "./task-board-actions.styles";
import ExpandToggle from "../task-board-expand-toggle/expand-toggle";
import PriorityFilter from "../task-board-priority-filter/priority-filter";
import { LinkButton } from "../../../../../shared/components/link-button/link-button";

export default function TaskBoardActions() {
  const classes = useStyles();

  return (
    <AppBar position="relative" className={classes.appBar}>
      <Container>
        <Toolbar className={classes.toolbar}>
          <Typography
            to="/"
            variant="h6"
            color="inherit"
            component={Link}
            className={classes.label}
          >
            Task Board
          </Typography>

          <ExpandToggle />

          <Box ml={2} mr={6}>
            <PriorityFilter />
          </Box>

          <LinkButton
            className={classes.createTaskButton}
            size="small"
            variant="contained"
            to="/create-task"
          >
            Create Task
          </LinkButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
