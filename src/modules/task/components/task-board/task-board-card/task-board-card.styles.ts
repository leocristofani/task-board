import { makeStyles, Theme } from "@material-ui/core";

export interface StyleProps {
  priorityColor: string;
}

const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) => ({
  root: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: (props) => props.priorityColor,
    marginBottom: theme.spacing(2),
  },

  content: {
    paddingTop: 0,
    paddingBottom: 0,
  },

  header: {
    cursor: "pointer",
  },

  priorityChip: {
    marginBottom: theme.spacing(1),
    color: (props) => props.priorityColor,
    borderColor: (props) => props.priorityColor,
  },
}));

export default useStyles;
