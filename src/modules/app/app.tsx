import { BrowserRouter as RouteProvider } from "react-router-dom";
import { createTheme, CssBaseline, ThemeProvider } from "@material-ui/core";

import TaskBoard from "../task/components/task-board/task-board";
import { URLProvider } from "../../shared/url-privoder/url-provider";

export default function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={createTheme({})}>
        <RouteProvider>
          <URLProvider>
            <TaskBoard />
          </URLProvider>
        </RouteProvider>
      </ThemeProvider>
    </>
  );
}
