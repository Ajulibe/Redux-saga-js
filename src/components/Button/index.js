import React from "react";
import { Button } from "@chakra-ui/react";
import { ButttonContainer } from "./style";
import { Link } from "react-router-dom";

/**
 *
 * Functions as Link when a Link prop is Present
 *
 */

export const CustomButton = ({
  variant,
  onClick,
  state,
  link,
  to,
  message = "add a message",
  ghost,
  ...rest
}) => {
  return link ? (
    <ButttonContainer variant={variant} ghost={ghost}>
      <Link to={to} state={state}>
        {message}
      </Link>
    </ButttonContainer>
  ) : (
    <ButttonContainer variant={variant} onClick={onClick} ghost={ghost}>
      <Button size="md" {...rest}>
        {message}
      </Button>
    </ButttonContainer>
  );
};
