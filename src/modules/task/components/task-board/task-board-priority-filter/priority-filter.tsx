import { Box, ButtonGroup, FormControlLabel } from "@material-ui/core";

import { TaskPriority } from "../../../task-types";
import { useURL } from "../../../../../shared/url-privoder/url-provider";
import { LinkButton } from "../../../../../shared/components/link-button/link-button";
import useTaskPrioritySettings from "../../../hooks/use-task-priority-settings/use-task-priority-settings";

import useStyles from "./priority-filter.styles";

export default function PriorityFilter() {
  const priorities: TaskPriority[] = ["high", "medium", "low"];

  return (
    <FormControlLabel
      label="Priority"
      labelPlacement="start"
      control={
        <Box ml={1}>
          <ButtonGroup size="small" color="inherit" variant="outlined">
            {priorities.map((priority: TaskPriority) => (
              <PriorityFilterButton key={priority} priority={priority} />
            ))}
          </ButtonGroup>
        </Box>
      }
    />
  );
}

interface PriorityFilterButtonProps {
  priority: TaskPriority;
}

function PriorityFilterButton({
  priority,
  /**
   * PS. Forward props injected by the ButtonGroup component
   */
  ...restProps
}: PriorityFilterButtonProps) {
  const url = useURL();
  const taskPrioritySettings = useTaskPrioritySettings(priority);
  const isSelected = url.hasParam("priority", priority);

  const classes = useStyles();

  return (
    <LinkButton
      {...restProps}
      to={
        isSelected
          ? url.withoutParam("priority")
          : url.withParam("priority", priority)
      }
      classes={
        isSelected
          ? {
              root: classes.activeButtonRoot,
              label: classes.activeButtonLabel,
            }
          : {}
      }
    >
      {taskPrioritySettings.label}
    </LinkButton>
  );
}
