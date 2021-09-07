import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(2),
  },

  content: {
    paddingTop: 0,
    paddingBottom: 0,
  },

  header: {
    cursor: "pointer",
  },
}));

export default useStyles;
