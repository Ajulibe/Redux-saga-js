/* eslint-disable indent */
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import COLORS from "styles/colors";

export const ButttonContainer = styled.div`
  button,
  a {
    font-size: 1.6rem;
    padding: 2rem 3rem;
    color: ${COLORS.white};
    border-radius: 6px;

    /*=============================================
    =            Ghost Buttons            =
    =============================================*/

    ${({ ghost }) =>
      ghost === "primary" &&
      css`
        color: ${COLORS.primary};

        border: 1px solid ${COLORS.primary};
        background-color: ${COLORS.white};
      `}
    ${({ ghost }) =>
      ghost === "warning" &&
      css`
        color: ${COLORS.warning};
        border: 1px solid ${COLORS.warning};
        background-color: ${COLORS.white};
      `}

      ${({ ghost }) =>
      ghost === "danger" &&
      css`
        color: ${COLORS.danger};
        border: 1px solid ${COLORS.danger};
        background-color: ${COLORS.white};
      `}

      ${({ ghost }) =>
      ghost === "success" &&
      css`
        color: ${COLORS.success};
        border: 1px solid ${COLORS.success};
        background-color: ${COLORS.white};
      `}
      
      /*=============================================
      =            Button Varriants            =
      =============================================*/
      
    ${({ variant }) =>
      variant === "primary" &&
      css`
        background-color: ${COLORS.primary};
        border: 1px solid ${COLORS.primary};
      `}
      ${({ variant }) =>
      variant === "warning" &&
      css`
        background-color: ${COLORS.warning};
      `}
      ${({ variant }) =>
      variant === "danger" &&
      css`
        background-color: ${COLORS.danger};
      `}
      ${({ variant }) =>
      variant === "success" &&
      css`
        background-color: ${COLORS.success};
      `}
      ${({ variant }) =>
      variant === "darkGrey" &&
      css`
        background-color: ${COLORS.darkGrey};
      `}
  }
  a {
    font-size: 1.6rem;
    padding: 0.95rem 3rem;
    font-weight: bold;
  }
`;
