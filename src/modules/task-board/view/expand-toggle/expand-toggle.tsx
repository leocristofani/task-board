import { useHistory } from "react-router-dom";
import { FormControlLabel, Switch } from "@material-ui/core";
import { useURL } from "../../../../shared/url-privoder/url-provider";

export default function ExpandToggle() {
  const history = useHistory();
  const url = useURL();

  const expanded = url.hasParam("expanded", "true");

  const toggleExpanded = () => {
    history.push(url.withParam("expanded", `${!expanded}`));
  };

  return (
    <FormControlLabel
      label="Expanded"
      labelPlacement="start"
      control={
        <Switch checked={expanded} color="default" onClick={toggleExpanded} />
      }
    />
  );
}
