import { FormControlLabel, Switch } from "@material-ui/core";

export default function ExpandToggle() {
  return (
    <FormControlLabel
      label="Expanded"
      labelPlacement="start"
      control={<Switch checked color="default" />}
    />
  );
}
