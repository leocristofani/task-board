import { Box, Button, ButtonGroup, FormControlLabel } from "@material-ui/core";

export default function PriorityFilter() {
  return (
    <FormControlLabel
      label="Priority"
      labelPlacement="start"
      control={
        <Box ml={1}>
          <ButtonGroup size="small" color="inherit" variant="outlined">
            <Button>High</Button>
            <Button variant="contained" color="default">
              Medium
            </Button>
            <Button>Low</Button>
          </ButtonGroup>
        </Box>
      }
    />
  );
}
