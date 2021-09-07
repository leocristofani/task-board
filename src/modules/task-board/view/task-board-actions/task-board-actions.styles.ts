import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appBar: {
    marginBottom: theme.spacing(2),
  },
  toolbar: {
    paddingLeft: 0,
    paddingRight: 0,
  },
  label: {
    flexGrow: 1,
    textDecoration: "none",
  },
  createTaskButton: {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.common.white,
  },
}));

export default useStyles;
