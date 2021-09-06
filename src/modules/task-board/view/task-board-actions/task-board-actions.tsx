import { AppBar, Box, Container, Toolbar, Typography } from "@material-ui/core";

import ExpandToggle from "../expand-toggle/expand-toggle";
import PriorityFilter from "../priority-filter/priority-filter";

import useStyles from "./task-board-actions.styles";
import { LinkButton } from "../../../../shared/ui/link-bottom/link-button";

export default function TaskBoardActions() {
  const classes = useStyles();

  return (
    <AppBar position="relative" className={classes.appBar}>
      <Container>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" className={classes.label}>
            Task Board
          </Typography>

          <PriorityFilter />

          <Box ml={2} mr={6}>
            <ExpandToggle />
          </Box>

          <LinkButton size="small" variant="contained" to="/create-task">
            Create Task
          </LinkButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
