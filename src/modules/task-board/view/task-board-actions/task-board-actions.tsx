import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@material-ui/core";

import ExpandToggle from "../expand-toggle/expand-toggle";
import PriorityFilter from "../priority-filter/priority-filter";

import useStyles from "./task-board-actions.styles";

export default function TaskBoardActions() {
  const styles = useStyles();

  return (
    <AppBar position="relative" className={styles.appBar}>
      <Container>
        <Toolbar className={styles.toolbar}>
          <Typography variant="h6" className={styles.label}>
            Task Board
          </Typography>

          <PriorityFilter />

          <Box ml={2} mr={6}>
            <ExpandToggle />
          </Box>

          <Button size="small" variant="contained">
            Create Task
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
