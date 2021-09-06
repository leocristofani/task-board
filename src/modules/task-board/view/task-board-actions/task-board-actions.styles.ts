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
    fontWeight: theme.typography.fontWeightBold,
  },
}));

export default useStyles;
