import { createTheme, CssBaseline, ThemeProvider } from "@material-ui/core";

import TaskBoard from "../task-board/task-board";

export default function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={createTheme({})}>
        <TaskBoard />
      </ThemeProvider>
    </>
  );
}
