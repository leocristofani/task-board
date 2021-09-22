import { useFormik } from "formik";
import {
  Grid,
  MenuItem,
  Select,
  TextField,
  FormControl,
  InputLabel,
} from "@material-ui/core";

import {
  CreateTaskPayload,
  UpdateTaskPayload,
} from "../../providers/tasks-state/tasks-state-types";

export const TASK_FORM_ID = "task-form";

interface TaskFormProps<T> {
  onSubmit: (values: T) => void;
  initialValues: T;
}

export default function TaskForm<
  T extends CreateTaskPayload | UpdateTaskPayload
>(props: TaskFormProps<T>) {
  const formik = useFormik<T>({
    onSubmit: props.onSubmit,
    initialValues: props.initialValues,
  });

  return (
    <Grid
      container
      spacing={3}
      component="form"
      id={TASK_FORM_ID}
      onSubmit={formik.handleSubmit}
    >
      <Grid item xs={12}>
        <TextField
          required
          autoFocus
          fullWidth
          name="title"
          label="Title"
          variant="outlined"
          value={formik.values.title}
          onChange={formik.handleChange}
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <FormControl fullWidth>
          <InputLabel id="task-priority" variant="outlined">
            Priority
          </InputLabel>
          <Select
            required
            fullWidth
            name="priority"
            label="Priority"
            labelId="task-priority"
            value={formik.values.priority}
            onChange={formik.handleChange}
            variant="outlined"
          >
            <MenuItem value="high">High</MenuItem>
            <MenuItem value="medium">Medium</MenuItem>
            <MenuItem value="low">Low</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12} sm={6}>
        <FormControl fullWidth>
          <InputLabel id="task-progress" variant="outlined">
            Progress
          </InputLabel>
          <Select
            required
            fullWidth
            name="progress"
            label="Progress"
            labelId="task-progress"
            value={formik.values.progress}
            onChange={formik.handleChange}
            variant="outlined"
          >
            <MenuItem value="todo">Todo</MenuItem>
            <MenuItem value="inProgress">In Progress</MenuItem>
            <MenuItem value="inReview">In Review</MenuItem>
            <MenuItem value="done">Done</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12}>
        <TextField
          required
          fullWidth
          multiline
          name="description"
          label="Description"
          variant="outlined"
          value={formik.values.description}
          onChange={formik.handleChange}
        />
      </Grid>
    </Grid>
  );
}
