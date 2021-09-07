import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  activeButtonRoot: {
    backgroundColor: theme.palette.common.white,
    "&:hover": {
      backgroundColor: theme.palette.common.white,
    },
  },
  activeButtonLabel: {
    color: theme.palette.primary.main,
  },
}));

export default useStyles;
