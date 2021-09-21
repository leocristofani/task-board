import { Link, LinkProps } from "react-router-dom";
import { Button, ButtonProps } from "@material-ui/core";

export function LinkButton({
  children,
  ...restProps
}: LinkProps & ButtonProps) {
  return (
    <Button component={Link} {...restProps}>
      {children}
    </Button>
  );
}
