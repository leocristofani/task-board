import { Link, LinkProps } from "react-router-dom";
import { Button, ButtonProps } from "@material-ui/core";

export type LinkButtonProps = LinkProps & ButtonProps;

export function LinkButton({ children, ...restProps }: LinkButtonProps) {
  return (
    <Button component={Link} {...restProps}>
      {children}
    </Button>
  );
}
