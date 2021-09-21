import { Box, ButtonGroup, FormControlLabel } from "@material-ui/core";

import { TaskPriority } from "../../../task-types";
import { useURL } from "../../../../../shared/url-privoder/url-provider";
import { LinkButton } from "../../../../../shared/components/link-button/link-button";

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
            {taskPriorityList.map(({ priority, label }) => {
              const isSelected = url.hasParam("priority", priority);

              return (
                <LinkButton
                  key={priority}
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
                  {label}
                </LinkButton>
              );
            })}
          </ButtonGroup>
        </Box>
      }
    />
  );
}
