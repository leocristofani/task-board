import { useTheme } from "@material-ui/core";
import { TaskPriority } from "../../task-types";

export default function useTaskPrioritySettings(priority: TaskPriority) {
  const theme = useTheme();

  const settings = {
    high: { label: "High", color: theme.palette.error.main },
    medium: { label: "Medium", color: theme.palette.warning.main },
    low: { label: "Low", color: theme.palette.success.main },
  };

  return settings[priority];
}
