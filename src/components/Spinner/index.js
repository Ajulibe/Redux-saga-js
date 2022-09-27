import React from "react";
import { Spinner as Loader } from "@chakra-ui/react";
import { FullSpinnerContainer } from "./style";

export function FullPageSpinner(props) {
  return (
    <FullSpinnerContainer>
      <Loader size="xl" color="habari.red" emptyColor="gray.200" {...props} />
    </FullSpinnerContainer>
  );
}
