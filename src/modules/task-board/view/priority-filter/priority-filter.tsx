import { Box, ButtonGroup, FormControlLabel } from "@material-ui/core";

import { TaskPriority } from "../../task-board-types";
import { LinkButton } from "../../../../shared/ui/link-bottom/link-button";
import { useURL } from "../../../../shared/url-privoder/url-provider";

import useStyles from "./priority-filter.styles";

const taskPriorityList: { priority: TaskPriority; label: string }[] = [
  { priority: "high", label: "High" },
  { priority: "medium", label: "Medium" },
  { priority: "low", label: "Low" },
];

export default function PriorityFilter() {
  const url = useURL();
  const classes = useStyles();

  return (
    <FormControlLabel
      label="Priority"
      labelPlacement="start"
      control={
        <Box ml={1}>
          <ButtonGroup size="small" color="inherit" variant="outlined">
            {taskPriorityList.map(({ priority, label }) => (
              <LinkButton
                key={priority}
                to={url.withParam("priority", priority)}
                className={
                  url.hasParam("priority", priority) ? classes.active : ""
                }
              >
                {label}
              </LinkButton>
            ))}
          </ButtonGroup>
        </Box>
      }
    />
  );
}
